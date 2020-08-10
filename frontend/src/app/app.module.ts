import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

import { AppService } from './app.service';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SocketService } from './socket.service';
import { GroupsComponent } from './dashboard/groups/groups.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    UserModule,
    SharedModule,
    DashboardModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'groups', component: GroupsComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ])
  ],
  providers: [AppService, DataService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
