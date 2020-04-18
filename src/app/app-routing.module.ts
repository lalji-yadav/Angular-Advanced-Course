import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { EventComponent } from './event/event.component';
import { CustomPreloadService } from './custom-preload.service';
// import { FirstModuleComponent } from './first-module/first-module.component';
// import { SecondModuleComponent } from './second-module/second-module.component';
// import { ThirdModuleComponent } from './third-module/third-module.component';
// import { FourthModuleComponent } from './fourth-module/fourth-module.component';
// import { FiveModuleComponent } from './five-module/five-module.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: '', component: AboutComponent},
  { path: 'viewchild', component: ViewchildComponent},
  { path: 'event', component: EventComponent},
  { path: 'firstModule', data: {preload: true},
    loadChildren: () => import('./first-module/first-module.module').then(m => m.FirstModuleModule)
  },
  { path: 'secondModule', data: {preload: true},
    loadChildren: () => import('./second-module/second-module.module').then(m => m.SecondModuleModule)
  },
  { path: 'thirdModule',
  loadChildren: () => import('./third-module/third-module.module').then(m => m.ThirdModuleModule)
  },
  { path: 'fourthModule',
  loadChildren: () => import('./fourth-module/fourth-module.module').then(m => m.FourthModuleModule)
},
  { path: 'fiveModule',
   loadChildren: () => import('./five-module/five-module.module').then(m => m.FiveModuleModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
