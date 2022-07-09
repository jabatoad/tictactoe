import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from "../core/core.module";
import {TileComponent, BoardComponent} from "./index";



@NgModule({
  declarations: [
    TileComponent,
    BoardComponent,
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class BoardModule { }
