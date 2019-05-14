import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataMod } from './data.mod';

import { environment as env } from 'src/environments/environment';

function url(res) {
  return `${env.host.app}/${res}.json`;
}

@Injectable({ providedIn: DataMod })
export class Data {
  constructor(private h: HttpClient) {}
  nav() {
    return this.get('nav');
  }
  topics() {
    return this.get('topics');
  }
  get(k) {
    return this.h.get(url(k));
  }
}
