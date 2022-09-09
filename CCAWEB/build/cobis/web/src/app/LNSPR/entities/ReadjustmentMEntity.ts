
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ReadjustmentMEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"item"	,
					"tasaMin"	,
					"referencial"	,
					"readjustDate"	,
					"factor"	,
					"mantieneCuota"	,
					"operation"	,
					"sign"	,
					"percentage"	
			];			
			super(undefined,props);
		}   	    
	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set tasaMin (value: string | null) {
    	this.setPropertyValue(value, "tasaMin");    	
  	}
  	
  	public get tasaMin(): string | null {
    	return this.getPropertyValue("tasaMin");    	
  	}
	public set referencial (value: string | null) {
    	this.setPropertyValue(value, "referencial");    	
  	}
  	
  	public get referencial(): string | null {
    	return this.getPropertyValue("referencial");    	
  	}
	public set readjustDate (value: Date | null) {
    	this.setPropertyValue(value, "readjustDate");    	
  	}
  	
  	public get readjustDate(): Date | null {
    	return this.getPropertyValue("readjustDate");    	
  	}
	public set factor (value: number | null) {
    	this.setPropertyValue(value, "factor");    	
  	}
  	
  	public get factor(): number | null {
    	return this.getPropertyValue("factor");    	
  	}
	public set mantieneCuota (value: string | null) {
    	this.setPropertyValue(value, "mantieneCuota");    	
  	}
  	
  	public get mantieneCuota(): string | null {
    	return this.getPropertyValue("mantieneCuota");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set sign (value: string | null) {
    	this.setPropertyValue(value, "sign");    	
  	}
  	
  	public get sign(): string | null {
    	return this.getPropertyValue("sign");    	
  	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	
}