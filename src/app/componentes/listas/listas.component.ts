import { Component, OnInit } from "@angular/core";
import { Lista } from "../../modelos/lista";
import { ListasService } from "../../servicios/listas/listas.service";
import {degradado} from '../../animation';
import { GLOBAL } from '../../servicios/global';
import { UsersService } from "../../servicios/users/users.service";


@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.css"],
  animations: [degradado]
})
export class ListasComponent implements OnInit {
  public listas: Lista[] = [];
  public identity;
  public url = GLOBAL.url;
  constructor(public listasService: ListasService, public _usersService: UsersService) {
    this.identity = this._usersService.getIdentity();
  }

  ngOnInit() {
    this.listasService.getListas(this.identity._id).subscribe(data => {
      console.log(data);
      this.listas = data.lists;
      console.log("lista", this.listas);
    });
  }


}
