import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TLandingComponent }    from '../../pages/tlanding/tlanding.component';
import { TDetailsComponent }    from '../../pages/tdetails/tdetails.component';
import { TCartComponent }       from '../../pages/tcart/tcart.component';
import { TFourOhFourComponent } from '../../pages/tfour-oh-four/tfour-oh-four.component'

const kRoutes: Routes =
[
    {path: 'landing',         component: TLandingComponent          },
    {path: 'details/:id',     component: TDetailsComponent          },
    {path: 'shopping-cart',   component: TCartComponent             },
    {path: '', redirectTo: '/landing', pathMatch: 'full'            },
    {path: '**',              component: TFourOhFourComponent       }
];

@NgModule({
  imports:
  [
      RouterModule.forRoot (kRoutes)
  ],
  exports:
  [
      RouterModule
  ],
  declarations: []
})
export class AppRouterModule {}
