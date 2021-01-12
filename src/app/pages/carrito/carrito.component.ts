import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createThis } from 'typescript';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito = [];
  cantidadArticulos = 1;
  shopping = [];
  total = 0;

  constructor(private articulosService: ArticulosService) {
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
   }

  ngOnInit(): void {
    // this.shopping = JSON.parse(localStorage.getItem('carrito'));
    this.carrito.map(art => {
        this.total = (art.price * art.cantidad) + this.total;
    });
  }

  borrarArticulo(articulo): void{
    this.articulosService.borrarCarrito(articulo);
  }

  agregarArticulo(articulo): void{
    this.articulosService.agregarACarrito(articulo);
  }

}
