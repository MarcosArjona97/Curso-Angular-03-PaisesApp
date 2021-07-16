import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  buscarPais(query: string): Observable<Country[]>{


    const url = `${this.apiUrl}/name/${query}`

    return this.http.get<Country[]>( url );
  }

  buscarCapital( query: string):Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${query}`;

    return this.http.get<Country[]>( url );

  }

  buscarPaisPorCodigo(id: string):Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>( url );
  }
}
