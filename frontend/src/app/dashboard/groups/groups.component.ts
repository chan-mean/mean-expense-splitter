import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  @ViewChild('groupModal', { static: true }) groupModal: TemplateRef<any>;

  public userInfo: any;
  public authToken: any = Cookie.get('authToken');
  public groups: any;

  constructor(public appService: AppService, public modal: NgbModal, public toastr: ToastrService, public router: Router) { }

  public getAllGroupsByUser = () => {
    let data = {
      userId: this.userInfo.userId,
      authToken: this.authToken
    }
    this.appService.getAllGroupsByUser(data).subscribe((apiResponse) => {
      this.groups = apiResponse.data;
    })
  }

  public newGroup = () => {
    this.router.navigate(['groups/new']);
  }

  public goToGroupDetails = (data) => {
    Cookie.set('groupId', data.groupId);
    Cookie.set('groupName', data.groupName);
    this.router.navigate(['groups/view']);
  }

  public getCategoryIcon = (category) => {
    if (category === "Apartment") return "fa-building"
    else if (category === "Trip") return "fa-taxi"
    else return "fa-users"
  }

  ngOnInit(): void {
    this.userInfo = this.appService.getUserInfoFromLocalStorage();
    if (!this.userInfo) this.router.navigate(['/login']);
    else this.getAllGroupsByUser();
  }

}
