import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Lista } from '../../../modelos/lista';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ListasService } from '../../../servicios/listas/listas.service';
import {degradado} from '../../../animation';
import { UsersService } from '../../../servicios/users/users.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css'],
  animations: [degradado],
})
export class CreateListComponent implements OnInit {
  public userId;
  public lista: Lista;

  constructor(public listasService: ListasService, private router: Router, private _userService: UsersService) { }

  ngOnInit() {
    this.userId = this._userService.getIdentity()._id;

    this.lista = {
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
  }

  public guardar() {
    this.listasService.postLista(this.lista).subscribe(data => {
      console.log(data);
      this.router.navigate([`/listView/${data.list._id}`]);
    });
  }

}
