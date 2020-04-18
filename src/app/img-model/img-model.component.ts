import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-img-model',
  templateUrl: './img-model.component.html',
  styleUrls: ['./img-model.component.scss']
})
export class ImgModelComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input() abc: any;

  id = '';
  title = '';
  img = '';

  btnClose() {
  this.dialog.closeAll();
  }

  ngOnInit(): void {
   this.id = this.abc.id;
   this.title = this.abc.title;
   this.img = this.abc.imgUrl;
  // console.log(this.abc.id);
  }

}
