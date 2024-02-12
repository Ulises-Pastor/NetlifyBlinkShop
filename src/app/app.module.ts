import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PrendaComponent } from './components/prenda/prenda.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavprincipalComponent } from './components/navprincipal/navprincipal.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { BolsadecomprasComponent } from './components/bolsadecompras/bolsadecompras.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MenuprendasComponent } from './components/menuprendas/menuprendas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    UsuarioComponent,
    PrendaComponent,
    LoginComponent,
    PrincipalComponent,
    NavprincipalComponent,
    InventarioComponent,
    VentasComponent,
    BolsadecomprasComponent,
    PedidosComponent,
    MenuprendasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
