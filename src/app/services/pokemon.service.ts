import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonById(id: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://mehdidex.herokuapp.com/pokemon/${id}`)
  }

  getPokemon(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('https://mehdidex.herokuapp.com/pokemon')
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
