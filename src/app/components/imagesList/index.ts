import { Component, Input } from '@angular/core';
import { Image } from './../../dataModel/Image';
@Component({
  selector: 'images-list',
  templateUrl: './view.html',
  styleUrls: ['./style.css'],
  providers: [],
})

export class ImagesList {
  @Input() images : Array<Image>;
}
