import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import {NgForOf} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    CdkDropList,
    CdkDrag,
    NgForOf,
    CdkDropListGroup,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  pendiente = ['Spring Security', 'Web Wordpress'];
  progreso = ['proyecto', 'Resumen Tema 4 Empresa'];
  completada=['Deberes Dwec','Practica Despliegue'];
  borrado: string[] = [];
  tarea:string="";

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  anyadirTarea(){
    if (this.tarea.trim()!=""){
      this.pendiente.push(this.tarea);
    }
  }

  borrar(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }
}
