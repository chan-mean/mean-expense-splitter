import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userInfo: any;
  public authToken: any = Cookie.get('authToken');
  constructor(public appService: AppService, public router: Router, public toastr: ToastrService, public socketService: SocketService) { }

  public logOut: any = () => {
    let data = {
      userId: this.userInfo.userId,
      authToken: this.authToken
    }
    this.appService.logOut(data).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        Cookie.delete('authToken');
        Cookie.delete('receiverId');
        localStorage.setItem('userInfo', "");
        this.router.navigate(['login']);
        this.toastr.info("You have been logged out");
      }
    });
  }


  ngOnInit() {
    this.userInfo = this.appService.getUserInfoFromLocalStorage();
    this.socketService.listen('verifyUser').subscribe(() => {
      this.socketService.emit('set-user', this.authToken);
    });
    this.socketService.listen('online-user-list').subscribe();
    this.socketService.listen(this.userInfo.userId).subscribe((apiResponse) => {
      this.toastr.info(apiResponse['message'], apiResponse['title']);
    });
  }

}
