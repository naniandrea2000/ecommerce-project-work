import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSerieComponent } from './cards-serie.component';

describe('CardsSerieComponent', () => {
  let component: CardsSerieComponent;
  let fixture: ComponentFixture<CardsSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
