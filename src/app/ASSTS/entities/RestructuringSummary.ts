
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RestructuringSummary  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"localCurrency"	,
					"opCurrency"	,
					"restructuringType"	,
					"amountPay"	
			];			
			super(undefined,props);
		}   	    
	}
	public set localCurrency (value: number | null) {
    	this.setPropertyValue(value, "localCurrency");    	
  	}
  	
  	public get localCurrency(): number | null {
    	return this.getPropertyValue("localCurrency");    	
  	}
	public set opCurrency (value: number | null) {
    	this.setPropertyValue(value, "opCurrency");    	
  	}
  	
  	public get opCurrency(): number | null {
    	return this.getPropertyValue("opCurrency");    	
  	}
	public set restructuringType (value: string | null) {
    	this.setPropertyValue(value, "restructuringType");    	
  	}
  	
  	public get restructuringType(): string | null {
    	return this.getPropertyValue("restructuringType");    	
  	}
	public set amountPay (value: number | null) {
    	this.setPropertyValue(value, "amountPay");    	
  	}
  	
  	public get amountPay(): number | null {
    	return this.getPropertyValue("amountPay");    	
  	}
	
}