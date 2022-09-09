
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LineGuaranteesList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"type"	,
					"currency"	,
					"state"	,
					"description"	,
					"currentValue"	,
					"admissionDate"	,
					"clientGar"	,
					"initialValue"	,
					"clase"	,
					"guarantee"	,
					"code"	,
					"minimumValue"	
			];			
			super(undefined,props);
		}   	    
	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set currentValue (value: number | null) {
    	this.setPropertyValue(value, "currentValue");    	
  	}
  	
  	public get currentValue(): number | null {
    	return this.getPropertyValue("currentValue");    	
  	}
	public set admissionDate (value: string | null) {
    	this.setPropertyValue(value, "admissionDate");    	
  	}
  	
  	public get admissionDate(): string | null {
    	return this.getPropertyValue("admissionDate");    	
  	}
	public set clientGar (value: number | null) {
    	this.setPropertyValue(value, "clientGar");    	
  	}
  	
  	public get clientGar(): number | null {
    	return this.getPropertyValue("clientGar");    	
  	}
	public set initialValue (value: number | null) {
    	this.setPropertyValue(value, "initialValue");    	
  	}
  	
  	public get initialValue(): number | null {
    	return this.getPropertyValue("initialValue");    	
  	}
	public set clase (value: string | null) {
    	this.setPropertyValue(value, "clase");    	
  	}
  	
  	public get clase(): string | null {
    	return this.getPropertyValue("clase");    	
  	}
	public set guarantee (value: number | null) {
    	this.setPropertyValue(value, "guarantee");    	
  	}
  	
  	public get guarantee(): number | null {
    	return this.getPropertyValue("guarantee");    	
  	}
	public set code (value: string | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): string | null {
    	return this.getPropertyValue("code");    	
  	}
	public set minimumValue (value: number | null) {
    	this.setPropertyValue(value, "minimumValue");    	
  	}
  	
  	public get minimumValue(): number | null {
    	return this.getPropertyValue("minimumValue");    	
  	}
	
}