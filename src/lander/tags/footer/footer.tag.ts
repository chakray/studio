import { Component } from '@angular/core';

class Icon {
  key = '';
  color = '';
}

class Contact {
  text = '';
  phone = '';
  location = '';
  email = '';
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.tag.html',
  styleUrls: ['./footer.tag.sass'],
})
export class FooterTag {
  name = '';
  icon = new Icon();
  contact = new Contact();
  linkset = [];
  set ctx(v) {
    Object.assign(this, v);
  }
}
