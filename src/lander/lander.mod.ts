import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BaseTag } from './base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  declarations: [BaseTag],
  exports: [RouterModule]
})
export class LanderMod {}
