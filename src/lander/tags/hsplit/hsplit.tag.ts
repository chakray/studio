import { Component } from '@angular/core';
import { LoremIpsum as Lorem } from 'lorem-ipsum';

const lorem = new Lorem();
@Component({
  selector: 'app-hsplit',
  templateUrl: './hsplit.tag.html',
  styleUrls: ['./hsplit.tag.sass'],
})
export class HsplitTag {
  name = '';
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
