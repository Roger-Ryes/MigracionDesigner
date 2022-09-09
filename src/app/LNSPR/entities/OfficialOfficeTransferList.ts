
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OfficialOfficeTransferList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"groupCode"	,
					"loansStatusDesc"	,
					"currencyCode"	,
					"bankId"	,
					"expirationDate"	,
					"disbursementDate"	,
					"amount"	,
					"sequential"	,
					"processNumber"	,
					"clientCode"	,
					"loanStatus"	,
					"officeCode"	,
					"category"	,
					"officialCode"	,
					"selected"	,
					"clientName"	,
					"loanType"	
			];			
			super(undefined,props);
		}   	    
	}
	public set groupCode (value: number | null) {
    	this.setPropertyValue(value, "groupCode");    	
  	}
  	
  	public get groupCode(): number | null {
    	return this.getPropertyValue("groupCode");    	
  	}
	public set loansStatusDesc (value: string | null) {
    	this.setPropertyValue(value, "loansStatusDesc");    	
  	}
  	
  	public get loansStatusDesc(): string | null {
    	return this.getPropertyValue("loansStatusDesc");    	
  	}
	public set currencyCode (value: number | null) {
    	this.setPropertyValue(value, "currencyCode");    	
  	}
  	
  	public get currencyCode(): number | null {
    	return this.getPropertyValue("currencyCode");    	
  	}
	public set bankId (value: string | null) {
    	this.setPropertyValue(value, "bankId");    	
  	}
  	
  	public get bankId(): string | null {
    	return this.getPropertyValue("bankId");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set processNumber (value: number | null) {
    	this.setPropertyValue(value, "processNumber");    	
  	}
  	
  	public get processNumber(): number | null {
    	return this.getPropertyValue("processNumber");    	
  	}
	public set clientCode (value: number | null) {
    	this.setPropertyValue(value, "clientCode");    	
  	}
  	
  	public get clientCode(): number | null {
    	return this.getPropertyValue("clientCode");    	
  	}
	public set loanStatus (value: number | null) {
    	this.setPropertyValue(value, "loanStatus");    	
  	}
  	
  	public get loanStatus(): number | null {
    	return this.getPropertyValue("loanStatus");    	
  	}
	public set officeCode (value: number | null) {
    	this.setPropertyValue(value, "officeCode");    	
  	}
  	
  	public get officeCode(): number | null {
    	return this.getPropertyValue("officeCode");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set officialCode (value: number | null) {
    	this.setPropertyValue(value, "officialCode");    	
  	}
  	
  	public get officialCode(): number | null {
    	return this.getPropertyValue("officialCode");    	
  	}
	public set selected (value: boolean | null) {
    	this.setPropertyValue(value, "selected");    	
  	}
  	
  	public get selected(): boolean | null {
    	return this.getPropertyValue("selected");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set loanType (value: string | null) {
    	this.setPropertyValue(value, "loanType");    	
  	}
  	
  	public get loanType(): string | null {
    	return this.getPropertyValue("loanType");    	
  	}
	
}