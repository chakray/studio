import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  declarations: [BaseTag],
  exports: [RouterModule]
})
export class AppRouting {}
