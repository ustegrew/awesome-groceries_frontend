import { Component, OnInit, Directive, Renderer2, ElementRef            } from '@angular/core';
import { TProduct                                                       } from '../../../lib/types/product/tproduct';

@Component({
    selector: 'app-tdetails-dialog-modal',
    templateUrl: './tdetails-dialog-modal.component.html',
    styleUrls: ['./tdetails-dialog-modal.component.css']
})
export class TDetailsDialogModalComponent implements OnInit 
{
    fProduct                : TProduct;
    fModalAddendum          : string;
    fModalContentAddendum   : string;
    
    constructor (private el: ElementRef, renderer: Renderer2) 
    {
        this.fModalAddendum             = "modal-hidden";
        this.fModalContentAddendum      = "modal-content-hidden";
    }

    ngOnInit() 
    {
        this.fProduct = new TProduct ("", "", "", "", 0.0, "", "", "", "", "", "");
    }

    show (product: TProduct)
    {
        this.fProduct                   = product;
        this.fModalAddendum             = "modal-shown";
        this.fModalContentAddendum      = "modal-content-shown";
    }
    
    hide (clickTarget)
    {
        if (typeof clickTarget  !==  'undefined')
        {
            if (clickTarget === "root"  ||  clickTarget === "close-button")
            {
                this.fModalAddendum             = "modal-hidden";
                this.fModalContentAddendum      = "modal-content-hidden";
            }
        }
    }
}
