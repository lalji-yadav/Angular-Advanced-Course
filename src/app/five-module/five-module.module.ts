import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveModuleRoutingModule } from './five-module-routing.module';
import { FiveModuleComponent } from './five-module.component';


@NgModule({
  declarations: [FiveModuleComponent],
  imports: [
    CommonModule,
    FiveModuleRoutingModule
  ]
})
export class FiveModuleModule {
  constructor() {
    console.log('Five module loaded');
  }
 }
