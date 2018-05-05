import { ListasService } from '../../servicios/listas/listas.service';
import { WebsocketService } from '../../servicios/websocket/websocket.service';

import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  public video;
  public api;
  msg;
  public connection;
  public src = '../../../assets/media/dolbycanyon.mp4';
  constructor(private _WebSocketService: WebsocketService, private _ListasService: ListasService) {


   }

  ngOnInit() {
    console.log("holaaa");

    this._WebSocketService.reciveVideo().subscribe(msg => {
     console.log("dentro del subscribe!!")
      this.video = msg;
      this.addVideo();
    });
  }



  onPlayerReady(api: VgAPI) {
    this.api = api;



}

  addVideo() {
    this._ListasService.getMedia(this.video).subscribe(data => {
      console.log(data.url);
      this.src = data.url;
    });

  }

}
