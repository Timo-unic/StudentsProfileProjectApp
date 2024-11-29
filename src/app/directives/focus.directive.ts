import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.focus();  // Focus on the input field when the directive is applied
  }
  ngAfterViewInit(): void {
    // this.el.nativeElement.focus();
  }

}
