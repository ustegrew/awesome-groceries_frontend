import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tprice-counter',
  templateUrl: './tprice-counter.component.html',
  styleUrls: ['./tprice-counter.component.css']
})
export class TPriceCounterComponent implements OnInit
{
    fPrice:     string;
    fCurrency:  string;

    constructor()
    {
        this.setPrice     (0.0);
        this.setCurrency  ('€');
    }

    ngOnInit()
    {
    }

    setPrice (p: number): void
    {
        this.fPrice = p.toFixed (2);
    }

    setCurrency (c: string): void
    {
        this.fCurrency = c;
    }
}
