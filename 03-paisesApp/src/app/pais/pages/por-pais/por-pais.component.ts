import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  query: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  seccion: string = 'Buscar por pais...';



  constructor(private paisService: PaisService) {}


  buscar( evento: string) {
    this.hayError = false;
    this.query = evento;
    this.paisService.buscarPais( evento )
      .subscribe(paises => {
        this.paises = paises;
      }, (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(event: string){
    this.hayError = false;
  }
}
