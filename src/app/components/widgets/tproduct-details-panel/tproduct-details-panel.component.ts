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

    /*
    article.
        fDetailName:    string;     // e.g. "Bluegold"
        fID:            string;     // uid
        fProductType:   string;     // e.g. "Blueberries"
        fPrice:         string;     // money, money, money... must be funny...
        fPriceUnit:     string;     // e.g. "per lb"
        fOriginCountry: string;     // e.g. "USA"
        fURLPhotoThumb: string;     // Thumbnail
        fURLPhoto:      string;     // Large photo
    */
}
