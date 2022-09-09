
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class QuoteDetailPayment  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"numQuote"	,
					"expired"	,
					"payment"	,
					"status"	
			];			
			super(undefined,props);
		}   	    
	}
	public set numQuote (value: number | null) {
    	this.setPropertyValue(value, "numQuote");    	
  	}
  	
  	public get numQuote(): number | null {
    	return this.getPropertyValue("numQuote");    	
  	}
	public set expired (value: Date | null) {
    	this.setPropertyValue(value, "expired");    	
  	}
  	
  	public get expired(): Date | null {
    	return this.getPropertyValue("expired");    	
  	}
	public set payment (value: number | null) {
    	this.setPropertyValue(value, "payment");    	
  	}
  	
  	public get payment(): number | null {
    	return this.getPropertyValue("payment");    	
  	}
	public set status (value: string | null) {
    	this.setPropertyValue(value, "status");    	
  	}
  	
  	public get status(): string | null {
    	return this.getPropertyValue("status");    	
  	}
	
}