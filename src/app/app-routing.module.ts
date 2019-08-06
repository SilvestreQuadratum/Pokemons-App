import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'new', component: NewPokemonComponent },
  { path: '**', component: PokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
