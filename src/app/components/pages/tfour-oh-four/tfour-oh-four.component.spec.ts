import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFourOhFourComponent } from './tfour-oh-four.component';

describe('TFourOhFourComponent', () => {
  let component: TFourOhFourComponent;
  let fixture: ComponentFixture<TFourOhFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFourOhFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFourOhFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
