import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { ListViewComponent } from './componentes/list-view/list-view.component';
const routes: Routes = [
  {path: ' ', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'listas', component: ListasComponent},
  {path: 'lista/:id', component: ListaComponent},
  {path: 'listView/:id', component: ListViewComponent},
  {path: 'reproductor', component: ReproductorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
