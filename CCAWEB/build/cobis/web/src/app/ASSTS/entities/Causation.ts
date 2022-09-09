
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Causation  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"dateTransation"	,
					"dividend"	,
					"coin"	,
					"dateReverd"	,
					"price"	,
					"concept"	,
					"amount"	,
					"state"	,
					"amountMn"	
			];			
			super(undefined,props);
		}   	    
	}
	public set dateTransation (value: string | null) {
    	this.setPropertyValue(value, "dateTransation");    	
  	}
  	
  	public get dateTransation(): string | null {
    	return this.getPropertyValue("dateTransation");    	
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
	public set dateReverd (value: string | null) {
    	this.setPropertyValue(value, "dateReverd");    	
  	}
  	
  	public get dateReverd(): string | null {
    	return this.getPropertyValue("dateReverd");    	
  	}
	public set price (value: string | null) {
    	this.setPropertyValue(value, "price");    	
  	}
  	
  	public get price(): string | null {
    	return this.getPropertyValue("price");    	
  	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set amountMn (value: number | null) {
    	this.setPropertyValue(value, "amountMn");    	
  	}
  	
  	public get amountMn(): number | null {
    	return this.getPropertyValue("amountMn");    	
  	}
	
}