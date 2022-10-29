import { Component, OnInit } from '@angular/core';
import { Client } from '../../clients/client';
import { ClientsService } from '../../clients.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  clients : Client[] = []

  constructor(
    private clientService : ClientsService
  ) { 

  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( Response=> this.clients = Response)
  }

  onSubmit(){
    
  }  
  


  

}
