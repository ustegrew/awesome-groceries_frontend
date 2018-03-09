import { Injectable, Inject, forwardRef             } from '@angular/core';
import { Observable                                 } from 'rxjs';
import { Subject                                    } from 'rxjs/Subject';
import { TConnectorControllerStoreService           } from '../_inter/tconnector-controller-store.service'; /* [1] */
import { TConfig                                    } from '../../tconfig';
import { TCategory                                  } from '../../lib/types/product/tcategory';
import { TProduct                                   } from '../../lib/types/product/tproduct';
import { TSearch                                    } from '../../lib/types/search/tsearch';

/**
 * Central controller service. Coordinates all application activities. 
 */
@Injectable()
export class TControllerService 
{
    static readonly         kIDCategoryMostPopular: string = TConfig.kIDCategoryMostPopular;
    static readonly         kIDCategoryAll        : string = TConfig.kIDCategoryAll;

    private fPushCategories             = null;
    private fPushProducts               = null;
    
    constructor (private fStore: TConnectorControllerStoreService) /* [1] */
    {
        this.fPushCategories = new Subject<TCategory[]> ();
        this.fPushProducts   = new Subject<TProduct[]> ();
        this.fStore.setController (this);
    }
    
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
    queryProducts (searchTerm: string, category: string, isRestrictToCategory: boolean) : void
    {
        let query: TSearch = new TSearch (searchTerm, category, isRestrictToCategory);
        
        this.fStore.queryProducts (query);
    }
    
    /**
     * Callback, used from the product store to respond to a category list query.
     * Will broadcast the list to all subscribers.
     * 
     * @param list      The list to broadcast
     */
    pushCategories (list: TCategory [])
    {
        this.fPushCategories.next (list);
    }
    
    /**
     * Callback, used from the product store to respond to a product list query.
     * Will broadcast the list to all subscribers.
     * 
     * @param list      The list to broadcast
     */
    pushProducts (list: TProduct [])
    {
        this.fPushProducts.next (list);
    }
    
    /**
     * Caller subscribes to category push updates, i.e. due to a query
     * or some automatic update from the backend.
     * 
     * @return      Observable subscription
     */
    subscribeToPushCategories (): Observable<TCategory []>
    {
        return this.fPushCategories.asObservable ();
    }
    
    /**
     * Caller subscribes to product push updates, i.e. due to a query
     * or some automatic update from the backend.
     * 
     * @return      Observable subscription
     */
    subscribeToPushProducts () : Observable<TProduct []>
    {
        return this.fPushProducts.asObservable ();
    }
}


/*
[1]: Connector service - breaks circular dependency between TController service and 
     TProductStore service. These depend on each other, but if we have them call each
     other's methods directly we get a 'circular dependency' warning on the web console.
     Plus, the web app might not work. Angular offers forward references; I tried those,
     but still got circular dependency warnings. 
*/

