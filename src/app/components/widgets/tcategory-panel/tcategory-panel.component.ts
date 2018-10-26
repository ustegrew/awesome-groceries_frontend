import { Component, OnInit          } from '@angular/core';
import { TCategory                  } from '../../../lib/types/product/tcategory';

@Component({
  selector: 'app-tcategory-panel',
  templateUrl: './tcategory-panel.component.html',
  styleUrls: ['./tcategory-panel.component.css']
})
export class TCategoryPanelComponent implements OnInit
{
    fCategory:  TCategory;

    constructor ()
    {

    }

    ngOnInit()
    {
    }
}
