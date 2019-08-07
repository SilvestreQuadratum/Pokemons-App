import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessesPokemonComponent } from './weaknesses-pokemon.component';

describe('WeaknessesPokemonComponent', () => {
  let component: WeaknessesPokemonComponent;
  let fixture: ComponentFixture<WeaknessesPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaknessesPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaknessesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
