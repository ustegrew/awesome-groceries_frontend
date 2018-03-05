/**
 * A product record. Holds the data associated with one product type.
 */
export class TProduct
{
    fCategory:      string;     // e.g. "Fruit"
    fDetailName:    string;     // e.g. "Bluegold"
    fID:            string;     // uid
    fProductType:   string;     // e.g. "Blueberries"
    fPrice:         string;     // money, money, money... must be funny...
    fPriceUnit:     string;     // e.g. "per lb"
    fOriginCountry: string;     // e.g. "USA"
    fURLPhotoThumb: string;     // Thumbnail
    fURLPhoto:      string;     // Large photo

    constructor
    (
        category:      string,
        detailName:    string,
        id:            string,
        productType:   string,
        price:         string,
        priceUnit:     string,
        originCountry: string,
        urlPhotoThumb: string,
        urlPhoto:      string
    )
    {
        this.fCategory       = category;
        this.fDetailName     = detailName;
        this.fID             = id;
        this.fProductType    = productType;
        this.fPrice          = price;
        this.fPriceUnit      = priceUnit;
        this.fOriginCountry  = originCountry;
        this.fURLPhotoThumb  = urlPhotoThumb;
        this.fURLPhoto       = urlPhoto;
    }
}
