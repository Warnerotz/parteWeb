import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Lista } from '../../modelos/lista';
import { GLOBAL } from '../global';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ListasService {

  listaURL = 'http://localhost:4512/api/';

  constructor(private http: Http) { }

  postLista(lista: Lista) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(lista);
    console.log(body);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers ({
      'Content-Type': 'application/json'

    });

    return this.http.post((this.listaURL + 'list'), body, {headers: headers})
           .map(res => {
              console.log(res.json());
              return res.json();

           });

  }

  getLista(listaId) {
    return this.http.get(this.listaURL + 'list/' + listaId).map(res => res.json());

  }

  getMedia(mediaId) {
    console.log(mediaId);
    return this.http.get(this.listaURL + 'list/media/' + mediaId ).map(res => res);
  }

  getListas() {

    return this.http.get(this.listaURL + 'lists').map(res => res.json());

  }
}
