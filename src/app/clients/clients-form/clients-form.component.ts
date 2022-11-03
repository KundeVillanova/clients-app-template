import { Component, OnInit } from '@angular/core';
import { Client } from '../client'
import { ClientsService } from '../../clients.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success:boolean =false;
  errors:String[];

  constructor( 
    private service : ClientsService, 
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { this.client = new Client();}

  onSubmit(){ 
    if(this.client.id){
      this.service.update(this.client).subscribe( successResponse =>{
        this.success=true;
        this.errors=null;
    }, error =>{
        this.errors = ['Update has Fail !']
    })
    }
    else{
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
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams=>{
      this.client.id = urlParams['id'];
      if(this.client.id){
        this.service
        .getCLienteById(this.client.id)
        .subscribe(
          response => this.client = response, 
          errorResponse => this.client = new Client()
      )
      }
    })
  }

  voltarListagem(){ 
    this.router.navigate(['/clients/list']) 
  }

}
