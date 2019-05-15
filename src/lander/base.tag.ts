import { Component } from '@angular/core';

import { environment as env } from 'src/environments/environment';
import { Data } from 'src/data';
import { Topic } from './topic';

@Component({
  selector: 'app-lander-base',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass'],
})
export class BaseTag {
  topics: any;
  constructor(
    private d: Data) {
    d.topics().subscribe((ts: any) => {
      this.topics = ts.map(t => new Topic(t, env.host.app));
    });
  }
}
