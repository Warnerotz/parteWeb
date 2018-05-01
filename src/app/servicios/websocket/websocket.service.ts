import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/observable';

@Injectable()
export class WebsocketService {

  private socket = io('http://localhost:4512');

  mandarmensaje() {
    this.socket.emit('hellow', data => {
      console.log(data);

    });


  }
}
