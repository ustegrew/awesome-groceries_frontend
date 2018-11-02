import { Component, OnInit              } from '@angular/core';
import { TProductPhotoFrameComponent    } from '../tproduct-photo-frame/tproduct-photo-frame.component';
import { TCategory                      } from '../../../lib/types/product/tcategory';

@Component({
  selector: 'app-tcategory-panel',
  templateUrl: './tcategory-panel.component.html',
  styleUrls: ['./tcategory-panel.component.css']
})
export class TCategoryPanelComponent implements OnInit
{
    fCategory:          TCategory;
    fStylesPhoto =
    {
        rootPanel:  {paddingTop: '5px', paddingBottom: '5px'},
        photo:      {}
    };

    constructor ()
    {

    }

    ngOnInit()
    {
    }
}
