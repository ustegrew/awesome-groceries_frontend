import { Component, OnInit, Input } from '@angular/core';
import { TProduct                 } from '../../../lib/types/product/tproduct';

@Component({
  selector: 'app-tproduct-photo-frame',
  templateUrl: './tproduct-photo-frame.component.html',
  styleUrls: ['./tproduct-photo-frame.component.css']
})
export class TProductPhotoFrameComponent implements OnInit
{
    @Input() fUrlPhoto: string;

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
