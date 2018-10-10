import { BrowserModule                          } from '@angular/platform-browser';
import { NgModule                               } from '@angular/core';
import { FormsModule, ReactiveFormsModule       } from '@angular/forms';
import { MatDividerModule                       } from '@angular/material';
import { AppComponent                           } from './app.component';
import { AppRouterModule                        } from './services/router/app-router.module';
import { TControllerService                     } from './services/controller/tcontroller.service';
import { TProductStoreService                   } from './services/product/store/tproduct-store.service';
import { TDBService                             } from './services/db-mock/tdb.service';
import { TLandingComponent                      } from './components/pages/tlanding/tlanding.component';
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
import { TDetailsDialogModalComponent           } from './components/widgets/tdetails-dialog-modal/tdetails-dialog-modal.component';
import { TShoppingCartCounterComponent          } from './components/widgets/tshopping-cart-counter/tshopping-cart-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TLandingComponent,
    TCartComponent,
    TLogoComponent,
    TGoCartButtonComponent,
    TCategoryBoxComponent,
    TSearchComponent,
    TProductPhotoFrameComponent,
    TViewDetailsButtonComponent,
    TAddToCartButtonComponent,
    TProductDetailsPanelComponent,
    TFourOhFourComponent,
    TDetailsDialogModalComponent,
    TShoppingCartCounterComponent
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
      TControllerService,
      TProductStoreService,
      TDBService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
