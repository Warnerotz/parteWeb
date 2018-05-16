import { Component, OnInit } from '@angular/core';
import { degradado } from '../../animation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../modelos/users';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { UsersService } from '../../servicios/users/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  animations: [degradado]
})
export class UserEditComponent implements OnInit {
  public title: String;
  public userId;
  public user: User;
  uploader: FileUploader;
  public identity;
  public token;
  public status;

  constructor(private _rotue: ActivatedRoute, private _router: Router, private _usersService: UsersService) {
    this.title = 'Actualizar Usuario';
    this.identity = this._usersService.getIdentity();
    this.token =  this._usersService.getToken();
    this.user = this.identity;

   }

  ngOnInit() {
    this.uploadFile();
  }

  uploadFile() {
    this.uploader = new FileUploader({url: 'http://localhost:4512/api/image/' + this.identity._id,
     authToken: this.token,
     itemAlias: 'image' });
  }



  onSubmit() {

    this._usersService.updateUser(this.user).subscribe(
      response => {
        if (!response.user) {
          this.status = 'error';
        } else {
          console.log(response.user._id);
          this._usersService.getUser(response.user._id).subscribe(resp => {
            localStorage.setItem('identity', JSON.stringify(resp.user));

          });




        }
      },
      error => {
        const errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage !== null) {
          this.status = 'error';
        }

      }

    );

  }

}
