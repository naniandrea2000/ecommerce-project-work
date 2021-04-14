import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggiungiRoutingModule } from './aggiungi-routing.module';
import { AggiungiComponent } from './aggiungi.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AggiungiComponent],
  imports: [
    CommonModule,
    AggiungiRoutingModule,
    SharedModule
  ]
})
export class AggiungiModule { }
