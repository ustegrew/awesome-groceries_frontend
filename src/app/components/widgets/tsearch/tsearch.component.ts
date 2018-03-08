import { Component, OnInit                      } from '@angular/core';
import { TProductStoreMockService               } from '../../../services/product/tproduct-store-mock.service';

@Component({
  selector: 'app-tsearch',
  templateUrl: './tsearch.component.html',
  styleUrls: ['./tsearch.component.css']
})
export class TSearchComponent implements OnInit 
{
    constructor (private fStore: TProductStoreMockService)
    {
        
    }

    ngOnInit() 
    {
    }
  
    onChangeValue (doRestrict: boolean) : void
    {
        this.fStore.searchUpdateConstraints (doRestrict)
    }
}
