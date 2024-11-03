import { Component } from '@angular/core';
import {MatGridList, MatGridTile, MatGridTileFooterCssMatStyler} from '@angular/material/grid-list';
import {NgForOf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    NgForOf,
    MatGridTileFooterCssMatStyler,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  lista: Array<{ url: string, descripcion: string }> = [
    { url: "https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97", descripcion: "Gato común europeo" },
    { url: "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1900&h=1400", descripcion: "Gato en la naturaleza" },
    { url: "https://s3.abcstatics.com/abc/www/multimedia/sociedad/2024/07/11/gato-RaZLibek03KjY2lBzGD2qEN-1200x840@diario_abc.jpg", descripcion: "Gato doméstico" },
    { url: "https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg", descripcion: "Gato jugando" }
  ];

  foto:string="";
  descripcion:string="";
  filtro:string="";

  constructor(public dialog: MatDialog) {}

  openDialog(imagen: string):void {
    this.dialog.open(ImageDialogComponent, {
      data: { imagen: imagen },
      width: '80%',
    });
  }

  anyadirFoto(){
    this.lista.push({url:this.foto,descripcion:this.descripcion})
  }

  filtrarPorDescripcion() {
    if (!this.filtro) {
      return this.lista;
    }
    return this.lista.filter(item => item.descripcion.toLowerCase().includes(this.filtro.toLowerCase()));
  }

  aplicarFiltro(event: Event) {
    this.filtro = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filtrarPorDescripcion();
  }
}
