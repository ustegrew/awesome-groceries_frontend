import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tadd-to-cart-button',
  templateUrl: './tadd-to-cart-button.component.html',
  styleUrls: ['./tadd-to-cart-button.component.css']
})
export class TAddToCartButtonComponent implements OnInit
{
    @Input() fArticleID: string;

    constructor()
    {

    }

    ngOnInit()
    {
    }

    onClick (): void
    {
        console.log ('Add one qty to cart: ' + this.fArticleID);
    }
}
