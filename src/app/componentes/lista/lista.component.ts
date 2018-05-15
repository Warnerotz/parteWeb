import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Lista } from "../../modelos/lista";
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ListasService } from "../../servicios/listas/listas.service";
import {degradado} from '../../animation';
import { UsersService } from '../../servicios/users/users.service';

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
  animations: [degradado]
})
export class ListaComponent implements OnInit {
  public uploader: FileUploader;
  public userId;


  public lista: Lista;

  constructor(public listasService: ListasService, private router: Router, private _userService: UsersService) {
    this.userId = this._userService.getIdentity()._id;

  }

  ngOnInit() {
    this.lista = {
      _id: '',
       name: '',
       img: '',
       media: [
        {
          name: '',
          path: '',
          size: '',
          fellow: ''
        }
      ]
    };
  }

  public guardar() {
    this.listasService.postLista(this.lista).subscribe(data => {
      console.log(data);
      this.router.navigate([`/listView/${data.list._id}`]);
    });
    this.uploadFile();
  }
  uploadFile() {
    this.uploader = new FileUploader({
      url: 'http://localhost:4512/api/list',
      authToken: this._userService.getToken(),
      itemAlias: 'image' } );
}
}
