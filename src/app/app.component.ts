import { Component, ViewChild                   } from '@angular/core';
import { TDetailsDialogModalComponent           } from './components/widgets/tdetails-dialog-modal/tdetails-dialog-modal.component';
import { TProduct                               } from './lib/types/product/tproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
    @ViewChild('detailsModal') fDetailsModal : TDetailsDialogModalComponent;
}
