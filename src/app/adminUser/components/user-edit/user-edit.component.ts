import { Component, OnInit,  } from '@angular/core';
import { degradado } from '../../../animation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../modelos/users';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { UsersService } from '../../../servicios/users/users.service';
import { GLOBAL } from '../../../servicios/global';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  animations: [degradado]
})
export class UserEditComponent implements OnInit {
  public title: String;
  public userId;
  public url = GLOBAL.url;
  public user: User;
  uploader: FileUploader;
  public identity;
  public token;
  public status;
  public src = '../../../assets/images/PerfilDefecto.jpg';

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
          this._usersService.getUser(response.user._id).subscribe(resp => {
            this.user.image = resp.user.image;
            delete resp.user.password;
            localStorage.setItem('identity', JSON.stringify(resp.user));
          });
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage !== null) {
          this.status = 'error';
        }

      }

    );

  }

}
