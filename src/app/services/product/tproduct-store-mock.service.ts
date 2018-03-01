import { Injectable }                       from '@angular/core';
import { TProduct }                         from '../../lib/types/product/tproduct';

@Injectable()
export class TProductStoreMockService
{
    private fArticles: TProduct[] = [];

    constructor()
    {
        this.fArticles.push
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
            )
        );
        this.fArticles.push
        (
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
            )
        );
        this.fArticles.push
        (
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
            )
        );
        this.fArticles.push
        (
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
            )
        );
        this.fArticles.push
        (
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
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Long orange",
                "d12c",
                "Carrots",
                "0.69",
                "500g",
                "Italy",
                "carrot/carrot_1.jpg",
                "carrot/carrot_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Angletuierre",
                "4bb5",
                "Cheese",
                "2.19",
                "Pack",
                "France",
                "cheese/cheese_1.jpg",
                "cheese/cheese_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Tulares",
                "8a80",
                "Cherries",
                "3.29",
                "500g",
                "Spain",
                "cherries/cherries_1.jpg",
                "cherries/cherries_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Filet",
                "c601",
                "Chicken",
                "3.29",
                "750g",
                "Netherlands",
                "chicken/chicken_1.jpg",
                "chicken/chicken_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Green",
                "af14",
                "Grapes",
                "1.59",
                "250g",
                "Italy",
                "grapes/grapes_1.jpg",
                "grapes/grapes_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Healthy choice",
                "e7f5",
                "Juice",
                "1.59",
                "Litre",
                "Germany",
                "juice/juice_1.jpg",
                "juice/juice_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Romaine",
                "e7f5",
                "Lettuce",
                "0.89",
                "Pc",
                "Germany",
                "lettuce/lettuce_1.jpg",
                "lettuce/lettuce_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Sevilla",
                "9de6",
                "Oranges",
                "1.29",
                "kg",
                "Spain",
                "orange/orange_1.jpg",
                "orange/orange_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Mixed",
                "e909",
                "Paprica",
                "1.59",
                "kg",
                "Spain",
                "paprica/paprica_1.jpg",
                "paprica/paprica_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Various",
                "15b0",
                "Pizza",
                "1.00",
                "Pack",
                "Germany",
                "pizza/pizza_1.jpg",
                "pizza/pizza_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Ambassador",
                "40ac",
                "Potato",
                "2.50",
                "kg",
                "Germany",
                "potato/potato_1.jpg",
                "potato/potato_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Cherry Round",
                "ed1c",
                "Radish",
                "1.50",
                "Bunch",
                "Germany",
                "radish/radish_1.jpg",
                "radish/radish_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Two juicy",
                "87e4",
                "Strawberries",
                "2.49",
                "kg",
                "Germany",
                "strawberries/strawberries_1.jpg",
                "strawberries/strawberries_4.jpg"
            )
        );
        this.fArticles.push
        (
            new TProduct
            (
                "Vine",
                "108b",
                "Tomatos",
                "1.29",
                "Pack",
                "Netherlands",
                "tomatos/tomatos_1.jpg",
                "tomatos/tomatos_4.jpg"
            )
        );
    }
    
    getArticles() : TProduct[]
    {
        return this.fArticles;
    }
}
