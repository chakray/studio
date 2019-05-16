import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CtIconMod } from '@chakray/tags';

import { AppNavTag } from './nav/nav.tag';
import { AppBaseTag as BaseTag } from './base.tag';

const routes: Routes = [{
  path: '',
  component: BaseTag,
  loadChildren: 'src/lander#LanderMod'
}, {
  path: 'services',
  component: BaseTag,
  loadChildren: 'src/services#ServicesMod'
}, {
  path: 'pricing',
  component: BaseTag,
  loadChildren: 'src/pricing#PricingMod'
}, {
  path: 'contact',
  component: BaseTag,
  loadChildren: 'src/contact#ContactMod'
}];

@NgModule({
  imports: [
    CtIconMod,
    CommonModule,
    RouterModule.forRoot(routes)],
  declarations: [BaseTag,
    AppNavTag],
  exports: [RouterModule]
})
export class AppRouting {}
