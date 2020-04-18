import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Viewchild02Component } from './viewchild/viewchild02/viewchild02.component';
import { DirectiveDemoDirective } from './directive-demo.directive';
// import { SecondModuleModule } from './second-module/second-module.module';
// import { FirstModuleModule } from './first-module/first-module.module';
// import { ThirdModuleModule } from './third-module/third-module.module';
// import { FourthModuleModule } from './fourth-module/fourth-module.module';
// import { FiveModuleModule } from './five-module/five-module.module';
import { EventComponent } from './event/event.component';
import { ImageModel } from './imageModel/imagemodel';
import { ImgModelComponent } from './img-model/img-model.component';
import { MaterialModule } from './material/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ViewchildComponent,
    Viewchild02Component,
    DirectiveDemoDirective,
    EventComponent,
    ImgModelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FirstModuleModule,
    // SecondModuleModule,
    // ThirdModuleModule,
    // FourthModuleModule,
    // FiveModuleModule,
   // MatDialogModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [ImageModel],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App module Root loaded');
  }
}
