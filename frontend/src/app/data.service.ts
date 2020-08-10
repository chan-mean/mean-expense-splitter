import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  public jsonFiles = '../../assets/JSON files';

  public getCodeList = (callback: any) => this.http.get(`${this.jsonFiles}/phone.json`)
    .subscribe(response => callback(response.json()));

  public getCountryList = (callback: any) => this.http.get(`${this.jsonFiles}/names.json`)
    .subscribe(response => callback(response.json()));
}
