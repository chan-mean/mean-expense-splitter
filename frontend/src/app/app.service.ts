import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: String = `http://api.velchandru.com`;

  constructor(public http: HttpClient) { }

  public signUp(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('isAdmin', data.isAdmin)
      .set('userName', data.userName)
      .set('emailAddress', data.emailAddress)
      .set('password', data.password)
      .set('countryCode', data.countryCode)
      .set('mobileNumber', data.mobileNumber);

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  }

  public logIn(data): Observable<any> {
    const params = new HttpParams()
      .set('emailAddress', data.emailAddress)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  }

  public getUserInfoFromLocalStorage: any = () => {
    if (localStorage.getItem('userInfo'))
      return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserInfoToLocalStorage: any = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  public logOut(data): Observable<any> {
    const params = new HttpParams()
      .set('userId', data.userId)
      .set('authToken', data.authToken);

    return this.http.post(`${this.url}/api/v1/users/logout`, params);
  }

  public sendMail(emailAddress): Observable<any> {
    const params = new HttpParams()
      .set('emailAddress', emailAddress);

    return this.http.post(`${this.url}/api/v1/users/forgotpassword`, params);
  }

  public verifyCode(data): Observable<any> {
    const params = new HttpParams()
      .set('emailAddress', data.emailAddress)
      .set('verifyingCode', data.verifyingCode);

    return this.http.post(`${this.url}/api/v1/users/verifycode`, params);
  }

  public findEmailAndUpdatePassword(data): Observable<any> {
    const params = new HttpParams()
      .set('emailAddress', data.emailAddress)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/updatepassword`, params);
  }

  public getAllGroupsByUser(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/groups/${data.userId}/view/all?authToken=${data.authToken}`);
  }

  public addUserWithGroupOperations(data): Observable<any> {
    const params = new HttpParams()
      .set('groupName', data.groupName)
      .set('category', data.category)
      .set('description', data.description)
      .set('userId', data.userId)
      .set('authToken', data.authToken);

    return this.http.post(`${this.url}/api/v1/groups/users/add/${data.groupId}`, params);
  }

  public getUsersByGroup(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/groups/${data.groupId}/view/users/${data.usersInGroup}?authToken=${data.authToken}`);
  }

  public getAllExpensesByGroup(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/expenses/${data.groupId}/view/all?authToken=${data.authToken}`);
  }

  public createExpenseAndAmount(data): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('expenseName', data.expenseName)
      .set('category', data.category)
      .set('amount', data.amount)
      .set('transactionDate', data.transactionDate)
      .set('notes', data.notes)
      .set('groupId', data.groupId)
      .set('lendingUserId', data.lendingUserId)
      .set('lendingAmount', data.lendingAmount)
      .set('borrowingData', JSON.stringify(data.borrowingData))
      .set('expenseHistory', data.expenseHistory)
      .set('authToken', data.authToken);

    return this.http.post(`${this.url}/api/v1/expenses/create`, params, { headers: headers });
  }

  public getAmountDetailsByExpense(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/expenses/${data.expenseId}/view/amount?authToken=${data.authToken}`);
  }

  public getExpenseDetails(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/expenses/${data.expenseId}/view?authToken=${data.authToken}`);
  }

  public updateExpenseAndAmount(data): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams()
      .set('expenseId', data.expenseId)
      .set('expenseName', data.expenseName)
      .set('category', data.category)
      .set('amount', data.amount)
      .set('transactionDate', data.transactionDate)
      .set('notes', data.notes)
      .set('groupId', data.groupId)
      .set('lendingUserId', data.lendingUserId)
      .set('lendingAmount', data.lendingAmount)
      .set('borrowingData', JSON.stringify(data.borrowingData))
      .set('expenseHistoryData', JSON.stringify(data.expenseHistoryData))
      .set('authToken', data.authToken);

    return this.http.post(`${this.url}/api/v1/expenses/update`, params, { headers: headers });
  }

  public deleteExpenseAndAmount(data): Observable<any> {
    const params = new HttpParams()
      .set('expenseId', data.expenseId)
      .set('expenseName', data.expenseName)
      .set('authToken', data.authToken);

    return this.http.post(`${this.url}/api/v1/expenses/delete`, params);
  }

  public getAmountDetailsByGroup(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/groups/${data.groupId}/balances?authToken=${data.authToken}`);
  }

  public getHistoryDetailsByExpense(data): Observable<any> {
    return this.http.get(`${this.url}/api/v1/expenses/${data.expenseId}/history?authToken=${data.authToken}`);
  }


}
