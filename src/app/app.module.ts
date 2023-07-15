import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VizsgafeladatComponent } from './vizsgafeladat/vizsgafeladat.component';

@NgModule({
  declarations: [
    AppComponent,
    VizsgafeladatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
