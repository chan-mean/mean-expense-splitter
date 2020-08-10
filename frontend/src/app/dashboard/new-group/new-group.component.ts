import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {
  public userInfo: any;
  public authToken: any = Cookie.get('authToken');
  public groupName: any;
  public defaultCategory: any = "Apartment";
  public category: any = this.defaultCategory;
  public categories: any = ["Apartment", "Trip", "Other"];
  public description: any;
  public createInd: any = false;

  constructor(public appService: AppService, public toastr: ToastrService, public router: Router) { }

  public create = () => {
    if (this.validateFields()) {
      let data = {
        groupName: this.groupName,
        category: this.category,
        description: this.description,
        userId: this.userInfo.userId,
        groupId: '0',
        authToken: this.authToken
      }
      this.createInd = true;
      this.appService.addUserWithGroupOperations(data).subscribe((apiResponse) => {
        this.createInd = false;
        if (apiResponse.status === 200) {
          this.toastr.success("Group successfully created");
          window.history.back();
          // this.router.navigate(['groups/view']);
          Cookie.set('groupId', apiResponse.data.groupId);
          Cookie.set('groupName', apiResponse.data.groupName);
        }
        if (apiResponse.error) {
          this.toastr.error("Failed to create a group!");
        }
      });
    }
  }

  public choose(value) {
    this.category = value;
  }

  public validateFields = () => {
    if (!this.groupName) this.toastr.warning("Please provide the group name");

    else return true;
  }

  ngOnInit(): void {
    this.userInfo = this.appService.getUserInfoFromLocalStorage();
  }

}
