import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/models/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listePokemon!: Pokemon[];
  public pokemonToSearch: string = '';
  public filteredPokemons: string[] = [];

  constructor(private router: Router, private pokemonService: PokemonService){

  }
  
  ngOnInit(){
    this.pokemonService.getPokemon().subscribe((pokemons: Pokemon[]) => {
      this.listePokemon = pokemons
    });
  }

  filterPokemon(event: any) {
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

  // transfer(){
  //   let $that = this;
  //   const timer = (ms:number) => new Promise(res => setTimeout(res, ms))

  //   async function load () { // We need to wrap the loop into an async function for this to work
  //     for (var i = 0; i < 151; i++) {
  //       $that.pokemonService.addPokemon($that.listePokemon[i]).subscribe((resp)=>{
  //         console.log(resp)
  //       });
  //       await timer(1500); // then the created Promise can be awaited
  //     }
  //   }

  //   load();
  // }

}
