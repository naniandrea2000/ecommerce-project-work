import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuModule } from '../features/menu/menu.module';
import { MenuComponent } from '../features/menu/menu.component';
import { CaroselloComponent } from '../features/carosello/carosello.component';
import { FooterComponent } from '../features/footer/footer.component';


@NgModule({
  declarations: [MenuComponent,CaroselloComponent,FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    MenuComponent,
    CaroselloComponent,
    FooterComponent
  ]
})
export class SharedModule { }
