import {Component, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';

interface Alumno {
  nombre: string;
  nota: number;
}

const ELEMENT_DATA: Alumno[] = [
  { nombre: "Juan", nota: 5 },
  { nombre: "manolo", nota: 10 },
  { nombre: "antonio", nota: 3 }
];

@Component({
  selector: 'app-sistema-notas',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    FormsModule,
    MatButton,
    MatCard
  ],
  templateUrl: './sistema-notas.component.html',
  styleUrl: './sistema-notas.component.css'
})
export class SistemaNotasComponent {
  displayedColumns: string[] = ['alumno', 'nota', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  private filterValue = '';
  private selectFilterValue = '';
  nombre: string = "";
  nota: number = 0;


  constructor() {
    this.dataSource.filterPredicate = this.createFilter();
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = `${this.filterValue} ${this.selectFilterValue}`;
  }

  filtroSelect(event: any) {
    this.selectFilterValue = event.value;
    this.dataSource.filter = `${this.filterValue} ${this.selectFilterValue}`;
  }

  createFilter(): (data: Alumno, filter: string) => boolean {
    return (data: Alumno, filter: string): boolean => {
      const [textFilter, selectFilter] = filter.split(' ');

      const matchesTextFilter = data.nombre.toLowerCase().includes(textFilter);
      const matchesSelectFilter = selectFilter === 'todos' ||
        (selectFilter === 'aprobado' && data.nota >= 5) ||
        (selectFilter === 'suspenso' && data.nota < 5);

      return matchesTextFilter && matchesSelectFilter;
    };
  }

  anyadirDato(){
    if (this.nota > 10){
      this.nota=10;
    }
    if (this.nota < 0){
      this.nota = 0;
    }
    if (this.nombre!== ""){
      const AlumnoNuevo: Alumno = { nombre: this.nombre, nota: this.nota };
      this.dataSource.data = [...this.dataSource.data, AlumnoNuevo];
    }

  }
}
