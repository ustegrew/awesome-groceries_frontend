import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tgo-cart-button',
  templateUrl: './tgo-cart-button.component.html',
  styleUrls: ['./tgo-cart-button.component.css']
})
export class TGoCartButtonComponent implements OnInit 
{
    constructor() 
    {
      
    }

    ngOnInit() 
    {
    }

    gotClick () : void
    {
        console.log ("Go to cart");
    }
}
