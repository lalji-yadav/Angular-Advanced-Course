import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project01',
  templateUrl: './project01.component.html',
  styleUrls: ['./project01.component.scss']
})
export class Project01Component implements OnInit {

  public count = 0;
  public text = false;

  constructor() { }

  myCount() {
    if (this.count === 0) {
       this.text = this.text;
    } else {
      this.count = this.count + 1;
    }
  }

  ngOnInit(): void {
  }

}
