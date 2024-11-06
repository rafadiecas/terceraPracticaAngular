import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import {MatButton, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';
import {SistemaNotasComponent} from '../componentes/sistema-notas/sistema-notas.component';
import {GaleriaComponent} from '../componentes/galeria/galeria.component';
import {TareasComponent} from '../componentes/tareas/tareas.component';
import {CalculadoraComprasComponent} from '../componentes/calculadora-compras/calculadora-compras.component';
import {EncuestaComponent} from '../componentes/encuesta/encuesta.component';
import {ContactosComponent} from '../componentes/contactos/contactos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatIcon, MatFabButton, MatCard, MatCardContent, SistemaNotasComponent, GaleriaComponent, TareasComponent, CalculadoraComprasComponent, EncuestaComponent, ContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terceraPracticaAngular';
}
