import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appMousehover]'
})
export class MousehoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('yellow')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('')
  }

}
