import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Lista } from '../../modelos/lista';
import { GLOBAL } from '../global';
import { UsersService } from '../users/users.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ListasService {

  listaURL = 'http://localhost:4512/api/';

  constructor(private http: Http, private _usersService: UsersService) { }

  postLista(lista: Lista) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(lista);
    console.log(body);
    // tslint:disable-next-line:prefer-const
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this._usersService.getToken(),
    });

    return this.http.post((this.listaURL + 'list'), body, {headers: headers})
           .map(res => {
              console.log(res.json());
              return res.json();

           });

  }

  getLista(listaId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this._usersService.getToken(),
    });
    return this.http.get(this.listaURL + 'list/' + listaId, {headers: headers}).map(res => res.json());

  }

  getMedia(mediaId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this._usersService.getToken(),
    });
    return this.http.get(this.listaURL + 'list/media/' + mediaId, {headers: headers} ).map(res => res);
  }

  getListas() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this._usersService.getToken(),
    });
    return this.http.get(this.listaURL + 'lists', {headers: headers}).map(res => res.json());
  }

  deleteMedia(listId, mediaId) {
    const params = JSON.stringify( {
      listId: listId,
      mediaId: mediaId
    });
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this._usersService.getToken(),
    });

    return this.http.put(this.listaURL + 'list/media/delete', params, {headers: headers})
    .map(response => response.json());
  }

  updateList(list) {
    const params = JSON.stringify(list);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this._usersService.getToken(),
    });
    return this.http.put(this.listaURL + 'list/' + list._id, params, {headers: headers})
      .map(res => res.json());
  }
}
