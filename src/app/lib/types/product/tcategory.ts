export class TCategory
{
    fID:                    string;
    fInformal:              string;
    fURLPhotoThumb:         string;

    constructor (id: string, informal: string, urlPhotoThumb: string)
    {
        this.fID                = id;
        this.fInformal          = informal;
        this.fURLPhotoThumb     = urlPhotoThumb;
    }
}
