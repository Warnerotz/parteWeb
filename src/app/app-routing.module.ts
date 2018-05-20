import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { ListViewComponent } from './componentes/list-view/list-view.component';
import { MainComponent } from './admin/components/main/main.component';
import { ListComponent } from './admin/components/list/list.component';
import { AddComponent } from './admin/components/add/add.component';
import { EditComponent } from './admin/components/edit/edit.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { UserEditComponent } from './adminUser/components/user-edit/user-edit.component';
import { MainUserComponent } from './adminUser/components/main/main.component';
import { ListsAdminComponent } from './adminUser/components/lists-admin/lists-admin.component';
import { ListEditComponent } from './adminUser/components/list-edit/list-edit.component';
import { CreateListComponent } from './adminUser/components/create-list/create-list.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'listas', component: ListasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'misDatos',
    component: MainUserComponent,
    children: [
      {path: 'editar', component: UserEditComponent},
      {path: 'listsEditor', component: ListsAdminComponent},
      {path: 'listEditor/:id', component: ListEditComponent},
      {path: 'listCreator', component: CreateListComponent}
    ]
  },
  {path: 'listView/:id', component: ListViewComponent},
  {path: 'reproductor', component: ReproductorComponent},
  {
    path: 'adminPanel',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'listado', pathMatch: 'full'},
      {path: 'listado', component: ListComponent},
      {path: 'crear', component: AddComponent},
      {path: 'editar', component: EditComponent},

    ]


  },
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
