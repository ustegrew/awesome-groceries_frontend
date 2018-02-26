import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouterModule } from './components/lib/router/app-router.module';
import { TLandingComponent } from './components/pages/tlanding/tlanding.component';
import { TDetailsComponent } from './components/pages/tdetails/tdetails.component';
import { TCartComponent } from './components/pages/tcart/tcart.component';
import { TLogoComponent } from './components/widgets/tlogo/tlogo.component';
import { TGoCartButtonComponent } from './components/widgets/tgo-cart-button/tgo-cart-button.component';
import { TCategoryBoxComponent } from './components/widgets/tcategory-box/tcategory-box.component';
import { TSearchComponent } from './components/widgets/tsearch/tsearch.component';
import { TProductPhotoFrameComponent } from './components/widgets/tproduct-photo-frame/tproduct-photo-frame.component';
import { TViewDetailsButtonComponent } from './components/widgets/tview-details-button/tview-details-button.component';
import { TAddToCartButtonComponent } from './components/widgets/tadd-to-cart-button/tadd-to-cart-button.component';
import { TProductDetailsPanelComponent } from './components/widgets/tproduct-details-panel/tproduct-details-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TLandingComponent,
    TDetailsComponent,
    TCartComponent,
    TLogoComponent,
    TGoCartButtonComponent,
    TCategoryBoxComponent,
    TSearchComponent,
    TProductPhotoFrameComponent,
    TViewDetailsButtonComponent,
    TAddToCartButtonComponent,
    TProductDetailsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
