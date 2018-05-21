import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsersService } from '../users/users.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor( private _router: Router, private _userService: UsersService) { }

  canActivate() {
    const identity = this._userService.getIdentity();
    if (identity && identity.role === 'ROLE_ADMIN') {
      return true;
    }

    this._router.navigate(['/listas']);
    return false;

  }

}
