export class TQuery 
{
    fCategory:              string;
    fSearchTerm:            string;

    public toJSON (): string
    {
        let ret: string;
        
        ret = "{" +
                  "searchTerm:" + this.fSearchTerm + "," +
                  "category:"   + this.fCategory
              "}";
        
        return ret;
    }
    
    constructor 
    (
        searchTerm:                 string,
        category:                   string
    )
    {
        this.fSearchTerm            = searchTerm;
        this.fCategory              = category;
    }
}
