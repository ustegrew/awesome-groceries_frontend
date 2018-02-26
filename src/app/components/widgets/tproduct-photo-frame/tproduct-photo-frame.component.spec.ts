import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TProductPhotoFrameComponent } from './tproduct-photo-frame.component';

describe('TProductPhotoFrameComponent', () => {
  let component: TProductPhotoFrameComponent;
  let fixture: ComponentFixture<TProductPhotoFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TProductPhotoFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TProductPhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
