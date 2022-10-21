import { Component, OnInit } from '@angular/core';
import { Client } from '../client'
import { ClientsService } from '../../clients.service'

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success:boolean =false;
  errors:String[];

  constructor( private service : ClientsService) { 
     this.client = new Client();
  }

  onSubmit(){
    // callaback ao dar submit no form de clientes, será mostrado a mensagem ou de sucesso ou de erro
    this.service.save(this.client).subscribe(
    successResponse =>{
        this.success=true;
        this.errors=null;
        this.client = successResponse;
    }, 
    errorResponse =>{
        this.success= false;
        this.errors = errorResponse.error.errors;      
    })
  }

  ngOnInit(): void {}

}
