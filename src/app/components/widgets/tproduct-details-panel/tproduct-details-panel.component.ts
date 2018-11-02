import { Component, OnInit, Input } from '@angular/core';
import { TProduct                 } from '../../../lib/types/product/tproduct';
import { TControllerService       } from '../../../services/controller/tcontroller.service';
import { ICustomStyle             } from '../tproduct-photo-frame/icustom-style';

@Component({
  selector: 'app-tproduct-details-panel',
  templateUrl: './tproduct-details-panel.component.html',
  styleUrls: ['./tproduct-details-panel.component.css']
})
export class TProductDetailsPanelComponent implements OnInit
{
    @Input() article: TProduct;

    fCustomStylePhoto: ICustomStyle =
    {
        rootPanel: {width: '360px', padding: '10px'},
        photo:     {}
    };

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
