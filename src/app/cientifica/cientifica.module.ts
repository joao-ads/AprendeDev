import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CientificaComponent } from './components/cientifica.component';
import { CientificaService } from './services';



@NgModule({
  declarations: [
    CientificaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CientificaComponent
  ],
  providers:[
    CientificaService
  ]
})
export class CientificaModule { }
