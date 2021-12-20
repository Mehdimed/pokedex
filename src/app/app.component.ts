import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/models/pokemon';
import Data from '../assets/pokemons.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listePokemon!: Pokemon[];
  public pokemonToSearch: string = '';
  public filteredPokemons: string[] = [];

  constructor(private router: Router){

  }
  
  ngOnInit(){
    this.listePokemon = Data;
  }

  filterPokemon(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.listePokemon.length; i++) {
        let pokemon = this.listePokemon[i];
        if (pokemon.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(pokemon.name);
        }
    }

    this.filteredPokemons = filtered;
  }

  onSubmit(){
    if(this.pokemonToSearch !== ''){
      this.router.navigate(
        ['pokemon'],
        { queryParams: { search: this.pokemonToSearch } }
        );
    }
  }

  goHome(){
    this.router.navigate([''])
  }

}
