import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  @ViewChild('userModal', { static: true }) userModal: TemplateRef<any>;

  public groupId: any = Cookie.get('groupId');
  public groupName: any = Cookie.get('groupName');
  public authToken: any = Cookie.get('authToken');
  public userId: any;
  public expenses: any;


  constructor(public appService: AppService, public toastr: ToastrService, public router: Router) { }

  public viewUsers = () => {
    this.router.navigate(['groups/view/users']);
  }

  public addExpense = () => {
    Cookie.set('expenseId', "");
    this.router.navigate(['expenses/details']);
  }

  public getAllExpensesByGroup = () => {
    let data = {
      groupId: this.groupId,
      authToken: this.authToken
    }
    this.appService.getAllExpensesByGroup(data).subscribe((apiResponse) => {
      this.expenses = apiResponse.data;
    });
  }

  public goToExpenseDetails = (data) => {
    Cookie.set('expenseId', data.expenseId);
    this.router.navigate(['expenses/view']);
  }

  public goToBalances = () => {
    this.router.navigate(['groups/balances']);
  }

  public getCategoryIcon = (category) => {
    //["Food and Drink", "Home and Utilities", "Transportation", "Entertainment", "Other"];
    if (category === "Food and Drink") return "fa-hamburger"
    else if (category === "Home and Utilities") return "fa-home"
    else if (category === "Transportation") return "fa-taxi"
    else if (category === "Entertainment") return "fa-music"
    else return "fa-info-circle"
  }

  ngOnInit(): void {
    this.getAllExpensesByGroup();
  }

}
