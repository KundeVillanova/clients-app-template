import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from './product/product';
import { productSearch } from './product/product-list/productSearch';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  apiUrl : string = environment.apiUrl+'/api/products';

  save(product : Product) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  consultar(name : string, mes : number) : Observable<productSearch[]>{
    const httpParams = new HttpParams().set("name", name).set("mes", mes ? mes.toString() : "")
    const url = this.apiUrl + "?"+httpParams.toString();
    return this.http.get<any>(url)
  }

}
