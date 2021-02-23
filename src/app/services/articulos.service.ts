import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos = [
    {id: 1, name: 'Articulo 1' , url: 'assets/images/articulos/articulo-1.jpg', favorito: false, price: 120000},
    {id: 2, name: 'Articulo 2' , url: 'assets/images/articulos/articulo-2.jpg', favorito: false, price: 200000},
    {id: 3, name: 'Articulo 3' , url: 'assets/images/articulos/articulo-3.jpg', favorito: false, price: 82000},
    {id: 4, name: 'Articulo 4' , url: 'assets/images/articulos/articulo-4.jpg', favorito: false, price: 12000},
    {id: 5, name: 'Articulo 5' , url: 'assets/images/articulos/articulo-5.jpg', favorito: false, price: 500000},
    {id: 6, name: 'Articulo 6' , url: 'assets/images/articulos/articulo-6.jpg', favorito: false, price: 30000},
    {id: 7, name: 'Articulo 7' , url: 'assets/images/articulos/articulo-7.jpg', favorito: false, price: 100000},
    {id: 8, name: 'Articulo 8' , url: 'assets/images/articulos/articulo-8.jpg', favorito: false, price: 150000},
    {id: 9, name: 'Articulo 9' , url: 'assets/images/articulos/articulo-9.jpg', favorito: false, price: 135000},
  ];

  favoritos = [];
  carrito = [];

  constructor() {
    this.cargarLocalstorage();
  }


  getAllArticles(): Observable<any>{
    return new Observable(observer => {
      observer.next(this.articulos);
    });
  }


  agregarFavorito(articulo): void {
    const existe = this.favoritos.find(article => article.id === articulo.id);

    if (!existe){
      this.articulos = this.articulos.map( art => {
        if (art.id === articulo.id) {
           return {
            ...art,
            favorito: true
          };
        }
        return art;
      });
      // this.favoritos.unshift({...articulo, favorito: true});
      localStorage.setItem('favoritos', JSON.stringify(this.articulos));
    }
  }

  borrarFavorito(article): void{
    // this.favoritos = this.favoritos.filter(articulo => articulo.id !== article.id);
    this.articulos = this.articulos.map( art => {
      if (art.id === article.id) {
         return {
          ...art,
          favorito: false
        };
      }
      return art;
    });

    localStorage.setItem('favoritos', JSON.stringify(this.articulos));
  }



  agregarACarrito(articulo): void{
    const existe = this.carrito.some(art => art.id === articulo.id);

    if (!existe) {
      articulo = {
        ...articulo,
        cantidad: 1
      };
      this.carrito.unshift(articulo);
    } else {
      this.carrito = this.carrito.map(art => {
                          if (art.id === articulo.id) {
                            return {
                              ...art,
                              cantidad: art.cantidad + 1
                            };
                          }
                          return art;
                      });
    }
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    window.location.reload();
  }



  borrarCarrito(articulo): void{
    if (articulo.cantidad > 1) {
      this.carrito = this.carrito.map(art => {
                      if (art.id === articulo.id){
                          return {
                            ...art,
                            cantidad: art.cantidad - 1
                          };
                      }
                      return art;
                    });
    } else {
      this.carrito = this.carrito.filter(art => art.id !== articulo.id);
    }
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    window.location.reload();
  }



  cargarLocalstorage(): void{
    const favoritos = JSON.parse(localStorage.getItem('favoritos'));
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (favoritos){
      this.articulos = favoritos;
    }
    if (carrito) {
      this.carrito = carrito;
    }
  }



  filtroPrecios(desde, hasta): Observable<any> {
    return new Observable(observer => {
      const filtro = this.articulos.filter(art => {
        if (art.price >= desde  && art.price <= hasta) {
          return art;
        }
      });
      observer.next(filtro);
    });

  }


}
