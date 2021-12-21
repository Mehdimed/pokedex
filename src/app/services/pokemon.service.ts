import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';
import allPokemons from '../../assets/pokemons.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

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

  getPokemon(){
    const headers = new HttpHeaders()
    headers.set('content-type','application/json')
    return this.http.get('http://127.0.0.1:8000/api/pokemon')
  }

  // addPokemon(pokemon: Pokemon){
  //   return this.http.post('http://127.0.0.1:8000/api/pokemon',{
  //     name: pokemon.name,
  //     pv: pokemon.base.HP,
  //     atk: pokemon.base.Attack,
  //     def: pokemon.base.Defense,
  //     atkspe: pokemon.base['Sp. Attack'],
  //     defspe: pokemon.base['Sp. Defense'],
  //     speed: pokemon.base.Speed,
  //     type: pokemon.type
  //   })
  // }
}
