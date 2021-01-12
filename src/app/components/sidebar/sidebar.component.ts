import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticulosService } from '../../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  filtroForm = this.fb.group({
    desde: ['', Validators.required],
    hasta: ['', Validators.required]
  });

  shopping = [];
  total = 0;

  constructor(private fb: FormBuilder,
              private articulosSevice: ArticulosService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.shopping = JSON.parse(localStorage.getItem('carrito')) || [];
    this.shopping.map(art => {
        this.total = (art.price * art.cantidad) + this.total;
    });
  }

  onSubmit(): void {
    const desde = this.filtroForm.value.desde;
    const hasta = this.filtroForm.value.hasta;

    // this.filtroForm.reset();
    this.router.navigate(['/filtro', desde, hasta]);
  }

  borrarArticulo(articulo): void {
    this.articulosSevice.borrarCarrito(articulo);
  }

}
