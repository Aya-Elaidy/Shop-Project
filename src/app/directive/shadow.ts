import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class Shadow {

  constructor(private element:ElementRef) { }



  @HostListener('mouseenter') onMouseEnter(){
this.element.nativeElement.style.border = '7px solid #007bff';
    this.element.nativeElement.style.boxShadow = '4px 4px 12px rgba(0,0,0,0.4)'; 
        this.element.nativeElement.style.borderRadius = '15px'; 
    }

    
    @HostListener('mouseleave') onMouseLeave(){

      this.element.nativeElement.style.border = '2px solid #ccc';
    this.element.nativeElement.style.boxShadow = 'none';
            this.element.nativeElement.style.borderRadius = 'none'; 

    }



  

}
