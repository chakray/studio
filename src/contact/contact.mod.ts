import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseTag } from './base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BaseTag],
  exports: [RouterModule]
})
export class ContactMod { }
