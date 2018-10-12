import { Component, OnInit, Input           } from '@angular/core';
import { TProduct                           } from '../../../lib/types/product/tproduct';
import { TControllerService                 } from '../../../services/controller/tcontroller.service';

@Component({
  selector: 'app-tview-details-button',
  templateUrl: './tview-details-button.component.html',
  styleUrls: ['./tview-details-button.component.css']
})
export class TViewDetailsButtonComponent implements OnInit
{
    @Input()    fArticleID:     string;

    constructor (private fController: TControllerService)
    {
    }

    ngOnInit()
    {
    }

    onClick (): void
    {
        console.log (this.fArticleID);
        this.fController.showDetails (this.fArticleID);
    }
}
