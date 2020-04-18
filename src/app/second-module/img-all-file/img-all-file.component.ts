import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/imageModel/imagemodel';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-img-all-file',
  templateUrl: './img-all-file.component.html',
  styleUrls: ['./img-all-file.component.scss']
})
export class ImgAllFileComponent implements OnInit {

  constructor(private img: ImageModel, private dialog: MatDialog) { }

  galleryImg = [];

  ngOnInit(): void {
    this.galleryImg = this.img.galleryimg;
   // console.log(this.galleryImg);
  }

}
