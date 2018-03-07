import { Component, OnInit                } from '@angular/core';
import { TProductStoreMockService         } from '../../../services/product/tproduct-store-mock.service';
import { TProduct                         } from '../../../lib/types/product/tproduct';
import { TCategory                        } from '../../../lib/types/product/tcategory';
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
    private fProducts: TProduct[];
    
    constructor (public store: TProductStoreMockService)
    {
    }

    ngOnInit()
    {
console.log();        
        this.fProducts = this.store.getArticlesByCategory (TCategory.kIDMostPopular);
console.log();        
    }
    
    onChangeCategory ($event): void
    {
console.log();        
        this.fProducts = this.store.getArticlesByCategory ($event);
console.log();        
    }
    
    getObserved (): TProduct[]
    {
console.log();        
        return this.fProducts;
    }
}
