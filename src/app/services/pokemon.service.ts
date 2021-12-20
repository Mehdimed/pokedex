import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';
import allPokemons from '../../assets/pokemons.json';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonByName(pokemon: string): Observable<Pokemon>{
    const pokemonToReturn = new Pokemon()
    const pokeFind = allPokemons.find(p => p.name === pokemon)
    if (pokeFind) {
      pokemonToReturn.id = pokeFind!.id;
      pokemonToReturn.name = pokeFind!.name;
      pokemonToReturn.type = pokeFind!.type;
      pokemonToReturn.base = pokeFind!.base;
    }

    return of(pokemonToReturn)
  }

  getPokemonById(id: number): Observable<Pokemon>{
    const pokemonToReturn = new Pokemon()
    const pokeFind = allPokemons.find(p => p.id === id)
    if (pokeFind) {
      pokemonToReturn.id = pokeFind!.id;
      pokemonToReturn.name = pokeFind!.name;
      pokemonToReturn.type = pokeFind!.type;
      pokemonToReturn.base = pokeFind!.base;
    }

    return of(pokemonToReturn)
  }
}
