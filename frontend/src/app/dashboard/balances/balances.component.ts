import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  public groupId: any = Cookie.get('groupId');
  public groupName: any = Cookie.get('groupName');
  public authToken: any = Cookie.get('authToken');
  public expenses: any;
  public membersInGroup: any;
  public memberIds: any = [];
  public borrowingInfo: any = [];
  public borrowingObj: any = {};
  public borrowingArr: any = [];
  public totalBorrowingObj: any = {};
  public lendingInfo: any = [];
  public lendingObj: any = {};
  public lendingArr: any = [];
  public totalLendingObj: any = {};
  public totalBalanceObj: any = {};
  public totalBalanceArr: any = [];
  public balanceObj: any = {};
  public balanceArr: any = [];

  constructor(public appService: AppService, public toastr: ToastrService, public router: Router) { }

  public loadDetails = () => {
    let data = {
      groupId: this.groupId,
      usersInGroup: 'Y',
      authToken: this.authToken
    }
    this.appService.getUsersByGroup(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.membersInGroup = apiResponse.data;
        this.membersInGroup.forEach((x) => {
          this.memberIds.push(x.userId);
          this.borrowingObj[x.userId] = {};
          this.lendingObj[x.userId] = {};
          this.balanceObj[x.userId] = {};
          this.totalBorrowingObj[x.userId] = 0;
          this.totalLendingObj[x.userId] = 0;
          this.membersInGroup.forEach((y) => {
            if (x.userId !== y.userId) {
              this.borrowingObj[x.userId][y.userId] = 0;
              this.lendingObj[x.userId][y.userId] = 0;
            }
          })
        });
        let data = {
          groupId: this.groupId,
          authToken: this.authToken
        }
        this.appService.getAmountDetailsByGroup(data).subscribe((apiResponse) => {
          this.memberIds.forEach((x) => {
            let borrowedData = apiResponse.data.filter((y) => {
              return y.borrowingUserId === x && y.lendingUserId !== x;
            });
            borrowedData.forEach((z) => {
              this.borrowingObj[z.borrowingUserId][z.lendingUserId] = (this.borrowingObj[z.borrowingUserId][z.lendingUserId] || 0) + parseFloat(z.borrowingAmount);
              this.totalBorrowingObj[z.borrowingUserId] = (this.totalBorrowingObj[z.borrowingUserId] || 0) + parseFloat(z.borrowingAmount);
            });
            let lendedData = apiResponse.data.filter((y) => {
              return y.lendingUserId === x && y.borrowingUserId !== x;
            });
            lendedData.forEach((z) => {
              this.lendingObj[z.lendingUserId][z.borrowingUserId] = (this.lendingObj[z.lendingUserId][z.borrowingUserId] || 0) + parseFloat(z.lendingAmount);
              this.totalLendingObj[z.lendingUserId] = (this.totalLendingObj[z.lendingUserId] || 0) + parseFloat(z.lendingAmount);
            });
            this.totalBalanceObj[x] = this.totalLendingObj[x] - this.totalBorrowingObj[x];
            lendedData.forEach((z) => {
              this.balanceObj[x][z.borrowingUserId] = this.lendingObj[x][z.borrowingUserId] - this.borrowingObj[x][z.borrowingUserId];
            });
            borrowedData.forEach((z) => {
              this.balanceObj[x][z.lendingUserId] = this.lendingObj[x][z.lendingUserId] - this.borrowingObj[x][z.lendingUserId];
            });
          });

          for (let i in this.balanceObj) {
            for (let j in this.balanceObj[i]) {
              let amount = this.roundToTwoDigits(this.balanceObj[i][j]);
              this.balanceArr.push({
                firstMemberId: i,
                firstMemberName: this.getMemberName(i),
                firstPrompt: (() => {
                  if (amount > 0) return 'gets back'
                  else if (amount < 0) return 'owes'
                  else return '';
                })(),
                balanceAmount: (() => {
                  if (amount !== 0) return Math.abs(amount)
                  else return '';
                })(),
                secondPrompt: (() => {
                  if (amount > 0) return 'from'
                  else if (amount < 0) return 'to'
                  else return '';
                })(),
                secondMemberId: j,
                secondMemberName: this.getMemberName(j),
                thirdPrompt: (() => {
                  if (amount !== 0) return 'in total'
                  else return 'is settled up';
                })()
              });
            }
          }
          for (let i in this.totalBalanceObj) {
            let amount = this.roundToTwoDigits(this.totalBalanceObj[i]);
            this.totalBalanceArr.push({
              memberId: i,
              memberName: this.getMemberName(i),
              firstPrompt: (() => {
                if (amount > 0) return 'gets back'
                else if (amount < 0) return 'owes'
                else return '';
              })(),
              balanceAmount: (() => {
                if (amount !== 0) return Math.abs(amount)
                else return '';
              })(),
              secondPrompt: (() => {
                if (amount !== 0) return 'in total'
                else return 'is settled up';
              })()
            });
          }
        });
      }
    });
  }

  public filterMember = (memberId) => {
    return this.balanceArr.filter(x => x.firstMemberId === memberId);
  }

  public getMemberName = (memberId) => {
    let memberDetails = this.membersInGroup.find(x => x.userId === memberId);
    return `${memberDetails.firstName} ${memberDetails.lastName}`;
  }

  public roundToTwoDigits = (num) => {
    return Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100;
  }

  ngOnInit(): void {
    this.loadDetails();
  }

}
