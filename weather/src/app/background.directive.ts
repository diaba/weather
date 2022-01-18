import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private ele: ElementRef) {

   }

   private changeBackground(name: string){
      this.ele.nativeElement.style.background = name;
   }

}
