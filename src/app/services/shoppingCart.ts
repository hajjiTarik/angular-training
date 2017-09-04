import { Http, Response } from '@angular/http';
import { Product } from '../dataModel/product';

import 'rxjs/operator/toPromise';

export class ShoppingCart {
  constructor (private http: Http) {}
  add(product: Object = {}) : Promise<Product> {
    return this.http
        .post('shopingCart/api', product)
        .toPromise()
        .then(response => response as Product);
  }
}
