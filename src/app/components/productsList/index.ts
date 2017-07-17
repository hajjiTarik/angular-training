import { Component, OnInit } from '@angular/core';
import { getProductService } from './product.service';
import { Product } from './product';

@Component({
  selector:'list-items',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  providers: [getProductService],
})

export class ItemComponent implements OnInit{
  products: Product[];

  constructor(private getProductService: getProductService) { };

  getProducts() : void {
    this.getProductService
      .fetchProductFromEndPoint()
      .then(products => this.products = products);
  }

  ngOnInit() : void {
    this.getProducts();
  }
}
