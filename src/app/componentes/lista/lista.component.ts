import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Lista } from "../../modelos/lista";
import { ListasService } from "../../servicios/listas/listas.service";
import {degradado} from '../../animation';

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
  animations: [degradado]
})
export class ListaComponent implements OnInit {
  isInDropZone = false;


  public lista: Lista;

  constructor(public listasService: ListasService, private router: Router) {}

  ngOnInit() {
    this.lista = {
      _id: '',
       name: '',
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
