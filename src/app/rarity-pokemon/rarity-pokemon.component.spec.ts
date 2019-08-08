import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RarityPokemonComponent } from './rarity-pokemon.component';

describe('RarityPokemonComponent', () => {
  let component: RarityPokemonComponent;
  let fixture: ComponentFixture<RarityPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RarityPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RarityPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
