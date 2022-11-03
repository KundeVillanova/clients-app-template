import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path:'products', component: LayoutComponent, children:[
    {path:'form', component: ProductFormComponent},
    {path:'list', component: ProductListComponent},
    { path: '', redirectTo: '/products/list', pathMatch: 'full' }
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
