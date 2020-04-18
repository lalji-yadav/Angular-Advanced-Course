import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../imageModel/imagemodel';
import { MatDialog } from '@angular/material/dialog';
import { ImgModelComponent } from '../img-model/img-model.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private img: ImageModel, private dialog: MatDialog) { }

  galleryImg = [];

  btnModel(obj) {
    const dialogRef = this.dialog.open(ImgModelComponent, {
      width: '90%',
      height: '90%',
    });

    dialogRef.componentInstance.abc = obj;

  }

  ngOnInit(): void {
    this.galleryImg = this.img.galleryimg;
    console.log(this.galleryImg);
  }

}
