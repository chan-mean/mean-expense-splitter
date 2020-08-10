import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css']
})
export class ExpenseViewComponent implements OnInit {

  public authToken: any = Cookie.get('authToken');
  public expenseId: any = Cookie.get('expenseId');
  public groupId: any = Cookie.get('groupId');
  public groupName: any = Cookie.get('groupName');
  public membersInGroup: any = [];
  public amountData: any = [];
  public borrowingMemberData: any = [];
  public expenseDetails: any = {};
  public expenseHistory: any = [];
  public lendingMemberName: any;
  public deleteInd: any = false;

  constructor(public appService: AppService, public modal: NgbModal, public toastr: ToastrService, public router: Router, public socketService: SocketService) { }
  @ViewChild('deleteModal', { static: true }) deleteModal: TemplateRef<any>;

  public getAmountDetailsByExpense = () => {
    let data = {
      expenseId: this.expenseId,
      authToken: this.authToken
    }
    this.appService.getAmountDetailsByExpense(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.amountData = apiResponse.data;
        this.lendingMemberName = this.getMemberName(this.amountData[0].lendingUserId);
        this.borrowingMemberData = this.amountData.map((x) => ({ borrowingMemberId: x.borrowingUserId, borrowingMemberName: this.getMemberName(x.borrowingUserId), borrowingAmount: x.lendingAmount }));
      }
    });
  }

  public getExpenseDetails = () => {
    let data = {
      expenseId: this.expenseId,
      authToken: this.authToken
    }
    this.appService.getExpenseDetails(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.expenseDetails = apiResponse.data;
      }
    });
  }

  public getHistoryDetailsByExpense = () => {
    let data = {
      expenseId: this.expenseId,
      authToken: this.authToken
    }
    this.appService.getHistoryDetailsByExpense(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        apiResponse.data.reverse();
        apiResponse.data.forEach(x => this.expenseHistory.push(x.expenseHistory));
      }
    });
  }

  public getMembers = () => {
    let data = {
      groupId: this.groupId,
      usersInGroup: 'Y',
      authToken: this.authToken
    }
    this.appService.getUsersByGroup(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.membersInGroup = apiResponse.data;
        if (this.expenseId) {
          this.getAmountDetailsByExpense();
          this.getExpenseDetails();
          this.getHistoryDetailsByExpense();
        }
      }
    });
  }

  public getMemberName = (memberId) => {
    let memberDetails = this.membersInGroup.find(x => x.userId === memberId);
    return `${memberDetails.firstName} ${memberDetails.lastName}`;
  }

  public updateExpense = () => {
    this.router.navigate(['expenses/details'])
  }

  public deleteExpense = () => {
    let data = {
      expenseId: this.expenseId,
      expenseName: this.expenseDetails.expenseName,
      authToken: this.authToken
    }
    this.deleteInd = true;
    this.appService.deleteExpenseAndAmount(data).subscribe((apiResponse) => {
      this.deleteInd = false;
      if (apiResponse.status === 200) {
        this.toastr.success("Expense successfully deleted");
        // this.router.navigate(['groups/view']);
        window.history.back();
        this.amountData.forEach((x) => {
          this.notify("Expense has been deleted", x.borrowingUserId, this.expenseDetails.expenseName);
        });
      }
      if (apiResponse.error) {
        this.toastr.error("Failed to delete an expense!");
      }
    });
  }

  public openDeleteConfirmation = () => {
    this.modal.open(this.deleteModal, { size: 'md', centered: true }).result.then((result) => {
      if (result === 'Yes') this.deleteExpense();
    });
  }

  public notify = (message, userId, title) => {
    this.socketService.emit('notify-updates', { message: message, userId: userId, title: title });
  }

  public formatDate = (date) => {
    let dateFormat = new Date(date);
    let monthDate = dateFormat.getDate();
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let stringDate = monthDate < 10 ? `0${monthDate}` : monthDate;
    return `${monthNames[dateFormat.getMonth()]} ${stringDate} ${dateFormat.getFullYear()}`;
  }


  ngOnInit(): void {
    this.getMembers();
  }

}
