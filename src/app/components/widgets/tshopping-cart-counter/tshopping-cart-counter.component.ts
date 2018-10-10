import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshopping-cart-counter',
  templateUrl: './tshopping-cart-counter.component.html',
  styleUrls: ['./tshopping-cart-counter.component.css']
})
export class TShoppingCartCounterComponent implements OnInit
{
    fNumItems: number;

    constructor ()
    {
        this.fNumItems = 0;
    }

    ngOnInit()
    {
    }
}
