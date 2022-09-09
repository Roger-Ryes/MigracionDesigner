
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanRates  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"referentialRate"	,
					"signToApply"	,
					"valueReferenceRate"	,
					"currentRate"	,
					"valueToApply"	,
					"anualEffectiveRate"	,
					"spreadApply"	,
					"sequential"	,
					"item"	,
					"quota"	,
					"updatedOn"	,
					"dateReferenceRate"	
			];			
			super(undefined,props);
		}   	    
	}
	public set referentialRate (value: string | null) {
    	this.setPropertyValue(value, "referentialRate");    	
  	}
  	
  	public get referentialRate(): string | null {
    	return this.getPropertyValue("referentialRate");    	
  	}
	public set signToApply (value: string | null) {
    	this.setPropertyValue(value, "signToApply");    	
  	}
  	
  	public get signToApply(): string | null {
    	return this.getPropertyValue("signToApply");    	
  	}
	public set valueReferenceRate (value: number | null) {
    	this.setPropertyValue(value, "valueReferenceRate");    	
  	}
  	
  	public get valueReferenceRate(): number | null {
    	return this.getPropertyValue("valueReferenceRate");    	
  	}
	public set currentRate (value: number | null) {
    	this.setPropertyValue(value, "currentRate");    	
  	}
  	
  	public get currentRate(): number | null {
    	return this.getPropertyValue("currentRate");    	
  	}
	public set valueToApply (value: string | null) {
    	this.setPropertyValue(value, "valueToApply");    	
  	}
  	
  	public get valueToApply(): string | null {
    	return this.getPropertyValue("valueToApply");    	
  	}
	public set anualEffectiveRate (value: number | null) {
    	this.setPropertyValue(value, "anualEffectiveRate");    	
  	}
  	
  	public get anualEffectiveRate(): number | null {
    	return this.getPropertyValue("anualEffectiveRate");    	
  	}
	public set spreadApply (value: string | null) {
    	this.setPropertyValue(value, "spreadApply");    	
  	}
  	
  	public get spreadApply(): string | null {
    	return this.getPropertyValue("spreadApply");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set quota (value: number | null) {
    	this.setPropertyValue(value, "quota");    	
  	}
  	
  	public get quota(): number | null {
    	return this.getPropertyValue("quota");    	
  	}
	public set updatedOn (value: Date | null) {
    	this.setPropertyValue(value, "updatedOn");    	
  	}
  	
  	public get updatedOn(): Date | null {
    	return this.getPropertyValue("updatedOn");    	
  	}
	public set dateReferenceRate (value: string | null) {
    	this.setPropertyValue(value, "dateReferenceRate");    	
  	}
  	
  	public get dateReferenceRate(): string | null {
    	return this.getPropertyValue("dateReferenceRate");    	
  	}
	
}