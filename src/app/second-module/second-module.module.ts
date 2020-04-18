import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondModuleComponent } from './second-module.component';
import { ImgfileComponent } from './imgfile/imgfile.component';
import { ImgAllFileComponent } from './img-all-file/img-all-file.component';


@NgModule({
  declarations: [SecondModuleComponent, ImgfileComponent, ImgAllFileComponent],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule {
  constructor() {
    console.log('Second Module loaded');
  }
 }
