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

  stopVideo() {
    return this.socket.fromEvent<any>('stopClient').map(data => data);

  }

  pauseVideoEmiter() {
    this.socket.emit('pause', true);

  }


}
