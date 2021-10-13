import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CientificaRoutes } from './cientifica/cientifica-routing.module';


import { homeRouts } from './home/home-component-routing.module';
import { JogoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-component',
    pathMatch: 'full'
  },
  ...homeRouts,
  ...JogoDaVelhaRoutes,
  ...CientificaRoutes
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
