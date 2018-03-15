import { Component, OnInit                      } from '@angular/core';
import { FormControl, ReactiveFormsModule       } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { TControllerService                     } from '../../../services/controller/tcontroller.service';
import { TSearch                                } from '../../../lib/types/search/tsearch';

@Component({
  selector: 'app-tsearch',
  templateUrl: './tsearch.component.html',
  styleUrls: ['./tsearch.component.css']
})
export class TSearchComponent implements OnInit 
{
    fTxtTerm:           FormControl;
    fSearchRestrict:    boolean;
    fSearchTerm:        string;
    
    constructor (private fController: TControllerService)
    {
        let instance: TSearchComponent = this;
        
        this.fTxtTerm = new FormControl ();
        this.fTxtTerm.valueChanges
            .debounceTime (300)
            .subscribe
            (
                function (value)
                {
                    instance.fSearchTerm = value;
                    instance.onChange ()
                }
            );
    }

    ngOnInit() 
    {
    }
    
    onChange (): void
    {
        this.fController.queryProducts(this.fSearchTerm, null, this.fSearchRestrict);
    }
  
    onChangeScope (doRestrict: boolean) : void
    {
        this.fSearchRestrict = doRestrict;
    }
}
