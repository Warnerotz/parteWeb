import { GLOBAL } from './servicios/global';
import { UsersService } from './servicios/users/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public identity;
  public user = {image: null};
  public url = GLOBAL.url;
  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) {


  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();

    if (this.identity) {this.user.image = this.identity.image; }

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    if (this.identity != null) {this.user.image = this.identity.image; }
  }



  logout() {
    localStorage.clear();
    this.identity = null;
    this.user.image = null;
    this._router.navigate(['/']);
  }

}
