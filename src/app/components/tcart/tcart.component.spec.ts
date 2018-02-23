import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcartComponent } from './tcart.component';

describe('TcartComponent', () => {
  let component: TcartComponent;
  let fixture: ComponentFixture<TcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
