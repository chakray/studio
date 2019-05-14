import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataMod } from 'src/data';

import { AppRouting } from './app.routing';
import { AppTag } from './app.tag';

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    DataMod,
    AppRouting,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppTag]
})
export class AppModule { }
