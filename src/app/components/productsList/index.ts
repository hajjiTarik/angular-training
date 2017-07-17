import { Component, OnInit } from '@angular/core';
import { getProductService } from './product.service';
import { Product } from '../../dataModel/product';

@Component({
  selector:'list-items',
  templateUrl: './view.html',
  styleUrls: ['./style.css'],
  providers: [getProductService],
})

export class ProductsListComponent implements OnInit{
  products: Product[];

  constructor(private getProductService: getProductService) { };

  getProducts() : void {
    this.getProductService
      .fetchProductFromEndPoint()
      .then(products => {
        console.log(products);
        this.products = products['products'];
      });
  }

  ngOnInit() : void {
    this.getProducts();
  }
}
