import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCategoryBoxComponent } from './tcategory-box.component';

describe('TCategoryBoxComponent', () => {
  let component: TCategoryBoxComponent;
  let fixture: ComponentFixture<TCategoryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCategoryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCategoryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
