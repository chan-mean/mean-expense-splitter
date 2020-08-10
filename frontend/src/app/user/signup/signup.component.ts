import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { DataService } from '../../data.service'
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any = "";
  public lastName: any = "";
  public emailAddress: any;
  public password: any;
  public countryCode: any = "Choose country..";
  public mobileNumber: any = "";
  public spinInd: any = false;

  public countryList: Array<Object> = [];
  public codeList: Array<Object> = [];
  public countryCodeList: Array<Object> = [];

  constructor(public appService: AppService, public data: DataService, public router: Router, public toastr: ToastrService) {
  }

  public signUp: any = () => {

    if (!this.firstName) this.toastr.warning("Please enter your First Name");

    else if (!this.lastName) this.toastr.warning("Please enter your Last Name");

    else if (!this.emailAddress) this.toastr.warning("Please enter your Email");

    else if (!this.password) this.toastr.warning("Please enter your Password");

    else if (!this.countryCode) this.toastr.warning("Please fill the Country Code");

    else if (!this.mobileNumber) this.toastr.warning("Please enter your Mobile Number");

    else {
      this.spinInd = true;
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        password: this.password,
        countryCode: this.countryCode,
        mobileNumber: this.mobileNumber
      }
      this.appService.signUp(data).subscribe((apiResponse) => {
        this.spinInd = false;
        if (apiResponse.error) this.toastr.error(apiResponse.message);
        if (apiResponse.status === 200) {
          let data = {
            emailAddress: this.emailAddress,
            password: this.password
          }
          this.appService.logIn(data).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
              this.router.navigate(['/groups']);
              Cookie.set('authToken', apiResponse.data.authToken);
              Cookie.set('receiverId', apiResponse.data.userDetails.userId);
              this.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails);
              //this.toastr.show(`Welcome ${apiResponse.data.userDetails.userName}!`);
            }
          })
        }
      });
    }
  }

  public fetchCountryCodeList(): any {
    this.data.getCountryList(countries => {
      let countryArray = Object.entries(countries);
      for (let country of countryArray) this.countryList.push({ id: country[0], country: country[1] });
    });
    this.data.getCodeList(codes => {
      let codeArray = Object.entries(codes);
      for (let code of codeArray) this.codeList.push({ id: code[0], code: code[1] });
      this.countryCodeList = this.countryList.map((item, i) => Object.assign({}, item, this.codeList[i]));
      this.countryCodeList.sort((a, b) => {
        if (a['country'] < b['country']) return -1;
        if (a['country'] > b['country']) return 1;
        return 0;
      });
    });
  }

  ngOnInit() {
    this.fetchCountryCodeList();
  }
}


