import { Component, Input } from '@angular/core';

@Component({
  selector: 'images-list',
  templateUrl: './view.html',
  styleUrls: ['./style.css'],
  providers: [],
})

export class ImagesList {
  @Input() imageList : ImagesList;
}
