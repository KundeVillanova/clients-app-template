import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component'

const routes: Routes = [
  //DELCARAR AS ROTAS DO COMPONENTES DE CLIENTE AQUI!!
  {path:'clients', component: LayoutComponent, children:[
    {path:'form', component: ClientsFormComponent},
    {path:'form/:id', component: ClientsFormComponent},
    {path:'list', component: ClientListComponent},
    {path:'', redirectTo: '/clients/list', pathMatch: 'full'}
  ]}
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {  }
