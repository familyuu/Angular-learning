import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ifNot]'
})
export class IfNotDirective {
  private hasView = false;

  constructor(
    private teplateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){}

  @Input() set ifNot (condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.teplateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  };
}