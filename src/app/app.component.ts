import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import {MatButton, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';
import {SistemaNotasComponent} from '../componentes/sistema-notas/sistema-notas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatIcon, MatFabButton, MatCard, MatCardContent, SistemaNotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terceraPracticaAngular';
}
