import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIfEven]'
})

export class OddEvenDirective {

  constructor(
    private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef
  ) { }

  @Input() set appShowIfEven(value: number) {
    if (value % 2 === 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
