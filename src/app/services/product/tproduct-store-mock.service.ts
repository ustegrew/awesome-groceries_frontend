import { Injectable, Inject, forwardRef     } from '@angular/core';
import { TConnectorControllerStoreService   } from '../_inter/tconnector-controller-store.service'; /* [1] */
import { TConfig                            } from '../../tconfig';
import { TProduct                           } from '../../lib/types/product/tproduct';
import { TCategory                          } from '../../lib/types/product/tcategory';
import { TSearch                            } from '../../lib/types/search/tsearch';

/**
 * Product store. Accessor to the backend. This is the mockup class.
 */
@Injectable()
export class TProductStoreMockService
{
    static readonly         kIDCategoryMostPopular: string = TConfig.kIDCategoryMostPopular;
    static readonly         kIDCategoryAll        : string = TConfig.kIDCategoryAll;
    static readonly         kPopularityThreshold  : number = 0.80;
    
    private fArticles:      TProduct[] = [];
    private fCategories:    Map<string, TCategory>;

    constructor(private fController: TConnectorControllerStoreService)
    {
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Golden delicious",
                "8d79",
                0.35,
                "Apples",
                "1.58",
                "kg",
                "France",
                "assets/img/apple/apple_1.jpg",
                "assets/img/apple/apple_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Green queen",
                "5ce1",
                0.48,
                "Avocadoes",
                "2.25",
                "lb",
                "Spain",
                "assets/img/avocado/avocado_1.jpg",
                "assets/img/avocado/avocado_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "03",
                "Meats",
                "Argentinian massive",
                "4142",
                0.76,
                "Beef",
                "3.21",
                "250g",
                "Argentinia",
                "assets/img/beef/beef_1.jpg",
                "assets/img/beef/beef_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Bluegold",
                "c5a3",
                0.38,
                "Blueberries",
                "2.99",
                "250g",
                "France",
                "assets/img/blueberries/blueberries_1.jpg",
                "assets/img/blueberries/blueberries_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "04",
                "Bread",
                "Toaster wonder",
                "bb69",
                0.89,
                "Bread",
                "1.28",
                "loaf",
                "Germany",
                "assets/img/bread/bread_1.jpg",
                "assets/img/bread/bread_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Long orange",
                "d12c",
                0.62,
                "Carrots",
                "0.69",
                "500g",
                "Italy",
                "assets/img/carrot/carrots_1.jpg",
                "assets/img/carrot/carrots_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "05",
                "Cheeses",
                "Angletuierre",
                "4bb5",
                0.98,
                "Cheese",
                "2.19",
                "Pack",
                "France",
                "assets/img/cheese/cheese_1.jpg",
                "assets/img/cheese/cheese_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Tulares",
                "8a80",
                0.73,
                "Cherries",
                "3.29",
                "500g",
                "Spain",
                "assets/img/cherries/cherries_1.jpg",
                "assets/img/cherries/cherries_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "03",
                "Meats",
                "Filet",
                "c601",
                0.83,
                "Chicken",
                "3.29",
                "750g",
                "Netherlands",
                "assets/img/chicken/chicken_1.jpg",
                "assets/img/chicken/chicken_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Green",
                "af14",
                0.47,
                "Grapes",
                "1.59",
                "250g",
                "Italy",
                "assets/img/grapes/grapes_1.jpg",
                "assets/img/grapes/grapes_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "06",
                "Drinks & Beverages",
                "Healthy choice",
                "e7f5",
                0.68,
                "Juice",
                "1.59",
                "Litre",
                "Germany",
                "assets/img/juice/juice_1.jpg",
                "assets/img/juice/juice_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Romaine",
                "e7f5",
                0.59,
                "Lettuce",
                "0.89",
                "Pc",
                "Germany",
                "assets/img/lettuce/lettuce_1.jpg",
                "assets/img/lettuce/lettuce_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Sevilla",
                "9de6",
                0.63,
                "Oranges",
                "1.29",
                "kg",
                "Spain",
                "assets/img/orange/oranges_1.jpg",
                "assets/img/orange/oranges_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Mixed",
                "e909",
                0.78,
                "Paprica",
                "1.59",
                "kg",
                "Spain",
                "assets/img/paprica/paprica_1.jpg",
                "assets/img/paprica/paprica_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "07",
                "Frozen",
                "Various",
                "15b0",
                0.92,
                "Pizza",
                "1.00",
                "Pack",
                "Germany",
                "assets/img/pizza/pizza_1.jpg",
                "assets/img/pizza/pizza_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Ambassador",
                "40ac",
                0.91,
                "Potato",
                "2.50",
                "kg",
                "Germany",
                "assets/img/potato/potatos_1.jpg",
                "assets/img/potato/potatos_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Cherry Round",
                "ed1c",
                0.76,
                "Radish",
                "1.50",
                "Bunch",
                "Germany",
                "assets/img/radish/radish_1.jpg",
                "assets/img/radish/radish_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Two juicy",
                "87e4",
                0.83,
                "Strawberries",
                "2.49",
                "kg",
                "Germany",
                "assets/img/strawberries/strawberries_1.jpg",
                "assets/img/strawberries/strawberries_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "02",
                "Vegetables",
                "Vine",
                "108b",
                0.39,
                "Tomatos",
                "1.29",
                "Pack",
                "Netherlands",
                "assets/img/tomato/tomatos_1.jpg",
                "assets/img/tomato/tomatos_4.jpg"
            )
        );
        this._setCategories ();

        this.fController.setStore(this); /* [1] */
    }

    /**
     * Executes a category query. Result is pushed back to the controller. We don't
     * use a classic function call with return value, but push the result back. This
     * makes the category query ready for asynchronous handling, e.g. when retrieving 
     * data via HTTP request from a backend.
     */
    queryCategories () : void
    {
        let list: TCategory[];

        list = [];
        this.fCategories.forEach
        (
            function onItem (category: TCategory, id: string)
            {
                list.push (category);
            }
        );
        
        this.fController.pushCategories (list);
    }
    
    /**
     * Executes a product query. Result is pushed back to the controller. We don't
     * use a classic function call with return value, but push the result back. This
     * makes the product query ready for asynchronous handling, e.g. when retrieving 
     * data via HTTP request from a backend.
     */
    queryProducts (query: TSearch) : void
    {
        let n   : number;
        let i   : number;
        let p   : TProduct;
        let list: TProduct[];
// TODO Audit this heuristics
        list = [];
        n   = this.fArticles.length;
        if (n >= 1)
        {
            for (i = 0; i < n; i++)
            {
                p = this.fArticles [i];
                
                if (query.fCategory == TProductStoreMockService.kIDCategoryAll)
                {   /* Requested: All items. */
                    list.push (p);
                }
                else if (query.fCategory == TProductStoreMockService.kIDCategoryMostPopular)
                {   /* Requested: Most popular products. */
                    if (p.fPopularity >= TProductStoreMockService.kPopularityThreshold)
                    {
                        list.push (p);
                    }
                }
                else if (query.fCategory == p.fCategory.fID  &&  query.fSearchTerm == "")
                {
                    list.push (p);
                }
                else if (query.fSearchTerm == p.fProductType)
                {   /* Requested: Products whose type matches search term */
                    if (query.fIsRestrictToCategory)
                    {   
                        if (query.fCategory == p.fCategory.fID)
                        {
                            list.push (p);
                        }
                    }
                    else
                    {
                        list.push (p);
                    }
                }
            }
        }
        
        this.fController.pushProducts (list);
    }
    
    /**
     * Extracts list of categories from the products.
     */
    private _setCategories (): void
    {
        let meta: TCategory;
        let n  : number;
        let i  : number;
        let p  : TProduct;
        let has: boolean;
    
        this.fCategories = new Map ();
        meta    = new TCategory (TProductStoreMockService.kIDCategoryMostPopular, "Most popular");
        this.fCategories.set(meta.fID, meta);

        n       = this.fArticles.length;
        if (n >= 1)
        {
            for (i = 0; i < n; i++)
            {
                p     = this.fArticles [i];
                has   = this.fCategories.has (p.fCategory.fID);
                if (! has)
                {
                    this.fCategories.set (p.fCategory.fID, p.fCategory);
                }
            }
        }
    }
}

/*
[1]: Connector service - breaks circular dependency between TController service and 
     TProductStore service. These depend on each other, but if we have them call each
     other's methods directly we get a 'circular dependency' warning on the web console.
     Plus, the web app might not work. Angular offers forward references; I tried those,
     but still got circular dependency warnings. 
*/

