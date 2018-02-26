import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TViewDetailsButtonComponent } from './tview-details-button.component';

describe('TViewDetailsButtonComponent', () => {
  let component: TViewDetailsButtonComponent;
  let fixture: ComponentFixture<TViewDetailsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TViewDetailsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TViewDetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
