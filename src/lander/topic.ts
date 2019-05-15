import { tags } from './tags';

export class Topic {
  type = '';
  tag: any;
  set bg(v) {
    if (!v) {
      this.bgUrl = null;
      return;
    }
    this.bgUrl = `url(${this.base}/${v})`;
  }
  bgUrl = '';
  constructor(obj, private base = '') {
    Object.assign(this, obj);
    this.tag = tags[this.type];
  }
}
