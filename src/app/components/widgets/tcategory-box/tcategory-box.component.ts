import { Component, OnInit, Output, EventEmitter    } from '@angular/core';
import { TControllerService                         } from '../../../services/controller/tcontroller.service';
import { TCategory }                                  from '../../../lib/types/product/tcategory';

@Component({
  selector: 'app-tcategory-box',
  templateUrl: './tcategory-box.component.html',
  styleUrls: ['./tcategory-box.component.css']
})
export class TCategoryBoxComponent implements OnInit 
{
    constructor (private fController: TControllerService)
    {
        
    }

    ngOnInit() 
    {
    }
    
    getCategories() : TCategory[]
    {
        let ret: TCategory [];
    
        ret = this.fStore.getCategories ();
        
        return ret;
    }
    
    onChangeValue (choice: string) : void
    {
    }
}
