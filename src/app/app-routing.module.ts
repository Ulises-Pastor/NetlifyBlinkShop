import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PrendaComponent } from './components/prenda/prenda.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PrincipalComponent } from './components/principal/principal.component';

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
      }
    ]
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    children: 
    [
      //{
      //  path: 'usuario',
      //  component: UsuarioComponent,
      //},
      {
        path: 'prenda',
        component: PrendaComponent,
      }
    ]
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
