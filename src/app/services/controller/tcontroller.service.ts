import { Injectable, Inject, forwardRef             } from '@angular/core';
import { Observable                                 } from 'rxjs';
import { Subject                                    } from 'rxjs/Subject';
import { TConfig                                    } from '../../tconfig';
import { TCategory                                  } from '../../lib/types/product/tcategory';
import { TProduct                                   } from '../../lib/types/product/tproduct';
import { TQuery                                     } from '../../lib/types/search/tquery';
import { TProductStoreService                       } from "../product/store/tproduct-store.service";

/**
 * Central controller service. Coordinates all application activities. 
 */
@Injectable()
export class TControllerService 
{
    static readonly         kIDCategoryMostPopular: string = TConfig.kIDCategoryMostPopular;
    static readonly         kIDCategoryAll        : string = TConfig.kIDCategoryAll;

    private fPushCategories     : Subject<TCategory[]>  = null;
    private fPushProducts       : Subject<TProduct[]>   = null;
    private fQueryID            : string;
    private fQueryCategory      : string;
    private fQuerySearchTerm    : string;
    
    constructor (private fStore: TProductStoreService) /* [1] [2] */
    {
        this.fPushCategories    = new Subject<TCategory[]> ();
        this.fPushProducts      = new Subject<TProduct[]> ();
        this.fQueryID           = "";
        this.fQueryCategory     = "";
        this.fQuerySearchTerm   = "";
    }
    
    queryByID (id: string): TProduct
    {
        let ret: TProduct;
        
        ret = this.fStore.queryByID (id);
        
        return ret;
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
        let receptacle : Observable<TCategory[]>;
        
        receptacle = this.fStore.queryCategories ();
        receptacle.subscribe
        (
            list => this.fPushCategories.next (list)
        );
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
    queryProducts () : void
    {
        let query       : TQuery;
        let receptacle  : Observable<TProduct[]>;
    
        query       = new TQuery (this.fQueryID, this.fQuerySearchTerm, this.fQueryCategory);
        receptacle  = this.fStore.queryProducts (query);
            
        receptacle.subscribe
        (
            list => this.fPushProducts.next (list)
        );
    }
    
    setQueryID (id: string)
    {
        this.fQueryID           = id;
        this.fQueryCategory     = "";
        this.fQuerySearchTerm   = "";
    }
    
    setQueryCategory (category : string)
    {
        this.fQueryID           = "";
        this.fQueryCategory     = category;
    }
    
    setQuerySearchTerm (term : string)
    {
        this.fQueryID           = "";
        this.fQuerySearchTerm   = term;
    }
    
    /**
     * Caller subscribes to category push updates, i.e. due to a query
     * or some automatic update from the backend.
     * 
     * @return      Observable subscription
     */
    subscribeToPushCategories () : Observable<TCategory []>
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

