import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface Contacto {
  nombre: string;
  telefono: string;
  mail: string;
}

const ELEMENT_DATA: Contacto[] = [
  { nombre: "Juan", telefono: "665126537", mail: "aa@aa" },
  { nombre: "Antonio", telefono: "622567385", mail: "bb@bb" }
];

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    ReactiveFormsModule,
    MatPaginator
  ],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nombre', 'Telefono', 'Email', 'Acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  productoForm: FormGroup;
  selectedIndex: number | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  reset() {
    this.productoForm.reset();
    this.selectedIndex = null;
  }

  agregarContacto() {
    if (this.productoForm.valid) {
      const nuevoContacto: Contacto = this.productoForm.value;
      if (this.selectedIndex !== null) {
        this.dataSource.data[this.selectedIndex] = nuevoContacto;
        this.selectedIndex = null;
      } else {
        this.dataSource.data = [...this.dataSource.data, nuevoContacto];
      }
      this.dataSource = new MatTableDataSource(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.productoForm.reset();
    }
  }

  eliminarContacto(index: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter((_, i) => i !== index);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  editarContacto(index: number) {
    const contacto = this.dataSource.data[index];
    this.productoForm.setValue(contacto);
    this.selectedIndex = index;
  }
}
