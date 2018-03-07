export class TCategory 
{
    static readonly    kIDMostPopular:   string = "99";
    
    fID:                    string;
    fInformal:              string;

    constructor (id: string, informal: string)
    {
        this.fID            = id;
        this.fInformal      = informal;
    }
}
