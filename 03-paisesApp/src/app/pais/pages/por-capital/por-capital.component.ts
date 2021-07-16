import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  hayError: boolean = false;
  query: string = '';
  paises: Country[] = [];
  seccion: string = 'Buscar por capital...'

  constructor(private paisService: PaisService) { }

  buscar(event: string){
    this.hayError = false;
    this.query = event;
    this.paisService.buscarCapital( event )
      .subscribe(paises => {
        this.paises = paises;
      }, (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(event: string) {
    this.hayError = false;
  }


}
