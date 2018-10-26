export class TQuery
{
    fID:                    string;
    fCategory:              string;
    fSearchTerm:            string;

    public toJSON (): string
    {
        let ret: string;

        ret = '{' +
                  'id:'         + this.fID + ',' +
                  'searchTerm:' + this.fSearchTerm + ',' +
                  'category:'   + this.fCategory +
              '}';

        return ret;
    }

    constructor
    (
        id:                         string,
        searchTerm:                 string,
        category:                   string
    )
    {
        this.fID                    = id;
        this.fSearchTerm            = searchTerm;
        this.fCategory              = category;
    }
}
