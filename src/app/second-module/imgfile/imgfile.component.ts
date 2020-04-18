import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/imageModel/imagemodel';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-imgfile',
  templateUrl: './imgfile.component.html',
  styleUrls: ['./imgfile.component.scss']
})
export class ImgfileComponent implements OnInit {

  imgItem = [];
  selected;
  id;


  constructor(private model: ImageModel, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.imgItem = this.model.galleryimg;

   // console.log(this.selected);
    this.activatedRoute.params.subscribe((params: Params) => {
     this.id = params['id'];
     this.selected = this.model.galleryimg[this.id - 1];
     console.log(this.selected);
    });
  }

}
