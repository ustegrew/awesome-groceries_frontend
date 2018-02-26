import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TProductDetailsPanelComponent } from './tproduct-details-panel.component';

describe('TProductDetailsPanelComponent', () => {
  let component: TProductDetailsPanelComponent;
  let fixture: ComponentFixture<TProductDetailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TProductDetailsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TProductDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
