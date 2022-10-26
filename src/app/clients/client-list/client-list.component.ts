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
  clientSelected : Client;
  msgSucesso : string;
  msgFracasso : string;

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
    //quando clicar no new cliente a navegação passa por aqui
    this.router.navigate(['/clients-form'])
  }
  
  preparaDelect(client : Client){
    this.clientSelected = client;
  }
  
  deletClient(){
    this.service.deleteClientById(this.clientSelected).
    subscribe(Response => {
      this.msgSucesso='Cliente deletado com sucesso!'
      this.ngOnInit();
    }, 
    Eerror => this.msgFracasso='Falha ao deletar o cliente')
  }
}
