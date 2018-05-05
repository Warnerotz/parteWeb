import { Injectable } from '@angular/core';
//import * as io from 'socket.io-client';
import { Observable } from 'rxjs/observable';
import { Socket } from 'ng-socket-io';

@Injectable()
export class WebsocketService {

  constructor(private socket: Socket){}
  sendVideo(data) {
    this.socket.emit('changeVideo', data);
  }

  reciveVideo() {
    return this.socket
            .fromEvent<any>('VideoName')
            .map(data => data.src);





  }


}
