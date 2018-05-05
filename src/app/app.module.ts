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



// componentes
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { ListasComponent } from './componentes/listas/listas.component';

// servicios
import { ListasService } from './servicios/listas/listas.service';
import { WebsocketService } from './servicios/websocket/websocket.service';

// pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { ListViewComponent } from './componentes/list-view/list-view.component';

const config: SocketIoConfig = { url: 'http://localhost:4512', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HomeComponent,
    ReproductorComponent,
    DomseguroPipe,
    ListasComponent,
    NgDropFilesDirective,
    ListViewComponent,
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
    SocketIoModule.forRoot(config)
  ],
  providers: [ListasService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
