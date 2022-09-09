
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PrintingDocuments  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"operation"	,
					"mnemonic"	,
					"documentos"	,
					"item"	,
					"codigo"	,
					"templade"	,
					"mode"	
			];			
			super(undefined,props);
		}   	    
	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set mnemonic (value: string | null) {
    	this.setPropertyValue(value, "mnemonic");    	
  	}
  	
  	public get mnemonic(): string | null {
    	return this.getPropertyValue("mnemonic");    	
  	}
	public set documentos (value: string | null) {
    	this.setPropertyValue(value, "documentos");    	
  	}
  	
  	public get documentos(): string | null {
    	return this.getPropertyValue("documentos");    	
  	}
	public set item (value: boolean | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): boolean | null {
    	return this.getPropertyValue("item");    	
  	}
	public set codigo (value: number | null) {
    	this.setPropertyValue(value, "codigo");    	
  	}
  	
  	public get codigo(): number | null {
    	return this.getPropertyValue("codigo");    	
  	}
	public set templade (value: string | null) {
    	this.setPropertyValue(value, "templade");    	
  	}
  	
  	public get templade(): string | null {
    	return this.getPropertyValue("templade");    	
  	}
	public set mode (value: number | null) {
    	this.setPropertyValue(value, "mode");    	
  	}
  	
  	public get mode(): number | null {
    	return this.getPropertyValue("mode");    	
  	}
	
}