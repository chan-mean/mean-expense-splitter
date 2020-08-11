import { Injectable } from '@angular/core';


import * as io from 'socket.io-client';

import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class SocketService {

  public url = `http://api.velchandru.com`;

  public socket;


  constructor(public http: HttpClient) {

    this.socket = io(this.url);

  }


  public listen = (eventName: string) => {

    return new Observable((observer) => {

      this.socket.on(eventName, (data) => {

        observer.next(data);

      });

    });

  }



  public emit = (eventName: string, data: any) => {

    this.socket.emit(eventName, data);

  }

}
