
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AccountStatusTec  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"concept"	,
					"payment"	,
					"movementDate"	,
					"moratoriumCommison"	,
					"capital"	,
					"supervisionExpense"	,
					"moratoriumInterest"	,
					"insurance"	,
					"charges"	,
					"iva"	,
					"balance"	,
					"interest"	
			];			
			super(undefined,props);
		}   	    
	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	public set payment (value: number | null) {
    	this.setPropertyValue(value, "payment");    	
  	}
  	
  	public get payment(): number | null {
    	return this.getPropertyValue("payment");    	
  	}
	public set movementDate (value: string | null) {
    	this.setPropertyValue(value, "movementDate");    	
  	}
  	
  	public get movementDate(): string | null {
    	return this.getPropertyValue("movementDate");    	
  	}
	public set moratoriumCommison (value: number | null) {
    	this.setPropertyValue(value, "moratoriumCommison");    	
  	}
  	
  	public get moratoriumCommison(): number | null {
    	return this.getPropertyValue("moratoriumCommison");    	
  	}
	public set capital (value: number | null) {
    	this.setPropertyValue(value, "capital");    	
  	}
  	
  	public get capital(): number | null {
    	return this.getPropertyValue("capital");    	
  	}
	public set supervisionExpense (value: number | null) {
    	this.setPropertyValue(value, "supervisionExpense");    	
  	}
  	
  	public get supervisionExpense(): number | null {
    	return this.getPropertyValue("supervisionExpense");    	
  	}
	public set moratoriumInterest (value: number | null) {
    	this.setPropertyValue(value, "moratoriumInterest");    	
  	}
  	
  	public get moratoriumInterest(): number | null {
    	return this.getPropertyValue("moratoriumInterest");    	
  	}
	public set insurance (value: number | null) {
    	this.setPropertyValue(value, "insurance");    	
  	}
  	
  	public get insurance(): number | null {
    	return this.getPropertyValue("insurance");    	
  	}
	public set charges (value: number | null) {
    	this.setPropertyValue(value, "charges");    	
  	}
  	
  	public get charges(): number | null {
    	return this.getPropertyValue("charges");    	
  	}
	public set iva (value: number | null) {
    	this.setPropertyValue(value, "iva");    	
  	}
  	
  	public get iva(): number | null {
    	return this.getPropertyValue("iva");    	
  	}
	public set balance (value: number | null) {
    	this.setPropertyValue(value, "balance");    	
  	}
  	
  	public get balance(): number | null {
    	return this.getPropertyValue("balance");    	
  	}
	public set interest (value: number | null) {
    	this.setPropertyValue(value, "interest");    	
  	}
  	
  	public get interest(): number | null {
    	return this.getPropertyValue("interest");    	
  	}
	
}