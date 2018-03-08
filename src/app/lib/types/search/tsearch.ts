export class TSearch 
{
    fCategory:                      string;
    fIsRestrictToCategory:          boolean;
    fSearchTerm:                    string;

    constructor 
    (
        searchTerm:                 string,
        category:                   string,
        isRestrictToCategory:       boolean
    )
    {
        this.fSearchTerm            = searchTerm;
        this.fCategory              = category;
        this.fIsRestrictToCategory  = isRestrictToCategory;
    }
}
