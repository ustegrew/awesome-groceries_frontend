import { Component, OnInit, Directive, Renderer2, ElementRef            } from '@angular/core';
import { TControllerService                                             } from '../../../services/controller/tcontroller.service';
import { TProduct                                                       } from '../../../lib/types/product/tproduct';

@Component({
    selector: 'app-tdetails-dialog-modal',
    templateUrl: './tdetails-dialog-modal.component.html',
    styleUrls: ['./tdetails-dialog-modal.component.css']
})
export class TDetailsDialogModalComponent implements OnInit
{
    fProduct:                 TProduct;
    fModalAddendum:           string;
    fModalContentAddendum:    string;
    fDataNumArticlesAdd:      number;

    constructor (private fController: TControllerService, private el: ElementRef, renderer: Renderer2)
    {
        this.fModalAddendum             = 'modal-hidden';
        this.fModalContentAddendum      = 'modal-content-hidden';
        this.fDataNumArticlesAdd        = 1;

        this.fController.subscribeToDetailRequests().subscribe
        (
            product =>
            {
                this.fProduct = product;
                this.show ();
            }
        );
    }

    ngOnInit()
    {
        this.fProduct = new TProduct ('', '', '', '', 0.0, '', '', '', '', '', '');
    }

    private addToCart (): void
    {
        console.log ('Adding ' + this.fDataNumArticlesAdd + ' items of: ' + this.fProduct.fID);
    }

    private show ()
    {
        this.fModalAddendum             = 'modal-shown';
        this.fModalContentAddendum      = 'modal-content-shown';
        this.fDataNumArticlesAdd        = 1;
    }

    private hide (clickTarget)
    {
        if (typeof clickTarget  !==  'undefined')
        {
            if (clickTarget === 'root'  ||  clickTarget === 'close-button')
            {
                this.fModalAddendum             = 'modal-hidden';
                this.fModalContentAddendum      = 'modal-content-hidden';
                this.fDataNumArticlesAdd        = 1;
            }
        }
    }
}
