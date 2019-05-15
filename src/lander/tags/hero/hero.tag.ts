import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.tag.html',
  styleUrls: ['./hero.tag.sass'],
})
export class HeroTag {
  @Input() name = '';
  @Input() sub = '';
  set ctx(v) {
    Object.assign(this, v);
  }
}
