import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-productos-filtrados',
  templateUrl: './productos-filtrados.component.html',
  styleUrls: ['./productos-filtrados.component.css']
})
export class ProductosFiltradosComponent implements OnInit {

  artFiltrados = [];

  constructor(private articulosSevice: ArticulosService,
              private route: ActivatedRoute) {

    this.route.params.subscribe( valor => {
      this.articulosSevice.filtroPrecios(valor.desde, valor.hasta).subscribe(arts => {
        this.artFiltrados = arts;
        // console.log(this.artFiltrados);
      });
    });
  }

  ngOnInit(): void {
  }

}
