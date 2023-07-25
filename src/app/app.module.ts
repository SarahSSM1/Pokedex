
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonService } from './Service/pokemon.service';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { PipesPipe } from './shared/pipes/pipes.pipe';
import { PokeSearchComponent } from './poke-search/poke-search.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PipesPipe,
    PokeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [
    PokemonService
  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
