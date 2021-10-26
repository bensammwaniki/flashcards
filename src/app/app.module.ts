import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincomponetsComponent } from './maincomponets/maincomponets.component';
import { HomecomponetsComponent } from './homecomponets/homecomponets.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincomponetsComponent,
    HomecomponetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
