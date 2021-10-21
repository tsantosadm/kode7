import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { FilmeSearchComponent } from './filme-search/filme-search.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    FilmesListComponent,
    LogoHeaderComponent,
    FilmeSearchComponent,
  ],
  exports: [
    FilmesListComponent,
    LogoHeaderComponent,
    FilmeSearchComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule

  ]
})
export class SharedModule { }
