import { Component, Input } from '@angular/core';
import { Product } from '../../dataModel/product';

@Component({
  selector: 'add-to-cart',
  template: `
    <button class="addToCart" (click)="addProduct()">Add To Cart</button>
  `
})

export class AddToCartComponent {
  @Input() product: Product;

  addProduct () {
    console.log(this.product);
  }
}


