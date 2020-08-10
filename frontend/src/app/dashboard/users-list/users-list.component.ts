import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @ViewChild('userModal', { static: true }) userModal: TemplateRef<any>;

  public groupId: any = Cookie.get('groupId');
  public groupName: any = Cookie.get('groupName');
  public authToken: any = Cookie.get('authToken');
  public usersNotInGroup: any = [];
  public usersInGroup: any = [];
  public addInd: any = false;
  public countChecked: any = 0;


  constructor(public modal: NgbModal, public appService: AppService) { }

  public addUser = () => {
    this.getUsersNotInGroup();
    this.modal.open(this.userModal, { size: 'md' });
  }

  public addUsers(close) {
    let data = {
      groupName: "",
      category: "",
      description: "",
      userId: "",
      groupId: this.groupId,
      authToken: this.authToken
    }
    let checkedList = document.querySelectorAll('.users-checkbox:checked');
    if (checkedList.length > 0) {
      checkedList.forEach((x) => {
        data['userId'] = x['value'];
        this.countChecked++;
        this.appService.addUserWithGroupOperations(data).subscribe((apiResponse) => {
          if (checkedList.length === this.countChecked) {
            this.getUsersInGroup();
            close();
          }
        });
      });
    }
  }

  public getUsersNotInGroup() {
    let data = {
      groupId: this.groupId,
      usersInGroup: 'N',
      authToken: this.authToken
    }
    this.appService.getUsersByGroup(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.usersNotInGroup = apiResponse.data;
      }
    });
  }

  public getUsersInGroup() {
    let data = {
      groupId: this.groupId,
      usersInGroup: 'Y',
      authToken: this.authToken
    }
    this.appService.getUsersByGroup(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.usersInGroup = apiResponse.data;
      }
    });
  }

  ngOnInit(): void {
    this.getUsersInGroup();
  }

}
