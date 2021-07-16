import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams () {
    return new HttpParams()
    .set('fields', 'name;capital;population;flag;alpha2Code;');
  }


  constructor(private http: HttpClient) { }



  buscarPais(query: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${query}`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }



  buscarCapital( query: string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );

  }



  buscarPaisPorCodigo(id: string):Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }



  buscarPaisPorRegion(region: string):Observable<Country[]> {



    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}
