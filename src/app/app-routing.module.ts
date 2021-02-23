import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosFiltradosComponent } from './pages/productos-filtrados/productos-filtrados.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'wish-list', component: WishListComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'filtro/:desde/:hasta', component: ProductosFiltradosComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];




@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
