import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';

const routes: Routes = [
  {
    path: 'home', component: CharactersComponent
  },
  {
    path: 'ver-personajes/:id', component: ViewCharacterComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
