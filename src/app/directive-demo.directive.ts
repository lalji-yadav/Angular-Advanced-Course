import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveDemo]'
})
export class DirectiveDemoDirective {

  constructor(private el: ElementRef, private render: Renderer2 ) {

    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'red');

   }

   Changebg(color: string) {
     this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
   }

}
