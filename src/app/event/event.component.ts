import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  show = true;
  buttonColor: string = 'green';
 public text: string = 'SHOW';


  constructor() { }

  myClick(event) {
   alert(event);
  }

  toggle() {
    this.show = !this.show;
   // this.buttonColor = 'red';
   // this.text = 'HIDE';
    // tslint:disable-next-line:no-conditional-assignment
    if (this.text === 'SHOW') {
        this.text = 'HIDE';
        this.buttonColor = 'red';
    } else {
      this.text = 'SHOW';
      this.buttonColor = 'yellow';
    }
  }

  ngOnInit(): void {
  }

}
