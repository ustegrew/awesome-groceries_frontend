import { Injectable, Inject, forwardRef             } from '@angular/core';
import { Observable                                 } from 'rxjs';
import { Subject                                    } from 'rxjs/Subject';
import { TConnectorControllerStoreService           } from '../_inter/tconnector-controller-store.service'; /* [1] */
import { TProductStoreMockService                   } from '../product/tproduct-store-mock.service';        /* [2] */
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

    private fCategoryPrev   : string;
    private fPushCategories : Subject<TCategory[]>  = null;
    private fPushProducts   : Subject<TProduct[]>   = null;
    
    constructor (private fStore: TConnectorControllerStoreService, private dummy: TProductStoreMockService) /* [1] [2] */
    {
        this.fCategoryPrev   = "";
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
        let query       : TSearch;
    
        if (category != null)
        {
            this.fCategoryPrev = category;
        }
        query = new TSearch (searchTerm, this.fCategoryPrev, isRestrictToCategory);
        
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
     
[2]: Bad solution, but it works: We have to create a dummy reference to the product store
     otherwise the store service constructor won't run. We won't use the dummy reference
     though; instead we use lazy initialization via the connector service. It's a really 
     crummy hack, but at the moment I don't know how to otherwise instantiate the service 
     singleton than to force inject it somewhere in the app. 
*/

