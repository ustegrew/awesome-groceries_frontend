import { Component, OnInit, Input } from '@angular/core';
import { TProduct }                 from '../../../lib/types/product/tproduct';

@Component({
  selector: 'app-tview-details-button',
  templateUrl: './tview-details-button.component.html',
  styleUrls: ['./tview-details-button.component.css']
})
export class TViewDetailsButtonComponent implements OnInit 
{
    @Input() articleID: string;

    constructor()
    {
    }

    ngOnInit() 
    {
    }
  
    gotClick() : void
    {
        console.log ("Details for " + this.articleID);
    }
}
