import { NgModule                               } from '@angular/core';
import { RouterModule, Routes                   } from '@angular/router';

import { TLandingComponent                      } from '../../components/pages/tlanding/tlanding.component';
import { TCartComponent                         } from '../../components/pages/tcart/tcart.component';
import { TFourOhFourComponent                   } from '../../components/pages/tfour-oh-four/tfour-oh-four.component';

/* Unique setup to accomodate for github pages */
const kRoutes: Routes =
[
    {path: 'landing',         component: TLandingComponent          },
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
export class AppRouterModule
{
}
