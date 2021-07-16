import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})

export class PorPaisComponent {
  query: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  seccion: string = 'Buscar por pais...';
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(evento: string) {

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.query = evento;
    this.paisService.buscarPais(evento).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(event: string) {
    this.hayError = false;
    this.query = event;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(event).subscribe(
      (paises) => (this.paisesSugeridos = paises.slice(0, 5)),
      (error) => (this.paisesSugeridos = [])
    );
  }
}
