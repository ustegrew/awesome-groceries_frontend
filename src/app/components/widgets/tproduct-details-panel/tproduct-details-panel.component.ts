import { Component, OnInit, Input } from '@angular/core';
import { TProduct                 } from '../../../lib/types/product/tproduct';
import { TControllerService       } from '../../../services/controller/tcontroller.service';

@Component({
  selector: 'app-tproduct-details-panel',
  templateUrl: './tproduct-details-panel.component.html',
  styleUrls: ['./tproduct-details-panel.component.css']
})
export class TProductDetailsPanelComponent implements OnInit
{
    @Input() article: TProduct;

    constructor (private fController: TControllerService)
    {
    }

    ngOnInit()
    {
    }

    onClick (): void
    {
        this.fController.showDetails (this.article.fID);
    }
}
