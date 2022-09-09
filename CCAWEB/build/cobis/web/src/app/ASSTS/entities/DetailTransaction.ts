
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DetailTransaction  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"affectation"	,
					"dividend"	,
					"coin"	,
					"price"	,
					"codeValue"	,
					"amountMn"	,
					"beneficiary"	,
					"state"	,
					"bill"	,
					"amount"	,
					"heading"	
			];			
			super(undefined,props);
		}   	    
	}
	public set affectation (value: string | null) {
    	this.setPropertyValue(value, "affectation");    	
  	}
  	
  	public get affectation(): string | null {
    	return this.getPropertyValue("affectation");    	
  	}
	public set dividend (value: number | null) {
    	this.setPropertyValue(value, "dividend");    	
  	}
  	
  	public get dividend(): number | null {
    	return this.getPropertyValue("dividend");    	
  	}
	public set coin (value: number | null) {
    	this.setPropertyValue(value, "coin");    	
  	}
  	
  	public get coin(): number | null {
    	return this.getPropertyValue("coin");    	
  	}
	public set price (value: string | null) {
    	this.setPropertyValue(value, "price");    	
  	}
  	
  	public get price(): string | null {
    	return this.getPropertyValue("price");    	
  	}
	public set codeValue (value: number | null) {
    	this.setPropertyValue(value, "codeValue");    	
  	}
  	
  	public get codeValue(): number | null {
    	return this.getPropertyValue("codeValue");    	
  	}
	public set amountMn (value: number | null) {
    	this.setPropertyValue(value, "amountMn");    	
  	}
  	
  	public get amountMn(): number | null {
    	return this.getPropertyValue("amountMn");    	
  	}
	public set beneficiary (value: string | null) {
    	this.setPropertyValue(value, "beneficiary");    	
  	}
  	
  	public get beneficiary(): string | null {
    	return this.getPropertyValue("beneficiary");    	
  	}
	public set state (value: number | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): number | null {
    	return this.getPropertyValue("state");    	
  	}
	public set bill (value: string | null) {
    	this.setPropertyValue(value, "bill");    	
  	}
  	
  	public get bill(): string | null {
    	return this.getPropertyValue("bill");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set heading (value: string | null) {
    	this.setPropertyValue(value, "heading");    	
  	}
  	
  	public get heading(): string | null {
    	return this.getPropertyValue("heading");    	
  	}
	
}