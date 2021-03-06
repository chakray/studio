import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Spec } from '@chakray/utils/testing';

import { AppTag as Tag } from './app.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
});
