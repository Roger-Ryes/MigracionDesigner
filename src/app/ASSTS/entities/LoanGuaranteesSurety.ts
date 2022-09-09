
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanGuaranteesSurety  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"customerID"	,
					"description"	,
					"createdOn"	,
					"customer"	,
					"currentValue"	,
					"guaranteesSurety"	,
					"statusGuaranteesSurety"	,
					"currencyID"	
			];			
			super(undefined,props);
		}   	    
	}
	public set customerID (value: number | null) {
    	this.setPropertyValue(value, "customerID");    	
  	}
  	
  	public get customerID(): number | null {
    	return this.getPropertyValue("customerID");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set createdOn (value: string | null) {
    	this.setPropertyValue(value, "createdOn");    	
  	}
  	
  	public get createdOn(): string | null {
    	return this.getPropertyValue("createdOn");    	
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
	public set guaranteesSurety (value: string | null) {
    	this.setPropertyValue(value, "guaranteesSurety");    	
  	}
  	
  	public get guaranteesSurety(): string | null {
    	return this.getPropertyValue("guaranteesSurety");    	
  	}
	public set statusGuaranteesSurety (value: string | null) {
    	this.setPropertyValue(value, "statusGuaranteesSurety");    	
  	}
  	
  	public get statusGuaranteesSurety(): string | null {
    	return this.getPropertyValue("statusGuaranteesSurety");    	
  	}
	public set currencyID (value: number | null) {
    	this.setPropertyValue(value, "currencyID");    	
  	}
  	
  	public get currencyID(): number | null {
    	return this.getPropertyValue("currencyID");    	
  	}
	
}