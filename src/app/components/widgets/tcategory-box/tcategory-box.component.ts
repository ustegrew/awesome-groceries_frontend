import { Component, OnInit, Output, EventEmitter    } from '@angular/core';
import { TProductStoreMockService                   } from '../../../services/product/tproduct-store-mock.service';

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
    
    onChangeValue (choice: string) : void
    {
        this.onChangeCategory.emit (choice);
    }
}
