
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ConsolidatedLoanStatus  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amortizationStatus"	,
					"capital"	,
					"interest"	,
					"arrear"	,
					"interestArrear"	,
					"otherItems"	,
					"total"	,
					"numberPayments"	
			];			
			super(undefined,props);
		}   	    
	}
	public set amortizationStatus (value: string | null) {
    	this.setPropertyValue(value, "amortizationStatus");    	
  	}
  	
  	public get amortizationStatus(): string | null {
    	return this.getPropertyValue("amortizationStatus");    	
  	}
	public set capital (value: number | null) {
    	this.setPropertyValue(value, "capital");    	
  	}
  	
  	public get capital(): number | null {
    	return this.getPropertyValue("capital");    	
  	}
	public set interest (value: number | null) {
    	this.setPropertyValue(value, "interest");    	
  	}
  	
  	public get interest(): number | null {
    	return this.getPropertyValue("interest");    	
  	}
	public set arrear (value: number | null) {
    	this.setPropertyValue(value, "arrear");    	
  	}
  	
  	public get arrear(): number | null {
    	return this.getPropertyValue("arrear");    	
  	}
	public set interestArrear (value: number | null) {
    	this.setPropertyValue(value, "interestArrear");    	
  	}
  	
  	public get interestArrear(): number | null {
    	return this.getPropertyValue("interestArrear");    	
  	}
	public set otherItems (value: number | null) {
    	this.setPropertyValue(value, "otherItems");    	
  	}
  	
  	public get otherItems(): number | null {
    	return this.getPropertyValue("otherItems");    	
  	}
	public set total (value: number | null) {
    	this.setPropertyValue(value, "total");    	
  	}
  	
  	public get total(): number | null {
    	return this.getPropertyValue("total");    	
  	}
	public set numberPayments (value: number | null) {
    	this.setPropertyValue(value, "numberPayments");    	
  	}
  	
  	public get numberPayments(): number | null {
    	return this.getPropertyValue("numberPayments");    	
  	}
	
}