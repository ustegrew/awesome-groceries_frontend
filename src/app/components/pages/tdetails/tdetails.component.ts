import { Component, Inject, OnInit                  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA   } from '@angular/material';

@Component({
  selector: 'app-tdetails',
  templateUrl: './tdetails.component.html',
  styleUrls: ['./tdetails.component.css']
})
export class TDetailsComponent implements OnInit 
{
    fID             : string;
    fProductType    : string;
    fDetailName     : string;
    fPriceUnit      : string;
    fOriginCountry  : string;
    fPrice          : string;
    fURLPhoto       : string;
    
    constructor (public fGUI: MatDialog) 
    {
    }
    
    ngOnInit() 
    {
    }
    
    open (): void
    {
        let dlgRef = this.fGUI.open
        (
            TDetailsDlg,
            {
                width: "640px",
                data:
                {
                    fID             : this.fID,
                    fProductType    : this.fProductType,
                    fDetailName     : this.fDetailName,
                    fPriceUnit      : this.fPriceUnit,
                    fOriginCountry  : this.fOriginCountry,
                    fPrice          : this.fPrice,
                    fURLPhoto       : this.fURLPhoto
                }
            }
        );
    }
}

@Component ({
    selector: 'app-tdetails-dlg',
    templateUrl: './tdetailsdlg.component.html'
})
export class TDetailsDlg
{
    constructor 
    (
                                    public fDRef: MatDialogRef<TDetailsDlg>,
        @Inject (MAT_DIALOG_DATA)   public data : any
    )
    {
    }

    onClose (): void
    {
        this.fDRef.close ();
    }
}
