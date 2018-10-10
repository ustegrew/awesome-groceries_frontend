import { Component, OnInit, Input               } from '@angular/core';
import { Subscription                           } from 'rxjs/Subscription';
import { MatDividerModule                       } from '@angular/material';

import { TControllerService                     } from '../../../services/controller/tcontroller.service';
import { TQuery                                 } from '../../../lib/types/search/tquery';
import { TProduct                               } from '../../../lib/types/product/tproduct';
import { TLogoComponent                         } from '../../widgets/tlogo/tlogo.component';
import { TGoCartButtonComponent                 } from '../../widgets/tgo-cart-button/tgo-cart-button.component';
import { TCategoryBoxComponent                  } from '../../widgets/tcategory-box/tcategory-box.component';
import { TSearchComponent                       } from '../../widgets/tsearch/tsearch.component';
import { TDetailsDialogModalComponent           } from '../../widgets/tdetails-dialog-modal/tdetails-dialog-modal.component';

@Component({
  selector: 'app-tlanding',
  templateUrl: './tlanding.component.html',
  styleUrls: ['./tlanding.component.css']
})
export class TLandingComponent implements OnInit
{
    private fProducts:         TProduct [];
    private fReceiverProducts: Subscription;

    constructor (private fController: TControllerService)
    {
        /* Subscribe to product changes. UI will observe via #getObserved() (trackBy directive in associated html template)  */
        this.fReceiverProducts = this.fController.subscribeToPushProducts().subscribe
        (
            list => this.fProducts = list
        );
    }

    ngOnInit()
    {
        this.fController.setQueryCategory   (TControllerService.kIDCategoryMostPopular);
        this.fController.setQuerySearchTerm ('');
        this.fController.queryProducts      ();
    }

    getObserved (): TProduct[]
    {
        return this.fProducts;
    }
}
