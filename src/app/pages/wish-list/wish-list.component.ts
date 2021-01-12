import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  articulo = [];

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    const articles = JSON.parse(localStorage.getItem('favoritos')) || [];

    this.articulo = articles.filter(art => art.favorito === true);
  }

}
