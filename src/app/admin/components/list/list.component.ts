import { Component, OnInit  } from '@angular/core';
import { User } from '../../../modelos/users';
import { UsersService } from '../../../servicios/users/users.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit  {

  title = 'Listado';
  public users: User[] = [];

  constructor(private _usersService: UsersService) {
}

ngOnInit() {
  this.getUsers();
}

getUsers() {
  this._usersService.getUsers().subscribe(resp => {
    this.users = resp.users;
  });

}

validarUsuario(user) {
  user.validated = true;
  this._usersService.updateUser(user).subscribe( resp => {
    this.getUsers();
  });
}

EliminarUsuario(userId) {
    this._usersService.deleteUser(userId).subscribe( resp => {
    if (!resp.user) {
      console.log('error en el servidor');
    }
    this.getUsers();

  });
}


}
