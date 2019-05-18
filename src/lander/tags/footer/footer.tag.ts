import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.tag.html',
  styleUrls: ['./footer.tag.sass'],
})
export class FooterTag {
  name = '';
  icon = {};
  contact = {};
  linkset = [];
  set ctx(v) {
    Object.assign(this, v);
  }
}
