
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class QuotationCurrency  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"currencyType"	,
					"date"	,
					"value"	,
					"result"	
			];			
			super(undefined,props);
		}   	    
	}
	public set currencyType (value: number | null) {
    	this.setPropertyValue(value, "currencyType");    	
  	}
  	
  	public get currencyType(): number | null {
    	return this.getPropertyValue("currencyType");    	
  	}
	public set date (value: Date | null) {
    	this.setPropertyValue(value, "date");    	
  	}
  	
  	public get date(): Date | null {
    	return this.getPropertyValue("date");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set result (value: number | null) {
    	this.setPropertyValue(value, "result");    	
  	}
  	
  	public get result(): number | null {
    	return this.getPropertyValue("result");    	
  	}
	
}