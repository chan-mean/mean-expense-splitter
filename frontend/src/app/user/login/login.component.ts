import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailAddress: any;
  public password: any;
  public verifyingCode: any;
  public newPassword: any;
  public confirmNewPassword: any;
  public spinInd: any = false;
  public codeInd: any = false;
  public passwordInd: any = false;

  constructor(public appService: AppService, public router: Router, public toastr: ToastrService) { }

  public logIn: any = () => {

    if (!this.emailAddress) this.toastr.warning("Please enter your Email Address");

    else if (!this.password) this.toastr.warning("Please enter your Password");

    else {
      this.spinInd = true;
      let data = {
        emailAddress: this.emailAddress,
        password: this.password
      }
      this.appService.logIn(data).subscribe((apiResponse) => {
        this.spinInd = false;
        if (apiResponse.status === 200) {
          Cookie.set('authToken', apiResponse.data.authToken);
          Cookie.set('receiverId', apiResponse.data.userDetails.userId);
          this.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails);
          this.router.navigate(['/groups']);
          this.toastr.show(`Welcome ${apiResponse.data.userDetails.firstName} ${apiResponse.data.userDetails.lastName}!`);
        }
      }, (error) => {
        this.spinInd = false;
        if (error.status == 404) this.toastr.error("No user found with the provided email");

        else if (error.status == 400) this.toastr.error("Your password is incorrect!");

        else this.toastr.error("Error while logging in", "Error!");

      });
    }
  }

  public submit(): any {
    if (!this.emailAddress) this.toastr.warning("Please enter your Email");
    else {
      this.spinInd = true;
      if (!this.codeInd && !this.passwordInd) {
        this.appService.sendMail(this.emailAddress).subscribe((apiResponse) => {
          this.spinInd = false;
          if (apiResponse.status === 200) {
            this.codeInd = true;
            this.toastr.info("A code has been sent to your email");
          }
          if (apiResponse.code === "EENVELOPE") {
            this.toastr.error("Email address is invalid!")
          }
        });
      }
      if (this.codeInd) {
        let data = {
          emailAddress: this.emailAddress,
          verifyingCode: this.verifyingCode
        }
        this.appService.verifyCode(data).subscribe((apiResponse) => {
          this.spinInd = false;
          if (!this.verifyingCode) this.toastr.warning("Please enter the code")
          else {
            if (apiResponse.status === 200) {
              this.verifyingCode = "";
              this.passwordInd = true;
              this.codeInd = false;
            }
            if (apiResponse.error) {
              this.toastr.error(apiResponse.message);
            }
          }
        });
      }
      if (this.passwordInd) {
        this.spinInd = false;
        if (this.newPassword && this.confirmNewPassword) {
          if (this.newPassword === this.confirmNewPassword) {
            let data = {
              emailAddress: this.emailAddress,
              password: this.newPassword
            }
            this.appService.findEmailAndUpdatePassword(data).subscribe((apiResponse) => {
              document.getElementById("close_button").click();
              this.toastr.success("New password successfully changed");
            });
          } else {
            this.toastr.error("Passwords doesn't match");
          }
        } else {
          this.toastr.warning("Please provide both the passwords");
        }
      }
    }
  }

  public enterKey: any = (event: any) => {

    if (event.keyCode === 13) { // For Enter.
      this.logIn();
    }
  }

  ngOnInit() {
    document.getElementById("close_button").addEventListener("click", () => {
      this.spinInd = false;
      this.codeInd = false;
    });
  }

}
