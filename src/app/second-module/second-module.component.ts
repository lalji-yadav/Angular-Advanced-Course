import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../imageModel/imagemodel';
import { MatDialog } from '@angular/material/dialog';
import { ImgModelComponent } from '../img-model/img-model.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-module',
  templateUrl: './second-module.component.html',
  styleUrls: ['./second-module.component.scss']
})
export class SecondModuleComponent implements OnInit {

  constructor(private img: ImageModel, private dialog: MatDialog, private router: Router) { }

 // galleryImg = [];

  ngOnInit(): void {
  //  this.galleryImg = this.img.galleryimg;
  //  console.log(this.galleryImg);
    this.router.navigateByUrl('/secondModule/Allimg');

}
}
