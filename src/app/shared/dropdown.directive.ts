import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding("class.activarCursor") isOpen = false;
	@HostListener("mouseenter") mouseover() {
		this.isOpen = true;
	}
	@HostListener("mouseleave") mouseleave() {
		this.isOpen = false;
	}

}
