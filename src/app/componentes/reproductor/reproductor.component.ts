import { ListasService } from '../../servicios/listas/listas.service';
import { WebsocketService } from '../../servicios/websocket/websocket.service';
import {degradado} from '../../animation';

import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css'],
  animations: [degradado]
})
export class ReproductorComponent implements OnInit {
  public video;
  public api;
  public play=false;
  msg;
  public connection;
  public src = '../../../assets/media/dolbycanyon.mp4';
  constructor(private _WebSocketService: WebsocketService, private _ListasService: ListasService, public _api: VgAPI) {


   }

  ngOnInit() {
    this._WebSocketService.reciveVideo().subscribe(msg => {
     console.log(msg);
     this.video = msg.src;
     this.play = msg.play;
     this.addVideo();
     this.playVideo();

    });
    this._WebSocketService.pauseVideo().subscribe(msg => {
    if(msg){
      this.pauseVideo();

    }

    });

    this._WebSocketService.stopVideo().subscribe(msg => {
      if (msg) {
        this.stopVideo();

      }

      });
  }



  onPlayerReady(api: VgAPI) {
    console.log(api);
    this.api = api;
    this.api.getDefaultMedia().subscriptions.playing.subscribe(
      () => {
          console.log("holaa");
      }
  );



}

  addVideo() {
    this._ListasService.getMedia(this.video).subscribe(data => {
      console.log(data.url);
      this.src = data.url;
    });

  }

  playVideo() {

    setTimeout(() => this.api.getDefaultMedia().play(), 300);


  }

  pauseVideo() {
    setTimeout(() => this.api.getDefaultMedia().pause(), 300);
  }

  stopVideo() {
    setTimeout(() => this.api.getDefaultMedia().ended(), 300);

  }

}
