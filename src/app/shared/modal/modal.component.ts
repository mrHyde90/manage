import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ModalService} from './modal.service';
import {ModalModel} from './modal-model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	//Poner un ViewChild y obtener el valor del input
	@ViewChild("inputPrestar") iPrestar: ElementRef;
	buenFormato = true;
	modelo: ModalModel;
	display= "none";
	show = false;
	textoFormato = "";
	onCloseModal() {
		this.iPrestar.nativeElement.value = "";
		this.display = "none";
		this.show = false;
		this.buenFormato = true;
		this.textoFormato = "";
	}

  constructor(private modalService: ModalService) { }

  saveChanges(){
  	//Checamos si cumple con el formato
  	const cantidadString: string = this.iPrestar.nativeElement.value;
  	if(cantidadString.search(/^\d{1,2}$/) == -1){
  		this.buenFormato = false;
  		this.textoFormato = "la cadena no cumple con el formato";
  	} else {
  		const cantidadNumerica = parseInt(cantidadString);
  		//checamos que el valor introducido sea menor que la cantidad actual
  		if(cantidadNumerica <= this.modelo.modalContent.cantidad){
  			console.log("Si se pudo");
  			this.onCloseModal();
  		} else {
  			this.buenFormato = false;
  			this.textoFormato = "La cantidad es mayor a la actual";
  		}
  	}
  }

  ngOnInit() {
  	this.modalService.modalEmitter.subscribe(
  		(modelo: ModalModel) => {
  			this.modelo = modelo;
  			this.display = "block";
  			this.show = true;
  		});
  }

}
