
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanAdditionalInformation  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amountToCancel"	,
					"dateToDisburse"	,
					"currencyOp"	,
					"quotation"	,
					"quotationOp"	,
					"lblAmountToCancel"	,
					"amountOperation"	,
					"quoteTypeOP"	,
					"renovation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set amountToCancel (value: number | null) {
    	this.setPropertyValue(value, "amountToCancel");    	
  	}
  	
  	public get amountToCancel(): number | null {
    	return this.getPropertyValue("amountToCancel");    	
  	}
	public set dateToDisburse (value: Date | null) {
    	this.setPropertyValue(value, "dateToDisburse");    	
  	}
  	
  	public get dateToDisburse(): Date | null {
    	return this.getPropertyValue("dateToDisburse");    	
  	}
	public set currencyOp (value: string | null) {
    	this.setPropertyValue(value, "currencyOp");    	
  	}
  	
  	public get currencyOp(): string | null {
    	return this.getPropertyValue("currencyOp");    	
  	}
	public set quotation (value: number | null) {
    	this.setPropertyValue(value, "quotation");    	
  	}
  	
  	public get quotation(): number | null {
    	return this.getPropertyValue("quotation");    	
  	}
	public set quotationOp (value: number | null) {
    	this.setPropertyValue(value, "quotationOp");    	
  	}
  	
  	public get quotationOp(): number | null {
    	return this.getPropertyValue("quotationOp");    	
  	}
	public set lblAmountToCancel (value: string | null) {
    	this.setPropertyValue(value, "lblAmountToCancel");    	
  	}
  	
  	public get lblAmountToCancel(): string | null {
    	return this.getPropertyValue("lblAmountToCancel");    	
  	}
	public set amountOperation (value: number | null) {
    	this.setPropertyValue(value, "amountOperation");    	
  	}
  	
  	public get amountOperation(): number | null {
    	return this.getPropertyValue("amountOperation");    	
  	}
	public set quoteTypeOP (value: string | null) {
    	this.setPropertyValue(value, "quoteTypeOP");    	
  	}
  	
  	public get quoteTypeOP(): string | null {
    	return this.getPropertyValue("quoteTypeOP");    	
  	}
	public set renovation (value: string | null) {
    	this.setPropertyValue(value, "renovation");    	
  	}
  	
  	public get renovation(): string | null {
    	return this.getPropertyValue("renovation");    	
  	}
	
}