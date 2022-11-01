import { Component, OnInit } from '@angular/core';
import { Client } from '../../clients/client';
import { ClientsService } from '../../clients.service';
import { Product } from '../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product : Product
  clients : Client[] = []
  success:boolean =false;
  errors:String[];

  constructor(
    private clientService : ClientsService,
    private service : ProductService
  ) { 
    this.product = new Product
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( Response=> this.clients = Response)
  }

  onSubmit(){
    this.service.save(this.product).subscribe(
      successResponse =>{
          this.success=true;
          this.errors=null;
          this.product = new Product();
    }, 
      errorResponse =>{
          this.success= false;
          this.errors = errorResponse.error.errors;      
    })
  }  
  


  

}
