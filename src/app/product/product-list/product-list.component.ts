import { Component, OnInit } from '@angular/core';
import { productSearch } from './productSearch';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  name: string;
  mes : number;
  meses : number [];
  lista : productSearch[]
  msg : string;


  constructor( private service : ProductService) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  ngOnInit(): void {
  }


  consultar(){
    this.service.consultar(this.name, this.mes).subscribe(response => {
      this.lista = response;
      if(this.lista.length <= 0){
          this.msg = "Nenhum registro encontrado !";
      }else {
          this.msg = null;
      }
    });
  }


}
