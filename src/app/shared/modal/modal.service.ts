import { Injectable, EventEmitter } from '@angular/core';
import {ModalModel} from './modal-model';

@Injectable()
export class ModalService {

	modalEmitter = new EventEmitter<ModalModel>();

  constructor() { }

  handleModal(name: string, toolC: {name: string, cantidad: number}){
  	const modelo = new ModalModel(name, toolC);
  	this.modalEmitter.emit(modelo);
  }


}