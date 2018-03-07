import { Injectable }                       from '@angular/core';
import { TProduct }                         from '../../lib/types/product/tproduct';
import { TCategory }                        from '../../lib/types/product/tcategory';

@Injectable()
export class TProductStoreMockService
{
    private fArticles:      TProduct[] = [];
    private fCategories:    Map<string, TCategory>;

    constructor()
    {
        this.fArticles.push
        (
            new TProduct
            (
                "01",
                "Fruits",
                "Golden delicious",
                "8d79",
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
                "Tomatos",
                "1.29",
                "Pack",
                "Netherlands",
                "assets/img/tomato/tomatos_1.jpg",
                "assets/img/tomato/tomatos_4.jpg"
            )
        );
        this._setCategories ();
    }
    
    getArticlesByCategory (categoryID) : TProduct[]
    {
        let n  : number;
        let i  : number;
        let p  : TProduct;
        let ret: TProduct[];

        ret = [];
        n   = this.fArticles.length;
        if (n >= 1)
        {
            for (i = 0; i < n; i++)
            {
                p = this.fArticles [i];
                if (p.fCategory.fID == categoryID)
                {
                    ret.push (p);
                }
                else if (categoryID == TCategory.kIDMostPopular)
                {
                    if (Math.random() >= 0.5)
                    {
                        ret.push (p);
                    }
                }
            }
        }
        
        return ret;
    }
    
    getArticles () : TProduct[]
    {
        return this.fArticles;
    }
    
    getCategories() : TCategory[]
    {
        let ret: TCategory[];

        ret = [];
        this.fCategories.forEach
        (
            function onItem (category: TCategory, id: string)
            {
                ret.push (category);
            }
        );
        
        return ret;
    }
    
    private _setCategories(): void
    {
        let pop: TCategory;
        let n  : number;
        let i  : number;
        let p  : TProduct;
        let has: boolean;
    
        this.fCategories = new Map ();
        n   = this.fArticles.length;
        pop = new TCategory (TCategory.kIDMostPopular, "Most popular");
        this.fCategories.set(pop.fID, pop);
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
