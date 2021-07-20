import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  @ViewChild('myForm') myForm!: NgForm;

  persona = {
    genero: '',
    notificaciones: true
  }

  terminosYCondiciones: boolean = false;


}
