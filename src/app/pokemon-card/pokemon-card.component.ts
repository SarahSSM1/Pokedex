import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon!: string;

  @Input() numero!: number;

  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  leadingZero(poke:string | number, size = 3){
    let s = String(poke);
    while (s.length < (size || 2)){
      s = '0' + s;
    }
    return s;
  }

}
