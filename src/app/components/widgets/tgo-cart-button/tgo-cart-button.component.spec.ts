import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TGoCartButtonComponent } from './tgo-cart-button.component';

describe('TGoCartButtonComponent', () => {
  let component: TGoCartButtonComponent;
  let fixture: ComponentFixture<TGoCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TGoCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TGoCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
