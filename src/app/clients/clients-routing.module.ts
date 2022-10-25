import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component'

const routes: Routes = [
  //DELCARAR AS ROTAS DO COMPONENTES DE CLIENTE AQUI!!
  {path:'clients-form', component: ClientsFormComponent},
  {path:'clients-form/:id', component: ClientsFormComponent},
  {path:'clients-list', component: ClientListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {  }
