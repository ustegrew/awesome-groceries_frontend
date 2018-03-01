import { Injectable }                       from '@angular/core';
import { TProduct }                         from '../../lib/types/product/tproduct';

@Injectable()
export class TProductStore.MockService
{
    private fArticles: TProduct[] = [];

    constructor()
    {
        fArticles.push
        (
            new TProduct
            (
                "Golden delicious",
                "8d79",
                "Apples",
                "1.69",
                "kg",
                "France",
                "apple/apple_1.jpg",
                "apple/apple_4.jpg"
            ),
            new TProduct
            (
                "Green queen",
                "5ce1",
                "Avocadoes",
                "2.25",
                "lb",
                "Spain",
                "avocado/avocado_1.jpg",
                "avocado/avocado_4.jpg"
            ),
            new TProduct
            (
                "Argentinian massive",
                "4142",
                "Beef",
                "3.21",
                "250g",
                "Argentinia",
                "beef/beef_1.jpg",
                "beef/beef_4.jpg"
            ),
            new TProduct
            (
                "Bluegold",
                "c5a3",
                "Blueberries",
                "2.99",
                "250g",
                "France",
                "blueberries/blueberries_1.jpg",
                "blueberries/blueberries_4.jpg"
            ),
            new TProduct
            (
                "Toaster wonder",
                "bb69",
                "Bread",
                "1.28",
                "loaf",
                "Germany",
                "bread/bread_1.jpg",
                "bread/bread_4.jpg"
            ),
        );
    }
}
