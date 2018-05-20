import { UsersService } from '../../servicios/users/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ListasService } from '../../servicios/listas/listas.service';

import { Lista } from '../../modelos/lista';
import { WebsocketService } from '../../servicios/websocket/websocket.service';
import {degradado} from '../../animation';
import { GLOBAL } from '../../servicios/global';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  animations: [degradado]
})
export class ListViewComponent implements OnInit {
  public id;
  uploader: FileUploader;
  public url = GLOBAL.url;
  attachmentList: any = [];
  public lista: Lista = {
    _id: '',
     name: '',
     img: '',
     description: '',
     media: [
      {
        name: '',
        path: '',
        size: '',
        fellow: ''
      }
    ]
  };

  constructor(public listasService: ListasService,
      public _router: Router,
      public _route: ActivatedRoute,
      public _websocketService: WebsocketService,
      public _usersService: UsersService
    ) {

  }

  ngOnInit() {
    this.getList();
    this.uploadMedia();
  }

  sendMedia(media) {
    this._websocketService.sendVideo({src: media});

  }

  pauseVideo(){
    this._websocketService.pauseVideoEmiter();

  }

  uploadMedia() {
    this.uploader = new FileUploader({url: 'http://localhost:4512/api/list/media/' + this.id, authToken: this._usersService.getToken()} );

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this. attachmentList.push(JSON.parse(response))
    };
    this.uploader.onCompleteAll = () => {
      this.getList();

    };
  }


  getList() {
  this._route.params.map(params => params['id'])
    .subscribe( id => {
      this.id = id;
      this.listasService.getLista(id).subscribe(response => {

        if (!response.list) {
          this._router.navigate(['/listas']);

        } else {
          this.lista = response.list;

        }

      });
    });
  }

  limpiar() {
    this.uploader.queue = [];

  }

  deleteMedia(listaId, mediaId) {
    console.log('lista', listaId, 'media', mediaId);
    this.listasService.deleteMedia(listaId, mediaId).subscribe(response => {
      this.lista = response.list;

    });
  }

}
