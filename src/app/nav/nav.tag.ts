import { Input, Component } from '@angular/core';
import { iconSet } from '@chakray/tags';
import { cloudy } from 'src/assets/fonts/cloudy';

import { Home } from './home';
import { Link } from './link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.tag.html',
  styleUrls: ['./nav.tag.sass'],
  providers: [{ provide: iconSet, useValue: { cld: cloudy } }]
})
export class AppNavTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  home: Home;
  links: Link[] = [];
}
