import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './root/app.component';
import { ProductsListComponent } from './components/productsList';
import { getProductService } from './components/productsList/product.service';
import { ImagesList } from './components/imagesList';
import { ImageChild } from './components/imageChild';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ImagesList,
    ImageChild,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [getProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
