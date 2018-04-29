import { Component, OnInit } from '@angular/core';
import { Lista } from '../../modelos/lista';
import { ListasService } from '../../servicios/listas/listas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  public listas: Lista[] = [];
  constructor(public listasService: ListasService) { }

  ngOnInit() {
    this.listasService.getListas().subscribe(data => {
      console.log(data);
      this.listas = data.lists;
      console.log(this.listas);
    });
  }

}
