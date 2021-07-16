import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss(region: string): string {
    //ESTA LOGICA TERNARIA TAMBIEN SE PUEDE APLICAR EN EL TAG DE HTML
    return (region === this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    if(this.regionActiva === region) return;

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPaisPorRegion( region )
      .subscribe( resp => {
        this.paises = resp;
      })
  }


}
