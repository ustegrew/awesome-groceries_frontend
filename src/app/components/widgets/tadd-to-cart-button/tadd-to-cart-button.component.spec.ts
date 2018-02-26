import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAddToCartButtonComponent } from './tadd-to-cart-button.component';

describe('TAddToCartButtonComponent', () => {
  let component: TAddToCartButtonComponent;
  let fixture: ComponentFixture<TAddToCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAddToCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAddToCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
