import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { degradado } from '../../animation';
import { User } from '../../modelos/users';
import { UsersService } from '../../servicios/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [degradado]
})
export class LoginComponent implements OnInit {
  public title = 'Login';
  public user: User;
  public identity;
  public token;
  public body;
  public status: string;
  constructor(private _rotue: ActivatedRoute, private _router: Router, private _usersService: UsersService) {
    this.user = new User ('', '', '', '', 'ROLE_USER', '', '', '', false);
   }

  ngOnInit() {
  }

  onSubmit() {
    // loguear al user y conseguir el objeto usuario
    this._usersService.login(this.user).subscribe(
      response => {
        this.identity = response.user;

        if (!this.identity || !this.identity._id) {
          console.log('El usuario no se ha logueado correctamente');

        } else {

          localStorage.setItem('identity', JSON.stringify(this.identity));
          // conseguir el token
          this._usersService.login(this.user, true).subscribe(
            resp => {
              this.token = resp.token;
              if (this.token.length <= 0) {
                console.log('El token no se ha generado');
              } else {
                localStorage.setItem('token', this.token);
                this.status = 'success';
                this._router.navigate(['/']);
              }
            },
            error => {
            }
          );
        }

      },
      error => {
        const errorMessage = <any> error;
              if (errorMessage != null) {
                this.body = JSON.parse(error._body);
                this.status = 'error';
              }

      }
    );

  }

}
