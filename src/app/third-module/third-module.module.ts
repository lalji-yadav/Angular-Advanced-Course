import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdModuleRoutingModule } from './third-module-routing.module';
import { ThirdModuleComponent } from './third-module.component';


@NgModule({
  declarations: [ThirdModuleComponent],
  imports: [
    CommonModule,
    ThirdModuleRoutingModule
  ]
})
export class ThirdModuleModule {
  constructor() {
    console.log('Third module loaded');
  }
 }
