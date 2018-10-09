import { Component, OnInit, Output, EventEmitter    } from '@angular/core';
import { Subscription                               } from 'rxjs/Subscription';                     
import { TControllerService                         } from '../../../services/controller/tcontroller.service';
import { TCategory }                                  from '../../../lib/types/product/tcategory';

@Component({
  selector: 'app-tcategory-box',
  templateUrl: './tcategory-box.component.html',
  styleUrls: ['./tcategory-box.component.css']
})
export class TCategoryBoxComponent implements OnInit 
{
    private fCategories                 : TCategory[];
    private fDataSource                 : Subscription;
    
    constructor (private fController: TControllerService)
    {
        let instance: TCategoryBoxComponent = this;
    
        fController.subscribeToPushCategories().subscribe 
        (
            list => this.fCategories = list
        );
    }

    ngOnInit() 
    {
        this.fController.queryCategories ();
    }
    
    /**
     * Returns the list of categories. Used (and observed) from this component's HTML template
     * (trackBy directive). This means, whenever the categories change the UI refreshes 
     * automatically
     * 
     * @return          list of category items
     */
    getCategories() : TCategory[]
    {
        return this.fCategories;
    }
    
    onChangeValue (choice: string) : void
    {
        this.fController.setQueryCategory   (choice);
        this.fController.queryProducts      ();
    }
}

