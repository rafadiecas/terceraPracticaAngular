import { Component } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    NgChartsModule,
    MatButtonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  numeroUsuarios = 125;
  eventos = ['Usuario registrado', 'Evento 2', 'Evento 3'];

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  barChartData: ChartData<'bar'> = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      { data: [12, 19, 3, 5, 2, 3, 9], label: 'Visitas' }
    ]
  };
  barChartType: ChartType = 'bar';

  updateData() {
    this.numeroUsuarios = Math.floor(Math.random() * 200);
    this.eventos.push(`Nuevo evento en ${new Date().toLocaleTimeString()}`);
  }
}
