import { Component, OnInit                } from '@angular/core';
import { Subscription                     } from 'rxjs/Subscription';
import { TControllerService               } from '../../../services/controller/tcontroller.service'; 
import { TSearch                          } from '../../../lib/types/search/tsearch';
import { TProduct                         } from '../../../lib/types/product/tproduct';
import { TLogoComponent                   } from '../../widgets/tlogo/tlogo.component';
import { TGoCartButtonComponent           } from '../../widgets/tgo-cart-button/tgo-cart-button.component';
import { TCategoryBoxComponent            } from '../../widgets/tcategory-box/tcategory-box.component';
import { TSearchComponent                 } from '../../widgets/tsearch/tsearch.component';

@Component({
  selector: 'app-tlanding',
  templateUrl: './tlanding.component.html',
  styleUrls: ['./tlanding.component.css']
})
export class TLandingComponent implements OnInit
{
    private fProducts           : TProduct[];
    private fReceiverProducts   : Subscription;
    
    constructor (private fController: TControllerService)
    {
        let instance: TLandingComponent = this;
        
        this.fReceiverProducts = this.fController.subscribeToPushProducts().subscribe 
        (
            function (list: TProduct[])
            {
                instance.fProducts = list;
            }
        );
    }

    ngOnInit()
    {
        this.fController.queryProducts ("", TControllerService.kIDCategoryMostPopular, false);
    }
    
    getObserved (): TProduct[]
    {
        return this.fProducts;
    }
}
