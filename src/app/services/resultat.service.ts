import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }
  getPokemonList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon`);
  }
  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }
  getPokemonDetailsByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }
}
