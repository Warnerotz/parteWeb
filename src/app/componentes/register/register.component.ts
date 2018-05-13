import { Component, OnInit } from '@angular/core';
import { degradado } from '../../animation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../modelos/users';
import { UsersService } from '../../servicios/users/users.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [degradado]
})
export class RegisterComponent implements OnInit {
   public title = 'Registro';
   public pass2 = '';
   public user: User;
   public status: string;
   constructor(private _rotue: ActivatedRoute, private _router: Router, private _usersService: UsersService) {
     this.user = new User ('', '', '', '', 'ROLE_USER', '', '', '', false);
   }

  ngOnInit() {
  }


  onSubmit(registerForm) {
    if (this.user.password === this.pass2) {
      this._usersService.register(this.user).subscribe(
        response => {
          if (response.user._id) {
            this.status = 'success';
            this.user = new User ('', '', '', '', 'ROLE_USER', '', '', '', false);
            registerForm.reset();
          } else {
           this.status = 'error';

          }

        },

        error => {
          console.log(<any>error);

        }

      )

    }

  }



}
