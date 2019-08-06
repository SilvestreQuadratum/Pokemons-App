import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PokemonService } from './pokemon.service';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ImgInputComponent } from './img-input/img-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonsComponent,
    NewPokemonComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ImgInputComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule 
  ],
  providers: [PokemonService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
