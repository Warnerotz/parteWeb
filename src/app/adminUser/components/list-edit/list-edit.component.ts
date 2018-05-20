import { Component, OnInit  } from '@angular/core';
import { degradado } from '../../../animation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lista } from '../../../modelos/lista';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ListasService } from '../../../servicios/listas/listas.service';
import { GLOBAL } from '../../../servicios/global';
import { UsersService } from '../../../servicios/users/users.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit  {
  public identity;
  public token;
  public status;
  public lista: Lista;
  public listaId;
  public url = GLOBAL.url;
  uploader: FileUploader;
  constructor(
    private _rotue: ActivatedRoute,
    private _router: Router,
    public _route: ActivatedRoute,
    private _listasService: ListasService,
    private _usersService: UsersService) {

    this.identity = this._usersService.getIdentity();
    this.token =  this._usersService.getToken();
    this.listaId = localStorage.getItem('listaId');
    console.log(this.listaId);
   }

  ngOnInit() {
    this.getList();
    this.uploadFile();
  }

  uploadFile() {
    this.uploader = new FileUploader({url: 'http://localhost:4512/api/list/image/' + this.listaId,
     authToken: this.token,
     itemAlias: 'image' });
  }

  getList() {

   this._route.params.map(params => params['id'])
      .subscribe( id => {

         this._listasService.getLista(id).subscribe(response => {
          if (!response.list) {
            this._router.navigate(['/misDatos']);
          } else {
            this.lista = response.list;
          }
        });
      });
    }

    onSubmit() {

      this._listasService.updateList(this.lista).subscribe(
        response => {
          if (!response.list) {
            this.status = 'error';
          } else {
            this._listasService.getLista(response.list._id).subscribe(resp => {
              this.lista.img = resp.list.img;
            });
          }
        },
        error => {
          const errorMessage = <any>error;
          console.log(errorMessage);
          if (errorMessage !== null) {
            this.status = 'error';
          }
        }
      );
    }

    deleteMedia(listaId, mediaId) {
      console.log('lista', listaId, 'media', mediaId);
      this._listasService.deleteMedia(listaId, mediaId).subscribe(response => {
        this.lista = response.list;

      });
    }
}
