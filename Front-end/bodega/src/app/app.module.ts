import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { HomeComponent } from './home/home.component';
import { ProveedorService}  from "./proveedores/proveedor.service";
import { RouterModule, Routes} from "@angular/router";
//para usar formularios
import { FormsModule} from '@angular/forms';
import { FormComponent} from './proveedores/form.component';
//para usar con spring
import { HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'proveedores',component:ProveedoresComponent},
  {path: 'proveedores/form',component:FormComponent},
  {path: 'proveedores/form/:id',component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
