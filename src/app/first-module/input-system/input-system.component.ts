import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-input-system',
  templateUrl: './input-system.component.html',
  styleUrls: ['./input-system.component.scss']
})
export class InputSystemComponent implements OnInit, AfterViewInit {
  @ViewChild('colors') colors: ElementRef;

  constructor() { }

  mytext = 'Saurabh';
  toggle:boolean = false;
  nameText = 'sdsfdfdfds';

  Abc() {
    this.toggle = true;
  }

  ngOnInit(): void {
    // console.log(this.color);
  }


  ngAfterViewInit(): void {
    console.log(this.colors);
  }

}
