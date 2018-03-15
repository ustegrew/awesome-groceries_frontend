import { BrowserModule                          } from '@angular/platform-browser';
import { NgModule                               } from '@angular/core';
import { FormsModule, ReactiveFormsModule       } from '@angular/forms';
import {MatDividerModule                        } from '@angular/material';

import { AppComponent                           } from './app.component';
import { TConnectorControllerStoreService       } from './services/_inter/tconnector-controller-store.service';
import { TControllerService                     } from './services/controller/tcontroller.service';
import { TProductStoreMockService               } from './services/product/tproduct-store-mock.service';
import { AppRouterModule                        } from './services/router/app-router.module';
import { TLandingComponent                      } from './components/pages/tlanding/tlanding.component';
import { TDetailsComponent                      } from './components/pages/tdetails/tdetails.component';
import { TCartComponent                         } from './components/pages/tcart/tcart.component';
import { TLogoComponent                         } from './components/widgets/tlogo/tlogo.component';
import { TGoCartButtonComponent                 } from './components/widgets/tgo-cart-button/tgo-cart-button.component';
import { TCategoryBoxComponent                  } from './components/widgets/tcategory-box/tcategory-box.component';
import { TSearchComponent                       } from './components/widgets/tsearch/tsearch.component';
import { TProductPhotoFrameComponent            } from './components/widgets/tproduct-photo-frame/tproduct-photo-frame.component';
import { TViewDetailsButtonComponent            } from './components/widgets/tview-details-button/tview-details-button.component';
import { TAddToCartButtonComponent              } from './components/widgets/tadd-to-cart-button/tadd-to-cart-button.component';
import { TProductDetailsPanelComponent          } from './components/widgets/tproduct-details-panel/tproduct-details-panel.component';
import { TFourOhFourComponent                   } from './components/pages/tfour-oh-four/tfour-oh-four.component';


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
    TProductDetailsPanelComponent,
    TFourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: 
  [
      TConnectorControllerStoreService,
      TControllerService,
      TProductStoreMockService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
 