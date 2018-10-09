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
    
    showDetails ()
    {
       this.fDetailsModal.show 
       (
            new TProduct
            (
                "02",
                "Vegetables",
                "Green queen",
                "5ce1",
                0.48,
                "Avocadoes",
                "2.25",
                "lb",
                "Spain",
                "assets/img/avocado/avocado_1.jpg",
                "assets/img/avocado/avocado_4.jpg"
            )
       );
    }
}
