import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './root/app.component';
import { ProductsListComponent } from './components/productsList';
import { getProductService } from './components/productsList/product.service';
import { ImagesListComponent } from './components/imagesList';
import { ImageChildComponent } from './components/imageChild';
import { AddToCartComponent } from './components/addToCart';
import { TagsListComponent } from './components/tagsList';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ImagesListComponent,
    ImageChildComponent,
    AddToCartComponent,
    TagsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [getProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
