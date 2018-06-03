import { Component, OnInit } from '@angular/core';
import {ToolModel} from '../tool-model';
import {ModalService} from '../../shared/modal/modal.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
	tools: ToolModel[] = [
		{name: "Foco Led", toolImage: "https://cdn.sparkfun.com//assets/parts/3/3/8/0/09590-01.jpg", cantidad: 10, categories: ["Diodos", "Transistores"], created_at: new Date(1995,11,17)},
		{name: "Martillo", toolImage: "https://ferreteriavidri.com/images/items/large/9781.jpg", cantidad: 3, categories: ["Herramientas"], created_at: new Date(1995,11,17)},
		{name: "Condensador", toolImage: "http://www.teslaelectronics.cl/518-large_default/condensador-electrolitico.jpg", cantidad: 12, categories: ["Capacitores"], created_at: new Date(1995,11,17)},
		{name: "Arduino", toolImage: "http://cdn-tienda.bricogeek.com/1157-thickbox_default/arduino-uno.jpg", cantidad: 0, categories: ["Herramientas"], created_at: new Date(1995,11,17)},
		{name: "Cargador", toolImage: "https://images-na.ssl-images-amazon.com/images/I/61j%2B0A3cxBL._SL1500_.jpg", cantidad: 4, categories: ["Transistores"], created_at: new Date(1995,11,17)}
	];

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  	
  }

  onShowModal(index: number){

  	this.modalService.handleModal("Articulo", 
  		{name: this.tools[index].name, cantidad: this.tools[index].cantidad});
  }

}
