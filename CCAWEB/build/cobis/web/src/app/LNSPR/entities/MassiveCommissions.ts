
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class MassiveCommissions  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"endLote"	,
					"mistake"	,
					"amountPaid"	,
					"heading"	,
					"operation"	,
					"file"	,
					"currency"	,
					"description"	,
					"baseCalculation"	,
					"lot"	
			];			
			super(undefined,props);
		}   	    
	}
	public set endLote (value: string | null) {
    	this.setPropertyValue(value, "endLote");    	
  	}
  	
  	public get endLote(): string | null {
    	return this.getPropertyValue("endLote");    	
  	}
	public set mistake (value: string | null) {
    	this.setPropertyValue(value, "mistake");    	
  	}
  	
  	public get mistake(): string | null {
    	return this.getPropertyValue("mistake");    	
  	}
	public set amountPaid (value: number | null) {
    	this.setPropertyValue(value, "amountPaid");    	
  	}
  	
  	public get amountPaid(): number | null {
    	return this.getPropertyValue("amountPaid");    	
  	}
	public set heading (value: string | null) {
    	this.setPropertyValue(value, "heading");    	
  	}
  	
  	public get heading(): string | null {
    	return this.getPropertyValue("heading");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set file (value: string | null) {
    	this.setPropertyValue(value, "file");    	
  	}
  	
  	public get file(): string | null {
    	return this.getPropertyValue("file");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set baseCalculation (value: number | null) {
    	this.setPropertyValue(value, "baseCalculation");    	
  	}
  	
  	public get baseCalculation(): number | null {
    	return this.getPropertyValue("baseCalculation");    	
  	}
	public set lot (value: number | null) {
    	this.setPropertyValue(value, "lot");    	
  	}
  	
  	public get lot(): number | null {
    	return this.getPropertyValue("lot");    	
  	}
	
}