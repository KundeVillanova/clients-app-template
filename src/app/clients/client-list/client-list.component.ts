import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients : Client[] = [];

  constructor(private service: ClientsService) { 

  }

  ngOnInit(): void {
    this.service.getClients().subscribe(response => this.clients = response);
  }

}
