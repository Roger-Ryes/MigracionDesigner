
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CommissionsAnnex  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"preAdministration"	,
					"numOperation"	,
					"productName"	,
					"amountAdm"	,
					"preInvest"	,
					"numBanco"	,
					"dataFootPage"	,
					"preCobranza"	,
					"customer"	,
					"customerName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set preAdministration (value: string | null) {
    	this.setPropertyValue(value, "preAdministration");    	
  	}
  	
  	public get preAdministration(): string | null {
    	return this.getPropertyValue("preAdministration");    	
  	}
	public set numOperation (value: string | null) {
    	this.setPropertyValue(value, "numOperation");    	
  	}
  	
  	public get numOperation(): string | null {
    	return this.getPropertyValue("numOperation");    	
  	}
	public set productName (value: string | null) {
    	this.setPropertyValue(value, "productName");    	
  	}
  	
  	public get productName(): string | null {
    	return this.getPropertyValue("productName");    	
  	}
	public set amountAdm (value: string | null) {
    	this.setPropertyValue(value, "amountAdm");    	
  	}
  	
  	public get amountAdm(): string | null {
    	return this.getPropertyValue("amountAdm");    	
  	}
	public set preInvest (value: string | null) {
    	this.setPropertyValue(value, "preInvest");    	
  	}
  	
  	public get preInvest(): string | null {
    	return this.getPropertyValue("preInvest");    	
  	}
	public set numBanco (value: string | null) {
    	this.setPropertyValue(value, "numBanco");    	
  	}
  	
  	public get numBanco(): string | null {
    	return this.getPropertyValue("numBanco");    	
  	}
	public set dataFootPage (value: string | null) {
    	this.setPropertyValue(value, "dataFootPage");    	
  	}
  	
  	public get dataFootPage(): string | null {
    	return this.getPropertyValue("dataFootPage");    	
  	}
	public set preCobranza (value: string | null) {
    	this.setPropertyValue(value, "preCobranza");    	
  	}
  	
  	public get preCobranza(): string | null {
    	return this.getPropertyValue("preCobranza");    	
  	}
	public set customer (value: number | null) {
    	this.setPropertyValue(value, "customer");    	
  	}
  	
  	public get customer(): number | null {
    	return this.getPropertyValue("customer");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	
}