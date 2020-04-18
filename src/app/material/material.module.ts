import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


const materialCompotents = [
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule
];

@NgModule({
  imports: [
    materialCompotents
  ],
  exports: [
   materialCompotents
  ]
})
export class MaterialModule { }
