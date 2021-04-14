import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsigliatiRoutingModule } from './consigliati-routing.module';
import { ConsigliatiComponent } from './consigliati.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ConsigliatiComponent],
  imports: [
    CommonModule,
    ConsigliatiRoutingModule,
    SharedModule
  ]
})
export class ConsigliatiModule { }
