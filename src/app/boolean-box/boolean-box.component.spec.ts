import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanBoxComponent } from './boolean-box.component';

describe('BooleanBoxComponent', () => {
  let component: BooleanBoxComponent;
  let fixture: ComponentFixture<BooleanBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
