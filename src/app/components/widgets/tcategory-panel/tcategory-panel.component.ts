import { Component, OnInit              } from '@angular/core';
import { TProductPhotoFrameComponent    } from '../tproduct-photo-frame/tproduct-photo-frame.component';
import { TCategory                      } from '../../../lib/types/product/tcategory';
import { TControllerService             } from '../../../services/controller/tcontroller.service';

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

    constructor (private fController: TControllerService)
    {

    }

    ngOnInit()
    {
    }

    onClick ()
    {
        this.fController.setQueryCategory (this.fCategory.fID);
        this.fController.queryProducts ();
    }
}
