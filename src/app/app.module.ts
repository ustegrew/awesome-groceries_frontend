import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouterModule } from './/app-router.module';
import { TLandingComponent } from './components/tlanding/tlanding.component';
import { TDetailsComponent } from './components/tdetails/tdetails.component';
import { TCartComponent } from './components/tcart/tcart.component';


@NgModule({
  declarations: [
    AppComponent,
    TLandingComponent,
    TDetailsComponent,
    TCartComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
