import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'
  private pokeData:PokemonData | any

  constructor(
    private http: HttpClient
  ) { }

  getPokemon(pokemonName: string):Observable<PokemonData> {
  this.pokeData = this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`)
    console.log(this.pokeData)
    return this.pokeData
  }
}
