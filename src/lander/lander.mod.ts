import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { tagList } from './tags';
import { AlSectionTag } from './section/section.tag';
import { BaseTag } from './base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  declarations: [
    ...tagList,
    AlSectionTag,
    BaseTag],
  entryComponents: [...tagList],
  exports: [RouterModule]
})
export class LanderMod {}
