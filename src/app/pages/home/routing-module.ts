import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home.component';
import { FilmesComponent } from '../filmes/filmes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'filmes',
    component: FilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
