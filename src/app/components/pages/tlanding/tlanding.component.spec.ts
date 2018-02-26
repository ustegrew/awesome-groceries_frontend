import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlandingComponent } from './tlanding.component';

describe('TlandingComponent', () => {
  let component: TlandingComponent;
  let fixture: ComponentFixture<TlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
