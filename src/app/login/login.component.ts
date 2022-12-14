import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username : string;
  password : string;
  loginError: boolean;
  cadastrando : boolean;

  constructor(private router : Router) 
  { 

  }

  onSubmit(){
    this.router.navigate(['/home'])
    console.log(`User: ${this.username}, Pass: ${this.password}`)
  }

  preparaCadastro(event){
    event.preventDefault();
    this.cadastrando = true; 
  }

  despreparaCadastro(){
    this.cadastrando = false; 
  }


}
