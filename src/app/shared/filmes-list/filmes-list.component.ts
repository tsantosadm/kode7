import { Component, OnInit } from '@angular/core';

import filmesData from '../../filmes/filmes.json';

interface Filme {
    nome: String;
    ano: number;
    diretor: String;
    genero: String;
    descricao: String;
    poster: String;
}

@Component({
  selector: 'filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.scss']
})
export class FilmesListComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void { }
   filmes: Filme[] = filmesData;
}
