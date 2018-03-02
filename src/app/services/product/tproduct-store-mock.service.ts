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
                "assets/img/apple/apple_1.jpg",
                "assets/img/apple/apple_4.jpg"
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
                "assets/img/avocado/avocado_1.jpg",
                "assets/img/avocado/avocado_4.jpg"
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
                "assets/img/beef/beef_1.jpg",
                "assets/img/beef/beef_4.jpg"
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
                "assets/img/blueberries/blueberries_1.jpg",
                "assets/img/blueberries/blueberries_4.jpg"
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
                "assets/img/bread/bread_1.jpg",
                "assets/img/bread/bread_4.jpg"
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
                "assets/img/carrot/carrots_1.jpg",
                "assets/img/carrot/carrots_4.jpg"
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
                "assets/img/cheese/cheese_1.jpg",
                "assets/img/cheese/cheese_4.jpg"
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
                "assets/img/cherries/cherries_1.jpg",
                "assets/img/cherries/cherries_4.jpg"
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
                "assets/img/chicken/chicken_1.jpg",
                "assets/img/chicken/chicken_4.jpg"
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
                "assets/img/grapes/grapes_1.jpg",
                "assets/img/grapes/grapes_4.jpg"
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
                "assets/img/juice/juice_1.jpg",
                "assets/img/juice/juice_4.jpg"
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
                "assets/img/lettuce/lettuce_1.jpg",
                "assets/img/lettuce/lettuce_4.jpg"
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
                "assets/img/orange/oranges_1.jpg",
                "assets/img/orange/oranges_4.jpg"
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
                "assets/img/paprica/paprica_1.jpg",
                "assets/img/paprica/paprica_4.jpg"
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
                "assets/img/pizza/pizza_1.jpg",
                "assets/img/pizza/pizza_4.jpg"
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
                "assets/img/potato/potatos_1.jpg",
                "assets/img/potato/potatos_4.jpg"
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
                "assets/img/radish/radish_1.jpg",
                "assets/img/radish/radish_4.jpg"
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
                "assets/img/strawberries/strawberries_1.jpg",
                "assets/img/strawberries/strawberries_4.jpg"
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
                "assets/img/tomato/tomatos_1.jpg",
                "assets/img/tomato/tomatos_4.jpg"
            )
        );
    }
    
    getArticles() : TProduct[]
    {
        return this.fArticles;
    }
}
