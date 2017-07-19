import { Component, Input } from '@angular/core';

@Component ({
  selector: 'tags-list',
  template:`
    <span>tags: </span>
    <ul *ngFor="let tag of tags">
      <li><a href="#{{tag}}">{{tag}}</a></li>
    </ul>
  `
})

export class TagsListComponent {
  @Input() tags: Array<string>;
}
