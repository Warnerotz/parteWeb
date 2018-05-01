import { ListasService } from '../../servicios/listas/listas.service';
import { WebsocketService } from '../../servicios/websocket/websocket.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  public video = 'small.mp4';
  public src= "../../../assets/media/dolbycanyon.mp4";
  constructor(private _WebSocketService: WebsocketService, private _ListasService: ListasService) { }

  ngOnInit() {

  }

  addVideo() {
    this.src = "http://localhost:4512/api/list/media/small.mp4"
    /*
    this._ListasService.getMedia(this.video).subscribe(data => {
      console.log(data.url);
      this.src = data.url;

    });
*/
  }

}
