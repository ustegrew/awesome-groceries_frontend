import { Component, OnInit          } from '@angular/core';
import { TProductStoreMockService   } from '../../../services/product/tproduct-store-mock.service';

@Component({
  selector: 'app-tcategory-box',
  templateUrl: './tcategory-box.component.html',
  styleUrls: ['./tcategory-box.component.css']
})
export class TCategoryBoxComponent implements OnInit 
{
    constructor (public store: TProductStoreMockService)
    {
        
    }

    ngOnInit() 
    {
    }
}
