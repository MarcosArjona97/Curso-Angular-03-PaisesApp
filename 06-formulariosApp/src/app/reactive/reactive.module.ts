import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicoComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
