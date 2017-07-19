import { Http } from '@angular/http';
import { Product } from '../dataModel/product';


export class ShoppingCart {
  constructor (private http: Http) {}
  add(product: Object = {}) : Promise<Product> {
    return this.http
        .post('shopingCart/api', product)
        .toPromise()
        .then((response)=> response as Product);
  }
}
