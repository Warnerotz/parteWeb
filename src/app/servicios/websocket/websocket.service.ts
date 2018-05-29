import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { Socket } from 'ng-socket-io';

@Injectable()
export class WebsocketService {

  constructor(private socket: Socket) {}
  sendVideo(data) {
    this.socket.emit('changeVideo', data);
  }

  reciveVideo() {
    return this.socket
            .fromEvent<any>('VideoName')
            .map(data => data);

  }
  pauseVideo() {
    return this.socket.fromEvent<any>('pauseClient').map(data => data);

  }

  restartVideo() {
    return this.socket.fromEvent<any>('restartClient').map(data => data);

  }

  restartVideoEmiter() {
    this.socket.emit('restart');
  }

  pauseVideoEmiter() {
    this.socket.emit('pause', true);

  }


}
