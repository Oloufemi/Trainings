import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeatureSearchModule } from '@nx-tuto/feature-search';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, FeatureSearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
