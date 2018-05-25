import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	activar:Boolean = false;
	activarProfile:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  activarDropdown() {
  	this.activar = !this.activar;
  }

  activarDropdown2() {
  	this.activarProfile = !this.activarProfile;
  }

}
