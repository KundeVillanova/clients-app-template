import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    ClientsFormComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ],
  exports: [
    ClientsFormComponent,
    ClientListComponent
  ]
})
export class ClientsModule { }
