import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgfileComponent } from './imgfile/imgfile.component';
import { SecondModuleComponent } from './second-module.component';
import { ImgAllFileComponent } from './img-all-file/img-all-file.component';


const routes: Routes = [
 // { path: 'img', redirectTo: 'secondModule/img', pathMatch: 'full' },
  {path: '', component: SecondModuleComponent,
  children: [
    { path: 'Allimg', component: ImgAllFileComponent },
    { path: 'imgFile/:id', component: ImgfileComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
