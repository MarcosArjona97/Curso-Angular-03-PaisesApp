import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  query: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {

  }

  buscando(){
    this.heroesService.getSugerencias(this.query.trim())
    .subscribe( heroes => {
      this.heroes = heroes;
    })
  }

  opcionSeleccionada(event: any){
    if(!event.option.value) return;

    const heroe: Heroe = event.option.value;
    this.query = heroe.superhero;

    this.heroesService.getHeroeById( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe);

    this.query = "";
  }

}
