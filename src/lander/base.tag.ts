import { Component } from '@angular/core';
import { Data } from 'src/data';

@Component({
  selector: 'app-lander-base',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass'],
})
export class BaseTag {
  home = { text: 'home', link: '' };
  nav: any;
  topics: any;
  constructor(private d: Data) {
    d.topics().subscribe(ts => {
      this.topics = ts;
    });
  }
}
