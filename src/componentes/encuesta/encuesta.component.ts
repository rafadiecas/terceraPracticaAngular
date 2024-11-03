import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

interface encuesta{
  estacion:string;
  color:string;
  forma:string;
}

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatRadioGroup,
    MatRadioButton,
    NgForOf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgIf,
    NgStyle
  ],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent {
  estaciones:string[]=["Primavera","Verano","Otoño","Invierno"]
  formas:string[]=["Circulo","Cuadrado","Rectangulo","Triangulo"]
  colores:string[]=["Verde","Azul","Amarillo","Rojo"]
  cuestionario:encuesta={
    estacion:"",
    color:"",
    forma:""
  }
  encuestaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.encuestaForm = this.fb.group({
      estacion: ['', Validators.required],
      color: ['', Validators.required],
      forma: ['', Validators.required],
    });
  }

  reset(){
    this.encuestaForm.reset();
  }

  agregarRespuestas() {
    if (this.encuestaForm.valid) {
     this.cuestionario = this.encuestaForm.value;
      this.encuestaForm.reset();
      console.log(this.cuestionario)
    }
  }
}
