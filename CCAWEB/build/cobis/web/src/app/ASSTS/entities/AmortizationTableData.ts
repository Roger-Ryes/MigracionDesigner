
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationTableData  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"number"	,
					"paymentOtherItems"	,
					"ivaInteres"	,
					"dateLimit"	,
					"beginningBalance"	,
					"outstandingBalance"	,
					"fullPayment"	,
					"principalPayment"	,
					"interestPayment"	
			];			
			super(undefined,props);
		}   	    
	}
	public set number (value: number | null) {
    	this.setPropertyValue(value, "number");    	
  	}
  	
  	public get number(): number | null {
    	return this.getPropertyValue("number");    	
  	}
	public set paymentOtherItems (value: number | null) {
    	this.setPropertyValue(value, "paymentOtherItems");    	
  	}
  	
  	public get paymentOtherItems(): number | null {
    	return this.getPropertyValue("paymentOtherItems");    	
  	}
	public set ivaInteres (value: number | null) {
    	this.setPropertyValue(value, "ivaInteres");    	
  	}
  	
  	public get ivaInteres(): number | null {
    	return this.getPropertyValue("ivaInteres");    	
  	}
	public set dateLimit (value: Date | null) {
    	this.setPropertyValue(value, "dateLimit");    	
  	}
  	
  	public get dateLimit(): Date | null {
    	return this.getPropertyValue("dateLimit");    	
  	}
	public set beginningBalance (value: number | null) {
    	this.setPropertyValue(value, "beginningBalance");    	
  	}
  	
  	public get beginningBalance(): number | null {
    	return this.getPropertyValue("beginningBalance");    	
  	}
	public set outstandingBalance (value: number | null) {
    	this.setPropertyValue(value, "outstandingBalance");    	
  	}
  	
  	public get outstandingBalance(): number | null {
    	return this.getPropertyValue("outstandingBalance");    	
  	}
	public set fullPayment (value: number | null) {
    	this.setPropertyValue(value, "fullPayment");    	
  	}
  	
  	public get fullPayment(): number | null {
    	return this.getPropertyValue("fullPayment");    	
  	}
	public set principalPayment (value: number | null) {
    	this.setPropertyValue(value, "principalPayment");    	
  	}
  	
  	public get principalPayment(): number | null {
    	return this.getPropertyValue("principalPayment");    	
  	}
	public set interestPayment (value: number | null) {
    	this.setPropertyValue(value, "interestPayment");    	
  	}
  	
  	public get interestPayment(): number | null {
    	return this.getPropertyValue("interestPayment");    	
  	}
	
}