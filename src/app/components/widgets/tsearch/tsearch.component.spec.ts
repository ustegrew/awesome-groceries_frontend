import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSearchComponent } from './tsearch.component';

describe('TSearchComponent', () => {
  let component: TSearchComponent;
  let fixture: ComponentFixture<TSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
