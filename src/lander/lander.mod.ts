import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CtIconMod } from '@chakray/tags';
import { iconSet } from '@chakray/tags';
import { cloudy } from 'src/assets/fonts/cloudy';

import { tagList } from './tags';
import { AlSectionTag } from './section/section.tag';
import { BaseTag } from './base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag
}];

@NgModule({
  imports: [
    CtIconMod,
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [{ provide: iconSet, useValue: { cld: cloudy } }],
  declarations: [
    ...tagList,
    AlSectionTag,
    BaseTag],
  entryComponents: [...tagList],
  exports: [RouterModule]
})
export class LanderMod {}
