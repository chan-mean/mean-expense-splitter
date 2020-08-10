import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {

  @ViewChild('memberModal', { static: true }) memberModal: TemplateRef<any>;

  public authToken: any = Cookie.get('authToken');
  public groupId: any = Cookie.get('groupId');
  public groupName: any = Cookie.get('groupName');
  public borrowingData: any = [];
  public expenseName: any = "";
  public category: any = "Choose category..";
  public lendingUserId: any = "Choose member..";
  public categories: any = ["Food and Drink", "Home and Utilities", "Transportation", "Entertainment", "Other"];
  public amount: any = "";
  public transactionDate: any = "";
  public notes: any = "";
  public lendingAmount: any;
  public borrowingAmount: any;
  public createInd: any = false;
  public updateInd: any = false;
  public membersInGroup: any;
  public membersIncluded: any = [];
  public membersIncludedIds: any = [];
  public expenseId: any = Cookie.get('expenseId');
  public userInfo: any;
  public oldData: any;
  public historyData: any = [];
  public exisitngMemberIds: any = [];
  public exisitnglendingUserId: any;

  constructor(public appService: AppService, public toastr: ToastrService, public router: Router, public modal: NgbModal, public socketService: SocketService) { }

  public createExpense = () => {
    if (this.validateFields()) {
      let expenseHistory = `${this.getMemberName(this.userInfo.userId)} created this expense`;
      this.borrowingAmount = this.amount / this.membersIncluded.length;
      for (let key of this.membersIncluded) this.borrowingData.push(
        {
          borrowingUserId: key.userId,
          borrowingAmount: this.borrowingAmount
        }
      );
      let data = {
        expenseName: this.expenseName,
        category: this.category,
        amount: this.amount,
        transactionDate: this.transactionDate,
        notes: this.notes,
        groupId: this.groupId,
        lendingUserId: this.lendingUserId,
        lendingAmount: this.borrowingAmount,
        borrowingData: this.borrowingData,
        expenseHistory: expenseHistory,
        authToken: this.authToken
      }
      this.createInd = true;
      this.appService.createExpenseAndAmount(data).subscribe((apiResponse) => {
        this.createInd = false;
        if (apiResponse.status === 200) {
          this.toastr.success("Expense successfully added");
          // this.router.navigate(['groups/view']);
          window.history.back();
          this.membersIncludedIds.forEach((x) => {
            this.notify("You have been added to the expense", x, this.expenseName);
          });
        }
        if (apiResponse.error) {
          this.toastr.error("Failed to add an expense!");
        }
      });
    }
  }


  public loadExpenseDetails() {
    this.userInfo = this.appService.getUserInfoFromLocalStorage();
    let data = {
      groupId: this.groupId,
      usersInGroup: 'Y',
      authToken: this.authToken
    }
    this.appService.getUsersByGroup(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.membersInGroup = apiResponse.data;
        if (this.expenseId) {
          let expenseData = {
            expenseId: this.expenseId,
            authToken: this.authToken
          }
          this.appService.getExpenseDetails(expenseData).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
              this.oldData = apiResponse.data;
              this.expenseName = apiResponse.data.expenseName;
              this.category = apiResponse.data.category;
              this.amount = apiResponse.data.amount;
              this.transactionDate = apiResponse.data.transactionDate;
              this.notes = apiResponse.data.notes;
            }
          });
          let amountData = {
            expenseId: this.expenseId,
            authToken: this.authToken
          }
          this.appService.getAmountDetailsByExpense(amountData).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
              this.exisitnglendingUserId = apiResponse.data[0].lendingUserId;
              this.lendingUserId = apiResponse.data[0].lendingUserId;
              apiResponse.data.forEach((x) => {
                let memberId = x.borrowingUserId;
                this.exisitngMemberIds.push(memberId);
                this.membersIncludedIds.push(memberId);
                this.membersIncluded.push(
                  {
                    userId: memberId,
                    fullName: this.getMemberName(memberId)
                  }
                );
              });
            }
          });
        }
      }
    });
  }

  public includeMember = () => {
    this.modal.open(this.memberModal, { size: 'md' });
  }

  public includeMembers(close) {
    let checkedList = document.querySelectorAll('.users-checkbox:checked');
    if (checkedList.length > 0) {
      checkedList.forEach((x) => {
        let memberId = x['value'];
        if (!this.membersIncludedIds.includes(memberId)) {
          this.membersIncludedIds.push(memberId)
          this.membersIncluded.push(
            {
              userId: memberId,
              fullName: x.nextSibling.textContent
            }
          );
        }
      });
    }
    close();
  }

  public getMemberName = (memberId) => {
    let memberDetails = this.membersInGroup.find(x => x.userId === memberId);
    return `${memberDetails.firstName} ${memberDetails.lastName}`;
  }

  public removeMember = (memberId) => {
    this.remove(this.membersIncludedIds, memberId);
    this.membersIncluded = this.removeByAttr(this.membersIncluded, 'userId', memberId);
  }

  public remove = (arr, value) => {
    let index = arr.indexOf(value);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }


  public removeByAttr = (arr, attr, value) => {
    let i = arr.length;
    while (i--) {
      if (arr[i][attr] === value)
        arr.splice(i, 1);
    }
    return arr;
  }

  public updateExpense = () => {
    if (this.validateFields()) {
      this.borrowingAmount = this.amount / this.membersIncluded.length;
      for (let key of this.membersIncluded) this.borrowingData.push(
        {
          borrowingUserId: key.userId,
          borrowingAmount: this.borrowingAmount
        });
      this.trackChanges();
      let data = {
        expenseId: this.expenseId,
        expenseName: this.expenseName,
        category: this.category,
        amount: this.amount,
        transactionDate: this.transactionDate,
        notes: this.notes,
        groupId: this.groupId,
        lendingUserId: this.lendingUserId,
        lendingAmount: this.borrowingAmount,
        borrowingData: this.borrowingData,
        expenseHistoryData: this.historyData,
        authToken: this.authToken
      }
      this.updateInd = true;
      this.appService.updateExpenseAndAmount(data).subscribe((apiResponse) => {
        this.updateInd = false;
        if (apiResponse.status === 200) {
          this.toastr.success("Expense successfully updated");
          // this.router.navigate(['expenses/view']);
          window.history.back();
          this.membersIncludedIds.forEach((x) => {
            this.notify("Expense has been updated", x, this.expenseName);
          });
        }
        if (apiResponse.error) {
          this.toastr.error("Failed to update an expense!");
        }
      });
    }
  }

  public trackChanges = () => {
    if (this.exisitnglendingUserId !== this.lendingUserId) this.historyData.push(`${this.getMemberName(this.userInfo.userId)} updated the payer from ${this.getMemberName(this.exisitnglendingUserId)} to ${this.getMemberName(this.lendingUserId)}`);
    if (this.oldData.amount !== this.amount) this.historyData.push(`${this.getMemberName(this.userInfo.userId)} updated the amount from ${this.oldData.amount} to ${this.amount}`);
    if (this.oldData.transactionDate !== this.transactionDate) this.historyData.push(`${this.getMemberName(this.userInfo.userId)} updated the transaction date from ${this.oldData.transactionDate} to ${this.transactionDate}`);
    if (this.oldData.category !== this.category) this.historyData.push(`${this.getMemberName(this.userInfo.userId)} updated the category`);
    if (this.oldData.notes !== this.notes) this.historyData.push(`${this.getMemberName(this.userInfo.userId)} updated the notes`);
    if (this.oldData.expenseName !== this.expenseName) this.historyData.push(`${this.getMemberName(this.userInfo.userId)} updated the expense name`);
    this.membersIncludedIds.forEach((x) => {
      if (!this.exisitngMemberIds.includes(x)) this.historyData.push(`${this.getMemberName(x)} was added to the expense`);
    });
    this.exisitngMemberIds.forEach((x) => {
      if (!this.membersIncludedIds.includes(x)) this.historyData.push(`${this.getMemberName(x)} was removed from the expense`);
    });
  }

  public notify = (message, userId, title) => {
    this.socketService.emit('notify-updates', { message: message, userId: userId, title: title });
  }

  public validateFields = () => {
    if (!this.expenseName) this.toastr.warning("Please provide the expense name");

    else if (this.category === "Choose category..") this.toastr.warning("Please select the category");

    else if (this.lendingUserId === "Choose member..") this.toastr.warning("Please select the payer");

    else if (this.membersIncludedIds.length === 0) this.toastr.warning("Please select the members to be included");

    else if (!this.amount) this.toastr.warning("Please provide the amount");

    else if (!this.transactionDate) this.toastr.warning("Please provide the transaction date");

    else return true;
  }

  ngOnInit(): void {
    this.loadExpenseDetails();
  }
}
