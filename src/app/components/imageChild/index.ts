import { Component, Input } from '@angular/core';
import { Image } from './../../dataModel/image';

@Component({
  selector: 'image-child',
  template:`
    <img id="{{image.id}}" width="{{image.width}}" height="{{image.height}}" src="{{image.src}}" />
  `
})

export class ImageChildComponent {
  @Input() image: Image;
};
