import { ListasService } from '../../../servicios/listas/listas.service';
import { Component, OnInit } from '@angular/core';
import { Lista } from '../../../modelos/lista';
import { GLOBAL } from '../../../servicios/global';
import { Router } from '@angular/router';

import {degradado} from '../../../animation';

@Component({
  selector: 'app-lists-admin',
  templateUrl: './lists-admin.component.html',
  styleUrls: ['./lists-admin.component.css'],
  animations: [degradado],
})
export class ListsAdminComponent implements OnInit {
  public listas: Lista[] = [];
  public url = GLOBAL.url;


  constructor(private _listasService: ListasService,  private _router: Router) { }

  ngOnInit() {
    this.getLists();

  }

  addListLocal(listaId) {
    localStorage.setItem('listaId', listaId);

  }

  getLists() {
    this._listasService.getListas().subscribe(data => {
      console.log(data);
      this.listas = data.lists;
    });

  }
  deleteList(listaId) {
    if (localStorage.getItem('listaId') && localStorage.getItem('listaId') === listaId) {
      localStorage.removeItem('listaId');
    }

    this._listasService.deleteList(listaId).subscribe( resp => {
      if (!resp.lista) {
        console.log('error en el servidor');
      }
      this.getLists();

    });
  }

}
