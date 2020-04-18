import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModuleComponent } from './first-module.component';
import { Project01Component } from './project01/project01.component';
import { InputSystemComponent } from './input-system/input-system.component';
import { OutputSystemComponent } from './output-system/output-system.component';
import { ReuseComponent } from './reuse/reuse.component';
import { InputChildComponent } from './input-child/input-child.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FullformComponent } from './fullform/fullform.component';

@NgModule({
  declarations: [
     FirstModuleComponent,
     Project01Component,
     InputSystemComponent,
     OutputSystemComponent,
     ReuseComponent,
     InputChildComponent,
     FullformComponent
    ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FirstModuleModule {
  constructor() {
    console.log('First Module loaded');
  }
 }
