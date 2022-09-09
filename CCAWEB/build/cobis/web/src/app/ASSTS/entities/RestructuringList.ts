
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RestructuringList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"capitalize"	,
					"capitalBalance"	,
					"interestBalance"	,
					"reest"	,
					"state"	,
					"residualTerm"	,
					"finalOp"	,
					"overduesFees"	,
					"typeLoan"	,
					"totalCap"	,
					"currency"	,
					"bank"	,
					"toPay"	,
					"numLoan"	,
					"otherItems"	
			];			
			super(undefined,props);
		}   	    
	}
	public set capitalize (value: string | null) {
    	this.setPropertyValue(value, "capitalize");    	
  	}
  	
  	public get capitalize(): string | null {
    	return this.getPropertyValue("capitalize");    	
  	}
	public set capitalBalance (value: number | null) {
    	this.setPropertyValue(value, "capitalBalance");    	
  	}
  	
  	public get capitalBalance(): number | null {
    	return this.getPropertyValue("capitalBalance");    	
  	}
	public set interestBalance (value: number | null) {
    	this.setPropertyValue(value, "interestBalance");    	
  	}
  	
  	public get interestBalance(): number | null {
    	return this.getPropertyValue("interestBalance");    	
  	}
	public set reest (value: boolean | null) {
    	this.setPropertyValue(value, "reest");    	
  	}
  	
  	public get reest(): boolean | null {
    	return this.getPropertyValue("reest");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set residualTerm (value: number | null) {
    	this.setPropertyValue(value, "residualTerm");    	
  	}
  	
  	public get residualTerm(): number | null {
    	return this.getPropertyValue("residualTerm");    	
  	}
	public set finalOp (value: boolean | null) {
    	this.setPropertyValue(value, "finalOp");    	
  	}
  	
  	public get finalOp(): boolean | null {
    	return this.getPropertyValue("finalOp");    	
  	}
	public set overduesFees (value: number | null) {
    	this.setPropertyValue(value, "overduesFees");    	
  	}
  	
  	public get overduesFees(): number | null {
    	return this.getPropertyValue("overduesFees");    	
  	}
	public set typeLoan (value: string | null) {
    	this.setPropertyValue(value, "typeLoan");    	
  	}
  	
  	public get typeLoan(): string | null {
    	return this.getPropertyValue("typeLoan");    	
  	}
	public set totalCap (value: number | null) {
    	this.setPropertyValue(value, "totalCap");    	
  	}
  	
  	public get totalCap(): number | null {
    	return this.getPropertyValue("totalCap");    	
  	}
	public set currency (value: string | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): string | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set bank (value: string | null) {
    	this.setPropertyValue(value, "bank");    	
  	}
  	
  	public get bank(): string | null {
    	return this.getPropertyValue("bank");    	
  	}
	public set toPay (value: number | null) {
    	this.setPropertyValue(value, "toPay");    	
  	}
  	
  	public get toPay(): number | null {
    	return this.getPropertyValue("toPay");    	
  	}
	public set numLoan (value: number | null) {
    	this.setPropertyValue(value, "numLoan");    	
  	}
  	
  	public get numLoan(): number | null {
    	return this.getPropertyValue("numLoan");    	
  	}
	public set otherItems (value: number | null) {
    	this.setPropertyValue(value, "otherItems");    	
  	}
  	
  	public get otherItems(): number | null {
    	return this.getPropertyValue("otherItems");    	
  	}
	
}