import { TControllerService         } from '../controller/tcontroller.service';
import { TProductStoreMockService   } from '../product/tproduct-store-mock.service';
import { TCategory                  } from '../../lib/types/product/tcategory';
import { TProduct                   } from '../../lib/types/product/tproduct';
import { TSearch                    } from '../../lib/types/search/tsearch';

/**
 * Surrogate for TControllerService, to break cyclic dependency between 
 * TControllerService and TProductStore.
 */
export class TConnectorControllerAndStore 
{
    private fController:                TControllerService;
    private fStore:                     TProductStoreMockService;
    
    constructor ()
    {
        this.fController = null;
        this.fStore      = null;
    }
    
    /* Accessors -> Controller -> Store */
    
    /**
     * Places an asynchronous request to retrieve the list of categories.
     * 
     * Store service will call back on {@link #pushCategories} to 
     * broadcast the list via Observable.
     * 
     * Interested parties must subscribe {@link #subscribeToPushCategories} to 
     * category list broadcasts.
     * 
     * @param   query               Query object defining the search.
     */
    queryCategories () : void
    {
        this.fStore.queryCategories ();
    }
    
    /**
     * Places an asynchronous request to retrieve a list of products
     * that match the given search query.
     * 
     * Store service will call back on {@link #pushProducts} to 
     * broadcast the list via Observable.
     * 
     * Interested parties must subscribe {@link #subscribeToPushProducts} to 
     * product list broadcasts.
     * 
     * @param   query               Query object defining the search.
     */
    queryProducts (query: TSearch) : void
    {
        this.fStore.queryProducts (query);
    }
    
    /* Accessors -> Store -> Controller */
    
    /**
     * Callback, used from the product store to respond to a category list query.
     * Will broadcast the list to all subscribers.
     * 
     * @param list      The list to broadcast
     */
    pushCategories (list: TCategory [])
    {
        this.fController.pushCategories (list);
    }
    
    /**
     * Callback, used from the product store to respond to a product list query.
     * Will broadcast the list to all subscribers.
     * 
     * @param list      The list to broadcast
     */
    pushProducts (list: TProduct [])
    {
        this.fController.pushProducts (list);
    }
    
    /* Let peers set their references */
    
    setController (c: TControllerService): void
    {
        if (this.fController == null)
        {
            this.fController = c;
        }
    }
    
    setStore (s: TProductStoreMockService): void
    {
        if (this.fStore == null)
        {
            this.fStore = s;
        }
    }
}
