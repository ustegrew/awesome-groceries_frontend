/**
 * A product record. Holds the data associated with one product type.
 */
export class TProduct
{
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
