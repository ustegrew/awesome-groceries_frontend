import { TCategory } from './tcategory';

/**
 * A product record. Holds the data associated with one product type.
 */
export class TProduct
{
    fCategory:      TCategory;  // e.g. "02", "Fruit"
    fDetailName:    string;     // e.g. "Bluegold"
    fID:            string;     // uid
    fPopularity:    number;     // e.g. 0.98 (must be in range 0.00 ... 1.00)
    fProductType:   string;     // e.g. "Blueberries"
    fPrice:         string;     // money, money, money... must be funny...
    fPriceUnit:     string;     // e.g. "per lb"
    fOriginCountry: string;     // e.g. "USA"
    fURLPhotoThumb: string;     // Thumbnail
    fURLPhoto:      string;     // Large photo

    constructor
    (
        categoryID:         string,
        categoryInformal:   string,
        detailName:         string,
        id:                 string,
        popularity:         number,
        productType:        string,
        price:              string,
        priceUnit:          string,
        originCountry:      string,
        urlPhotoThumb:      string,
        urlPhoto:           string
    )
    {
        this.fCategory       = new TCategory (categoryID, categoryInformal, urlPhotoThumb);
        this.fDetailName     = detailName;
        this.fID             = id;
        this.fPopularity     = popularity;
        this.fProductType    = productType;
        this.fPrice          = price;
        this.fPriceUnit      = priceUnit;
        this.fOriginCountry  = originCountry;
        this.fURLPhotoThumb  = urlPhotoThumb;
        this.fURLPhoto       = urlPhoto;
    }
}
