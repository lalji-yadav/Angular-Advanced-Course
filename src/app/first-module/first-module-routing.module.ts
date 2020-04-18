import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstModuleComponent } from './first-module.component';
import { Project01Component } from './project01/project01.component';
import { InputSystemComponent } from './input-system/input-system.component';
import { OutputSystemComponent } from './output-system/output-system.component';
import { FullformComponent } from './fullform/fullform.component';


const routes: Routes = [
  { path: '', component: FirstModuleComponent,
children: [
  {path: 'project01', component: Project01Component},
  { path: 'input', component: InputSystemComponent },
  { path: 'output', component: OutputSystemComponent },
  { path: 'fullform', component: FullformComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
