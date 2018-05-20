import { ListasService } from '../../../servicios/listas/listas.service';
import { Component, OnInit } from '@angular/core';
import { Lista } from '../../../modelos/lista';
import { GLOBAL } from '../../../servicios/global';

@Component({
  selector: 'app-lists-admin',
  templateUrl: './lists-admin.component.html',
  styleUrls: ['./lists-admin.component.css']
})
export class ListsAdminComponent implements OnInit {
  public listas: Lista[] = [];
  public url = GLOBAL.url;


  constructor(private _listasService: ListasService) { }

  ngOnInit() {
    this._listasService.getListas().subscribe(data => {
      console.log(data);
      this.listas = data.lists;
    });

  }

  addListLocal(listaId) {
    localStorage.setItem('listaId', listaId);

  }

}
