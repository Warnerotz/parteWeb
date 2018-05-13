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
import { ListaComponent } from './componentes/lista/lista.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { MainComponent } from './admin/components/main/main.component';
import { ListComponent } from './admin/components/list/list.component';
import { AddComponent } from './admin/components/add/add.component';
import { EditComponent } from './admin/components/edit/edit.component';

// servicios
import { ListasService } from './servicios/listas/listas.service';
import { WebsocketService } from './servicios/websocket/websocket.service';
import { UsersService } from './servicios/users/users.service';

// pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ListViewComponent } from './componentes/list-view/list-view.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';



const config: SocketIoConfig = { url: 'http://localhost:4512', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HomeComponent,
    ReproductorComponent,
    DomseguroPipe,
    ListasComponent,
    ListViewComponent,
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent
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
  providers: [ListasService, WebsocketService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
