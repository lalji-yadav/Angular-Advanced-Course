import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Viewchild02Component } from './viewchild02/viewchild02.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('box') box: ElementRef;
  @ViewChild(Viewchild02Component) child: Viewchild02Component;

  constructor(private render: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor = 'red';
    this.render.setStyle(this.box.nativeElement, 'backgroundColor', 'green');
    this.render.setStyle(this.box.nativeElement, 'color', 'white');
    this.render.addClass(this.box.nativeElement, 'myClass');
    this.render.setAttribute(this.box.nativeElement, 'title', 'this is test title');

    console.log(this.child);
  }
  onA() {
    this.child.userName = 'Lalji Yadav Jaunpur';
  }
  onB() {
    this.child.onAlert();
  }

}
