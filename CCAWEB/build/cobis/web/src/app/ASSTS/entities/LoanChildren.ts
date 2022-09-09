
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanChildren  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"disbursementDate"	,
					"clientID"	,
					"redesCont"	,
					"operationTypeID"	,
					"loanBankID"	,
					"desStatus"	,
					"previousOper"	,
					"officeID"	,
					"amount"	,
					"numProcedure"	,
					"loanID"	,
					"officerID"	,
					"codCurrency"	,
					"expirationDate"	,
					"desOperationType"	,
					"adjustment"	,
					"clientName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set clientID (value: number | null) {
    	this.setPropertyValue(value, "clientID");    	
  	}
  	
  	public get clientID(): number | null {
    	return this.getPropertyValue("clientID");    	
  	}
	public set redesCont (value: string | null) {
    	this.setPropertyValue(value, "redesCont");    	
  	}
  	
  	public get redesCont(): string | null {
    	return this.getPropertyValue("redesCont");    	
  	}
	public set operationTypeID (value: string | null) {
    	this.setPropertyValue(value, "operationTypeID");    	
  	}
  	
  	public get operationTypeID(): string | null {
    	return this.getPropertyValue("operationTypeID");    	
  	}
	public set loanBankID (value: string | null) {
    	this.setPropertyValue(value, "loanBankID");    	
  	}
  	
  	public get loanBankID(): string | null {
    	return this.getPropertyValue("loanBankID");    	
  	}
	public set desStatus (value: string | null) {
    	this.setPropertyValue(value, "desStatus");    	
  	}
  	
  	public get desStatus(): string | null {
    	return this.getPropertyValue("desStatus");    	
  	}
	public set previousOper (value: string | null) {
    	this.setPropertyValue(value, "previousOper");    	
  	}
  	
  	public get previousOper(): string | null {
    	return this.getPropertyValue("previousOper");    	
  	}
	public set officeID (value: number | null) {
    	this.setPropertyValue(value, "officeID");    	
  	}
  	
  	public get officeID(): number | null {
    	return this.getPropertyValue("officeID");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set numProcedure (value: string | null) {
    	this.setPropertyValue(value, "numProcedure");    	
  	}
  	
  	public get numProcedure(): string | null {
    	return this.getPropertyValue("numProcedure");    	
  	}
	public set loanID (value: number | null) {
    	this.setPropertyValue(value, "loanID");    	
  	}
  	
  	public get loanID(): number | null {
    	return this.getPropertyValue("loanID");    	
  	}
	public set officerID (value: number | null) {
    	this.setPropertyValue(value, "officerID");    	
  	}
  	
  	public get officerID(): number | null {
    	return this.getPropertyValue("officerID");    	
  	}
	public set codCurrency (value: number | null) {
    	this.setPropertyValue(value, "codCurrency");    	
  	}
  	
  	public get codCurrency(): number | null {
    	return this.getPropertyValue("codCurrency");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set desOperationType (value: string | null) {
    	this.setPropertyValue(value, "desOperationType");    	
  	}
  	
  	public get desOperationType(): string | null {
    	return this.getPropertyValue("desOperationType");    	
  	}
	public set adjustment (value: string | null) {
    	this.setPropertyValue(value, "adjustment");    	
  	}
  	
  	public get adjustment(): string | null {
    	return this.getPropertyValue("adjustment");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	
}