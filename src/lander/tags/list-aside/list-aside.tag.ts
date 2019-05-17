import { Component } from '@angular/core';
import { LoremIpsum as Lorem } from 'lorem-ipsum';

const lorem = new Lorem();
@Component({
  selector: 'app-list-aside',
  templateUrl: './list-aside.tag.html',
  styleUrls: ['./list-aside.tag.sass'],
})
export class ListAsideTag {
  list = [];
  set ctx(v) {
    Object.assign(this, v);
    v.list.forEach(i => {
      if (i.desc.startsWith('lorem')) {
        i.desc = lorem.generateWords(+i.desc.split(',')[1]);
      }
    });
  }
}
