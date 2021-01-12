import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos = [];

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulosService.getAllArticles().subscribe(res => {
      this.articulos = res;
    });
  }

}
