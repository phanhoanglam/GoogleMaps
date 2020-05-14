import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy51PewCeQk0rvFlIA2Wj2FnSZDjM3lgg',
      language: 'en',
      libraries: ['geometry', 'places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
