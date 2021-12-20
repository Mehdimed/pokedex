import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PokemonInfosComponent } from './routes/pokemon-infos/pokemon-infos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'pokemon', component:PokemonInfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
