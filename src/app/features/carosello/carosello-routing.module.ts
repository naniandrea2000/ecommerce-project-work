import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaroselloComponent } from './carosello.component';

const routes: Routes = [{ path: '', component: CaroselloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaroselloRoutingModule { }
