import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleComponent implements OnInit {

  @Input() enFavoritos;
  @Input() articulo;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    // console.log(this.enFavoritos);
  }

  agregarFav(articulo): void{
    this.articulosService.agregarFavorito(articulo);
    this.enFavoritos = true;
  }

  borrarFav(articulo): void{
    this.articulosService.borrarFavorito(articulo);
    this.enFavoritos = false;
    window.location.reload();

  }

  agregarCarrito(articulo): void{
    this.articulosService.agregarACarrito(articulo);
  }

}
