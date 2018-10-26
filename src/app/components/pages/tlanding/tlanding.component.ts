import { Component, OnInit, Input               } from '@angular/core';
import { Subscription                           } from 'rxjs/Subscription';
import { MatDividerModule                       } from '@angular/material';

import { TControllerService                     } from '../../../services/controller/tcontroller.service';
import { TQuery                                 } from '../../../lib/types/search/tquery';
import { TProduct                               } from '../../../lib/types/product/tproduct';
import { TCategory                              } from '../../../lib/types/product/tcategory';
import { TLogoComponent                         } from '../../widgets/tlogo/tlogo.component';
import { TGoCartButtonComponent                 } from '../../widgets/tgo-cart-button/tgo-cart-button.component';
import { TCategoryBoxComponent                  } from '../../widgets/tcategory-box/tcategory-box.component';
import { TSearchComponent                       } from '../../widgets/tsearch/tsearch.component';
import { TDetailsDialogModalComponent           } from '../../widgets/tdetails-dialog-modal/tdetails-dialog-modal.component';
import { TPriceCounterComponent                 } from '../../widgets/tprice-counter/tprice-counter.component';
import { TTabRibbonComponent                    } from '../../widgets/ttab-ribbon/ttab-ribbon.component';
import { TTabRibbonCardModel                    } from '../../widgets/ttab-ribbon/ttab-ribbon-card-model.class';
import { TCategoryPanelComponent                } from '../../widgets/tcategory-panel/tcategory-panel.component';

@Component({
  selector: 'app-tlanding',
  templateUrl: './tlanding.component.html',
  styleUrls: ['./tlanding.component.css']
})
export class TLandingComponent implements OnInit
{
    fCategoryModels:              TTabRibbonCardModel [];
    fProducts:                    TProduct            [];

    private fReceiverProducts:    Subscription;
    private fReceiverCategories:  Subscription;

    constructor (private fController: TControllerService)
    {
        this.fCategoryModels  = [];
        this.fProducts        = [];
    }

    ngOnInit()
    {
        /* Subscribe to product changes. UI will observe via #getProductsObserved() (trackBy directive in associated html template)  */
        this.fReceiverProducts = this.fController.subscribeToPushProducts().subscribe
        (
            list => this.fProducts = list
        );

        /* Subscribe to category changes. UI will observe via #getCategoriesObserved() (trackBy directive in associated html template)  */
        this.fReceiverCategories = this.fController.subscribeToPushCategories().subscribe
        (
            list =>
            {
                let n:                number;
                let i:                number;
                let c:                TCategory;
                let m:                TTabRibbonCardModel;

                this.fCategoryModels = [];
                n = list.length;
                if (n >= 1)
                {
                    for (i = 0; i < n; i++)
                    {
                        c = list [i];
                        m = new TTabRibbonCardModel (TCategoryPanelComponent, c);
                        this.fCategoryModels.push (m);
                    }
                }
            }
        );

        this.fController.setQueryCategory   (TControllerService.kIDCategoryMostPopular);
        this.fController.setQuerySearchTerm ('');
        this.fController.queryProducts      ();
        this.fController.queryCategories    ();
    }

    getProducts(): TProduct[]
    {
        return this.fProducts;
    }
}
