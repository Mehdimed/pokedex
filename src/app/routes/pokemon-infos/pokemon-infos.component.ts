import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-pokemon-infos',
  templateUrl: './pokemon-infos.component.html',
  styleUrls: ['./pokemon-infos.component.scss']
})
export class PokemonInfosComponent implements OnInit {

  public search!: string;
  public pokemon!: Pokemon;

  constructor(private route: ActivatedRoute,private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.queryParams.subscribe((params) =>{
      this.search = params['search'];
    })

    this.pokemonService.getPokemonByName(this.search).subscribe((resp)=>{
      this.pokemon = resp
    })
  }

  nextPokemon(){
    const targetId = this.pokemon.id === 151 ? 1 : this.pokemon.id + 1;
    this.pokemonService.getPokemonById(targetId).subscribe((resp)=>{
      this.pokemon = resp
    })
  }

  previousPokemon(){
    const targetId = this.pokemon.id === 1 ? 151 : this.pokemon.id - 1;
    this.pokemonService.getPokemonById(targetId).subscribe((resp)=>{
      this.pokemon = resp
    })
  }

}
