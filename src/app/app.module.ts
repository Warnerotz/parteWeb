import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AngularFontAwesomeModule } from 'angular-font-awesome';




// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { MainComponent } from './admin/components/main/main.component';
import { ListComponent } from './admin/components/list/list.component';
import { ListViewComponent } from './componentes/list-view/list-view.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MainUserComponent } from './adminUser/components/main/main.component';
import { UserEditComponent } from './adminUser/components/user-edit/user-edit.component';
import { ListsAdminComponent } from './adminUser/components/lists-admin/lists-admin.component';
import { ListEditComponent } from './adminUser/components/list-edit/list-edit.component';
import { CreateListComponent } from './adminUser/components/create-list/create-list.component';

// servicios
import { ListasService } from './servicios/listas/listas.service';
import { WebsocketService } from './servicios/websocket/websocket.service';
import { UsersService } from './servicios/users/users.service';
import { AdminGuardService } from './servicios/adminGuard/admin-guard.service';


// pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';





const config: SocketIoConfig = { url: 'http://localhost:4512', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReproductorComponent,
    DomseguroPipe,
    ListasComponent,
    ListViewComponent,
    MainComponent,
    ListComponent,
    RegisterComponent,
    UserEditComponent,
    MainUserComponent,
    ListsAdminComponent,
    ListEditComponent,
    CreateListComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ListasService, WebsocketService, UsersService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
