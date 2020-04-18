import { Component, OnInit, ElementRef, ContentChild, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { DirectiveDemoDirective } from 'src/app/directive-demo.directive';

@Component({
  selector: 'app-viewchild02',
  templateUrl: './viewchild02.component.html',
  styleUrls: ['./viewchild02.component.scss']
})
export class Viewchild02Component implements OnInit, AfterViewInit {
 @ContentChild('childconte') childpparagraph: ElementRef;
 @ViewChild(DirectiveDemoDirective) myDir: DirectiveDemoDirective;

  userName = 'Anubhav Kumar';

  constructor(private render: Renderer2) { }

  ngAfterViewInit(): void {
    this.render.setStyle(this.childpparagraph.nativeElement, 'color', 'red');
    console.log(this.childpparagraph);
  }

  ngOnInit(): void { }

  onAlert() {
    window.alert(this.userName);
  }

  changeColor(color) {
    this.myDir.Changebg(color);
  }

}
