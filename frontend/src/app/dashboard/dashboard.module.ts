import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { GroupsComponent } from './groups/groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { BalancesComponent } from './balances/balances.component';


@NgModule({
  declarations: [GroupsComponent, GroupDetailsComponent, NewGroupComponent, UsersListComponent, ExpenseDetailsComponent, ExpenseViewComponent, BalancesComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModalModule,
    FormsModule,
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'groups', component: GroupsComponent },
      { path: 'groups/view', component: GroupDetailsComponent },
      { path: 'groups/new', component: NewGroupComponent },
      { path: 'groups/view/users', component: UsersListComponent },
      { path: 'expenses/details', component: ExpenseDetailsComponent },
      { path: 'expenses/view', component: ExpenseViewComponent },
      { path: 'groups/balances', component: BalancesComponent }
    ]),
  ]
})
export class DashboardModule { }
