import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsigliatiComponent } from './consigliati.component';

const routes: Routes = [{ path: '', component: ConsigliatiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsigliatiRoutingModule { }
