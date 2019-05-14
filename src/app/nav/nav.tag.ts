import { Input, Component } from '@angular/core';
import { Home } from './home';
import { Link } from './link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.tag.html',
  styleUrls: ['./nav.tag.sass']
})
export class AppNavTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  home: Home;
  links: Link[] = [];
}
