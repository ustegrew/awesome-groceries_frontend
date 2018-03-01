import { Component, OnInit                } from '@angular/core';
import { TProductStoreMockService         } from '../../../services/product/tproduct-store-mock.service';
import { TLogoComponent                   } from '../../widgets/tlogo/tlogo.component';
import { TGoCartButtonComponent           } from '../../widgets/tgo-cart-button/tgo-cart-button.component';
import { TCategoryBoxComponent            } from '../../widgets/tcategory-box/tcategory-box.component';
import { TSearchComponent                 } from '../../widgets/tsearch/tsearch.component';
import { TProductDetailsPanelComponent    } from '../../widgets/tproduct-details-panel/tproduct-details-panel.component';

@Component({
  selector: 'app-tlanding',
  templateUrl: './tlanding.component.html',
  styleUrls: ['./tlanding.component.css']
})
export class TLandingComponent implements OnInit
{
    constructor (public store: TProductStoreMockService)
    {

    }

    ngOnInit()
    {
    }
}
