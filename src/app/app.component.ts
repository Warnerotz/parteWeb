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

  constructor(private _userService: UsersService, private _rotue: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.identity = this._userService.getIdentity();

  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}
