import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDivHighlight]'
})

export class DivHighlight {

  constructor(private er: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.er.nativeElement, 'backgroundColor', 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.er.nativeElement, 'backgroundColor');
  }
}

