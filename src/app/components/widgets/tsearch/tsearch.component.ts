import { Component, OnInit                      } from '@angular/core';
import { FormControl, ReactiveFormsModule       } from '@angular/forms';
import { filter                                 } from 'rxjs/operators';
import { debounceTime                           } from 'rxjs/operators';
import { distinctUntilChanged                   } from 'rxjs/operators';
import { switchMap                              } from 'rxjs/operators';
import { TControllerService                     } from '../../../services/controller/tcontroller.service';
import { TQuery                                 } from '../../../lib/types/search/tquery';
import { Observable } from "rxjs";

@Component({
  selector: 'app-tsearch',
  template: `
      <span id="label">Within category ...</span>
      <input type="text" placeholder="Search for..." [formControl]="fTxtTerm"/>
  `,
  styleUrls: ['./tsearch.component.css']
})
export class TSearchComponent implements OnInit 
{
    fTxtTerm:           FormControl;
    
    constructor (private fController: TControllerService)
    {
        let instance = this;
        
        this.fTxtTerm = new FormControl ();
        this.fTxtTerm.valueChanges.pipe
        (
            debounceTime            (400),
            distinctUntilChanged    (),
            switchMap               
            (
                value => 
                {
                    this.fController.setQuerySearchTerm (value);
                    return Observable.of (value); 
                    /* switchMap expects that the handler function 
                     * returns an Observable! */
                }
            )
        )
        .subscribe
        (
            () => 
            {
                this.fController.queryProducts();
            }
        )
    }

    ngOnInit() 
    {
    }
}
