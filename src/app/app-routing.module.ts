import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PrendaComponent } from './components/prenda/prenda.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { BolsadecomprasComponent } from './components/bolsadecompras/bolsadecompras.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MenuprendasComponent } from './components/menuprendas/menuprendas.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: 
    [
      {
        path: 'usuario',
        component: UsuarioComponent,
      },
      {
        path: 'prenda',
        component: PrendaComponent,
      },
      {
        path: 'inventario',
        component: InventarioComponent,
      },
      {
        path: 'ventas',
        component: VentasComponent,
      }
    ]
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    children: 
    [
      {
        path: 'menuprendas',
        component: MenuprendasComponent,
      },
      {
        path: 'bolsadecompras',
        component: BolsadecomprasComponent,
      },
      {
        path: 'pedidos',
        component: PedidosComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
