import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Lista } from "../../modelos/lista";
import { FileItem } from "../../modelos/fileItem";
import { ListasService } from "../../servicios/listas/listas.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  isInDropZone = false;

  archivos: FileItem[] = [];

  public lista: Lista;

  constructor(public listasService: ListasService, private router: Router) {}

  ngOnInit() {
    this.lista = {
      name: "",
      media: [
        {
          name: "",
          path: ""
        }
      ]
    };
  }

  public cleanPayload(e) {
    event.preventDefault();
    this.archivos = [];
  }

  public guardar() {
    this.listasService.postLista(this.lista).subscribe(data => {
      this.router.navigate(["/listas"]);
    });
  }
}
