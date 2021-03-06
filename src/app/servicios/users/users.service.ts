import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../../modelos/users';
import { GLOBAL } from '../global';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class UsersService {
  public url: string;
  public identity;
  public token;
  constructor(private http: Http) { this.url = GLOBAL.url; }



  register(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url + 'register', params, {headers: headers})
      .map(res => res.json());
  }


  login(user, gettoken= null) {
    if  (gettoken != null)  {
      user.gettoken = gettoken;

    }


    const params = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.url + 'login', params, {headers: headers})
      .map(res => res.json());

  }

  getUser(userId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.getToken(),
    });
    return this.http.get(this.url + 'user/' + userId, {headers: headers}).map(res => res.json());

  }

  getUsers() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.getToken(),
    });

    return this.http.get(this.url + 'users', {headers: headers}).map(res => res.json());

  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== undefined) {
        return this.identity = identity;
      }
      return this.identity = null;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== undefined) {
        return this.token = token;
      }
      return this.token = null;

  }

  updateUser(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.getToken(),
    });
    return this.http.put(this.url + 'user/' + user._id, params, {headers: headers})
      .map(res => res.json());
  }

  deleteUser(userId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.getToken(),
    });

    return this.http.delete(this.url + 'user/' + userId, {headers: headers})
    .map(resp => resp.json());
  }

}



