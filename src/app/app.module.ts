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
import { InputboxComponent } from './inputbox/inputbox.component';
import { ParametersComponent } from './parameters/parameters.component';
import { BooleanBoxComponent } from './boolean-box/boolean-box.component';
import { FormsModule } from '@angular/forms';
import { InputListComponent } from './input-list/input-list.component';
import { WeaknessesPokemonComponent } from './weaknesses-pokemon/weaknesses-pokemon.component';
import { RarityPokemonComponent } from './rarity-pokemon/rarity-pokemon.component';
import { AreaInputComponent } from './area-input/area-input.component';
import { EditComponent } from './edit/edit.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PreDetailComponent } from './pre-detail/pre-detail.component'
import { ChartsModule } from 'ng2-charts';
import { RadarComponent } from './radar/radar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonsComponent,
    NewPokemonComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ImgInputComponent,
    InputboxComponent,
    ParametersComponent,
    BooleanBoxComponent,
    InputListComponent,
    WeaknessesPokemonComponent,
    RarityPokemonComponent,
    AreaInputComponent,
    EditComponent,
    DetailPokemonComponent,
    PreDetailComponent,
    RadarComponent,
    SearchComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [PokemonService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
