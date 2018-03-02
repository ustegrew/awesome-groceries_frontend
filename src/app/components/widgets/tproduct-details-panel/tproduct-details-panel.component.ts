import { Component, OnInit, Input } from '@angular/core';
import { TProduct                 } from '../../../lib/types/product/tproduct';

@Component({
  selector: 'app-tproduct-details-panel',
  templateUrl: './tproduct-details-panel.component.html',
  styleUrls: ['./tproduct-details-panel.component.css']
})
export class TProductDetailsPanelComponent implements OnInit 
{
    @Input() article: TProduct;
    
    constructor () 
    {
    }

    ngOnInit() 
    {
    }
}
