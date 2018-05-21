import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../servicios/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainUserComponent implements OnInit {
  public identity;
  public user = {image: null};

  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  logOut() {
    localStorage.clear();
    this.identity = null;
    this.user.image = null;
    this._router.navigate(['/']);
  }

}
