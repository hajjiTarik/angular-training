import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import { Product } from '../../dataModel/product';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class getProductService {
  constructor (private http : Http) {}

  fetchProductFromEndPoint(): Promise<Product[]>{
    return this.http.get('https://example.myshopify.com/products.json?limit=250')
                .toPromise()
                .then(response => {
                  return JSON.parse(response['_body']) as Product[]
                })
                .catch((e) => console.log(e));
  }
}
