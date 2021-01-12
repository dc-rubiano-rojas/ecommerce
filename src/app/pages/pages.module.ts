import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';
import { ProductosFiltradosComponent } from './productos-filtrados/productos-filtrados.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CarritoComponent,
    HomeComponent,
    ProductosFiltradosComponent,
    WishListComponent
  ],
  exports: [
    CarritoComponent,
    HomeComponent,
    ProductosFiltradosComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
