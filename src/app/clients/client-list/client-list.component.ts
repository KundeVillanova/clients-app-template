import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients : Client[] = [];

  constructor(
    private service: ClientsService, 
    private router : Router
    ){//injeção de dependencia de ClienteService para acessar os metodos e Router para rotas
  }

  ngOnInit(): void {
    //acessando o service, usa o metedo getClients e já manda a lista de clientes como resposta
    this.service.getClients().subscribe(response => this.clients = response);
  }
  
  redirecionarCadastro(){
    this.router.navigate(['/clients-form'])
  }
  

}
