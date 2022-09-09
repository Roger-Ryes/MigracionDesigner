
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanWarranty  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"warranty"	,
					"statusWarranty"	,
					"description"	,
					"customerID"	,
					"customer"	,
					"currentValue"	,
					"currencyID"	,
					"createdOn"	
			];			
			super(undefined,props);
		}   	    
	}
	public set warranty (value: string | null) {
    	this.setPropertyValue(value, "warranty");    	
  	}
  	
  	public get warranty(): string | null {
    	return this.getPropertyValue("warranty");    	
  	}
	public set statusWarranty (value: string | null) {
    	this.setPropertyValue(value, "statusWarranty");    	
  	}
  	
  	public get statusWarranty(): string | null {
    	return this.getPropertyValue("statusWarranty");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set customerID (value: number | null) {
    	this.setPropertyValue(value, "customerID");    	
  	}
  	
  	public get customerID(): number | null {
    	return this.getPropertyValue("customerID");    	
  	}
	public set customer (value: string | null) {
    	this.setPropertyValue(value, "customer");    	
  	}
  	
  	public get customer(): string | null {
    	return this.getPropertyValue("customer");    	
  	}
	public set currentValue (value: number | null) {
    	this.setPropertyValue(value, "currentValue");    	
  	}
  	
  	public get currentValue(): number | null {
    	return this.getPropertyValue("currentValue");    	
  	}
	public set currencyID (value: number | null) {
    	this.setPropertyValue(value, "currencyID");    	
  	}
  	
  	public get currencyID(): number | null {
    	return this.getPropertyValue("currencyID");    	
  	}
	public set createdOn (value: string | null) {
    	this.setPropertyValue(value, "createdOn");    	
  	}
  	
  	public get createdOn(): string | null {
    	return this.getPropertyValue("createdOn");    	
  	}
	
}