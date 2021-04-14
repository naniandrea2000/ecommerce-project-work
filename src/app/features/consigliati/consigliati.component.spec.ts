import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigliatiComponent } from './consigliati.component';

describe('ConsigliatiComponent', () => {
  let component: ConsigliatiComponent;
  let fixture: ComponentFixture<ConsigliatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsigliatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigliatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
