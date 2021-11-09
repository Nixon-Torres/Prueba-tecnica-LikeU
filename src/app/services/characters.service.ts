import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public apiUrl: string = "https://rickandmortyapi.com/api/character";

  constructor( private http: HttpClient ) { }
  getCharacters() {
    return this.http.get(this.apiUrl);
  }

  getViewCharacters( idx: number ) {
    return this.http.get(`${this.apiUrl}/${idx}`);
  }

}
