import { Component } from '@angular/core';

import { Nav } from './nav/nav';
import { Data } from 'src/data';

@Component({
  selector: 'app-base',
  template: '<app-nav [data]="nav"></app-nav><router-outlet></router-outlet>',
  styleUrls: ['./base.tag.sass']
})
export class AppBaseTag {
  nav: Nav;
  constructor(private d: Data) {
    d.nav().subscribe((k: Nav) => {
      this.nav = k;
    });
  }
}
