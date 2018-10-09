import { TCategory      } from "../../../lib/types/product/tcategory";
import { TProduct       } from "../../../lib/types/product/tproduct";
import { TQuery         } from "../../../lib/types/search/tquery";
import { TDBService     } from "../../db-mock/tdb.service";
import { Injectable     } from '@angular/core';
import { Observable     } from "rxjs";

@Injectable()
export class TProductStoreService 
{
    public queryByID (id: string): TProduct
    {
        let ret: TProduct;
        
        ret = this.fDB.queryByID (id);
        
        return ret;
    }
    
    public queryCategories () : Observable<TCategory[]>
    {
        let ret : Observable<TCategory[]>;
                
        ret = this.fDB.queryCategories ();
        
        return ret;
    }
    
    public queryProducts (query: TQuery) : Observable<TProduct[]>
    {
        let ret : Observable<TProduct[]>;
        
        ret = this.fDB.queryProducts (query);
        
        return ret;
    }
        
    public constructor (private fDB: TDBService) {}
}
