import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { SliderComponent } from "./components/slider/slider.component";
import { FormularioComponent } from "./components/formulario/formulario.component";



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
