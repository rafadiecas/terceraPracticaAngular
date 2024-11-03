import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
interface Producto{
  nombre:string;
  cantidad:number;
  pvp:number;
}

const ELEMENT_DATA:Producto[]=[
  {nombre:"ps5",cantidad:1,pvp:500},
  {nombre:"elden ring",cantidad:1,pvp:80}
]

@Component({
  selector: 'app-calculadora-compras',
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
    NgIf
  ],
  templateUrl: './calculadora-compras.component.html',
  styleUrl: './calculadora-compras.component.css'
})
export class CalculadoraComprasComponent {
  displayedColumns: string[] = ['producto', 'cantidad', 'precio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  total:number = 0.0;

  productoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      pvp: [0, [Validators.required, Validators.min(0)]],
    });
  }

  agregarProducto() {
    if (this.productoForm.valid) {
      const nuevoProducto: Producto = this.productoForm.value;
      this.dataSource.data = [...this.dataSource.data, nuevoProducto];
      this.productoForm.reset();
      this.calculaTotal()
    }
  }

  ngOnInit() {
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = parseFloat(this.dataSource.data.reduce((acc, p) => acc + p.pvp * p.cantidad, 0).toFixed(2));
  }

  reset(){
    this.productoForm.reset();
  }


}
