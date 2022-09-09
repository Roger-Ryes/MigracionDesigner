
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PaymentGroup  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"paymentsType"	,
					"reference"	,
					"currencyType"	,
					"operacion"	,
					"fechaUltProc"	,
					"value"	,
					"fechaVen"	,
					"date"	
			];			
			super(undefined,props);
		}   	    
	}
	public set paymentsType (value: string | null) {
    	this.setPropertyValue(value, "paymentsType");    	
  	}
  	
  	public get paymentsType(): string | null {
    	return this.getPropertyValue("paymentsType");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set currencyType (value: number | null) {
    	this.setPropertyValue(value, "currencyType");    	
  	}
  	
  	public get currencyType(): number | null {
    	return this.getPropertyValue("currencyType");    	
  	}
	public set operacion (value: string | null) {
    	this.setPropertyValue(value, "operacion");    	
  	}
  	
  	public get operacion(): string | null {
    	return this.getPropertyValue("operacion");    	
  	}
	public set fechaUltProc (value: Date | null) {
    	this.setPropertyValue(value, "fechaUltProc");    	
  	}
  	
  	public get fechaUltProc(): Date | null {
    	return this.getPropertyValue("fechaUltProc");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set fechaVen (value: Date | null) {
    	this.setPropertyValue(value, "fechaVen");    	
  	}
  	
  	public get fechaVen(): Date | null {
    	return this.getPropertyValue("fechaVen");    	
  	}
	public set date (value: Date | null) {
    	this.setPropertyValue(value, "date");    	
  	}
  	
  	public get date(): Date | null {
    	return this.getPropertyValue("date");    	
  	}
	
}