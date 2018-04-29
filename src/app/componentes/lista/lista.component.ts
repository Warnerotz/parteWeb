import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lista } from '../../modelos/lista';
import { ListasService } from '../../servicios/listas/listas.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public lista: Lista;

  constructor(public listasService: ListasService, private router: Router) { }

  ngOnInit() {
    this.lista = {
      name: '',
      media: [{
        name: '',
        path: ''
    }]
    };
  }



  public guardar() {
  this.listasService.postLista(this.lista).subscribe(data => {
    this.router.navigate(['/listas']);

  });

  }
}
