import { Component, OnInit, Output, EventEmitter    } from '@angular/core';
import { TProductStoreMockService                   } from '../../../services/product/tproduct-store-mock.service';
import { TCategory }                                  from '../../../lib/types/product/tcategory';

@Component({
  selector: 'app-tcategory-box',
  templateUrl: './tcategory-box.component.html',
  styleUrls: ['./tcategory-box.component.css']
})
export class TCategoryBoxComponent implements OnInit 
{
    @Output() onChangeCategory = new EventEmitter<string> ();
    
    constructor (public store: TProductStoreMockService)
    {
        
    }

    ngOnInit() 
    {
    }
    
    getCategories() : TCategory[]
    {
        let ret: TCategory [];
    
        ret = this.store.getCategories ();
        
        return ret;
    }
    
    onChangeValue (choice: string) : void
    {
        this.onChangeCategory.emit (choice);
    }
}
