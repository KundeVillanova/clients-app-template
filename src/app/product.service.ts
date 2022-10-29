import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  apiUrl : string = environment.apiUrl+'/api/products';

  save(product : Product) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }


}
