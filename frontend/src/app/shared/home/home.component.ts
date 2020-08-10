import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public appService: AppService) { }

  public initOnLoad = () => {
    if (localStorage.getItem('userInfo').length > 0) {
      let data = {
        userId: Cookie.get('receiverId'),
        authToken: Cookie.get('authToken')
      }
      this.appService.logOut(data).subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          Cookie.delete('authToken');
          Cookie.delete('receiverId');
        }
      });
    }
    localStorage.setItem('userInfo', "");
  }

  ngOnInit() {
    this.initOnLoad();
  }

}