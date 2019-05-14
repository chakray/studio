import { Component } from '@angular/core';

const navs = [{
}];

const topics = [{
}];

@Component({
  selector: 'app-base',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass'],
})
export class BaseTag {
  home = { text: 'home', link: '' };
  navs = navs;
  topics = topics;
  constructor() { }
}
