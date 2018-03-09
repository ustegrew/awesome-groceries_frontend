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
    
        this.fDataSource = this.fController.subscribeToPushCategories ().subscribe 
        (
            function (list: TCategory [])
            {
                TCategoryBoxComponent._setCategories(instance, list); /* [1] */
            }
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
        this.fController.queryProducts ("", choice, false);
    }
    
    /**
     * Updates the category list. Note, this is called via push from the controller
     * i.e. category list will refresh itself every time the controller pushes new data.
     * This component automatically refreshes the UI widget via {@link #getCategories}
     * 
     * @param instance      The instance hosting this callback. As this callback is invoked
     *                      from an asynchronous handler (defined in the cTor) we can't use the
     *                      'this' reference but must supply a reference to the category 
     *                      box component instance.
     * @param list          The categories to set.
     */
    private static _setCategories (instance: TCategoryBoxComponent, list: TCategory []): void
    {
        instance.fCategories = list;
    }
}

/*
[1]: What does 'this' refer to here?
*/