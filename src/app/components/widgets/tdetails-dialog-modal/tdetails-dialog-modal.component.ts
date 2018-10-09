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
    fProduct                : TProduct;
    fModalAddendum          : string;
    fModalContentAddendum   : string;
    
    constructor (private fController: TControllerService, private el: ElementRef, renderer: Renderer2) 
    {
        this.fModalAddendum             = "modal-hidden";
        this.fModalContentAddendum      = "modal-content-hidden";
        
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
        this.fProduct = new TProduct ("", "", "", "", 0.0, "", "", "", "", "", "");
    }

    private show ()
    {
        this.fModalAddendum             = "modal-shown";
        this.fModalContentAddendum      = "modal-content-shown";
    }
    
    private hide (clickTarget)
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
