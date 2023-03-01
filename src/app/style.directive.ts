import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private sty:ElementRef) { 
    sty.nativeElement.style.color="red"
  }

}
