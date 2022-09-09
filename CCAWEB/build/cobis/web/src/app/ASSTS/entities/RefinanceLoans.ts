
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RefinanceLoans  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"selected"	,
					"totalBalance"	,
					"procedureId"	,
					"otherConceptsBalance"	,
					"transactionID"	,
					"overdueFees"	,
					"loanStatus"	,
					"currencyType"	,
					"initialAmount"	,
					"originalTerm"	,
					"type"	,
					"quotation"	,
					"currencyCode"	,
					"defaultBalance"	,
					"loan"	,
					"line"	,
					"officialID"	,
					"interestBalance"	,
					"capitalBalance"	,
					"totalToRefinance"	,
					"residualTerm"	
			];			
			super(undefined,props);
		}   	    
	}
	public set selected (value: boolean | null) {
    	this.setPropertyValue(value, "selected");    	
  	}
  	
  	public get selected(): boolean | null {
    	return this.getPropertyValue("selected");    	
  	}
	public set totalBalance (value: number | null) {
    	this.setPropertyValue(value, "totalBalance");    	
  	}
  	
  	public get totalBalance(): number | null {
    	return this.getPropertyValue("totalBalance");    	
  	}
	public set procedureId (value: string | null) {
    	this.setPropertyValue(value, "procedureId");    	
  	}
  	
  	public get procedureId(): string | null {
    	return this.getPropertyValue("procedureId");    	
  	}
	public set otherConceptsBalance (value: number | null) {
    	this.setPropertyValue(value, "otherConceptsBalance");    	
  	}
  	
  	public get otherConceptsBalance(): number | null {
    	return this.getPropertyValue("otherConceptsBalance");    	
  	}
	public set transactionID (value: number | null) {
    	this.setPropertyValue(value, "transactionID");    	
  	}
  	
  	public get transactionID(): number | null {
    	return this.getPropertyValue("transactionID");    	
  	}
	public set overdueFees (value: number | null) {
    	this.setPropertyValue(value, "overdueFees");    	
  	}
  	
  	public get overdueFees(): number | null {
    	return this.getPropertyValue("overdueFees");    	
  	}
	public set loanStatus (value: string | null) {
    	this.setPropertyValue(value, "loanStatus");    	
  	}
  	
  	public get loanStatus(): string | null {
    	return this.getPropertyValue("loanStatus");    	
  	}
	public set currencyType (value: string | null) {
    	this.setPropertyValue(value, "currencyType");    	
  	}
  	
  	public get currencyType(): string | null {
    	return this.getPropertyValue("currencyType");    	
  	}
	public set initialAmount (value: number | null) {
    	this.setPropertyValue(value, "initialAmount");    	
  	}
  	
  	public get initialAmount(): number | null {
    	return this.getPropertyValue("initialAmount");    	
  	}
	public set originalTerm (value: number | null) {
    	this.setPropertyValue(value, "originalTerm");    	
  	}
  	
  	public get originalTerm(): number | null {
    	return this.getPropertyValue("originalTerm");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set quotation (value: number | null) {
    	this.setPropertyValue(value, "quotation");    	
  	}
  	
  	public get quotation(): number | null {
    	return this.getPropertyValue("quotation");    	
  	}
	public set currencyCode (value: number | null) {
    	this.setPropertyValue(value, "currencyCode");    	
  	}
  	
  	public get currencyCode(): number | null {
    	return this.getPropertyValue("currencyCode");    	
  	}
	public set defaultBalance (value: number | null) {
    	this.setPropertyValue(value, "defaultBalance");    	
  	}
  	
  	public get defaultBalance(): number | null {
    	return this.getPropertyValue("defaultBalance");    	
  	}
	public set loan (value: string | null) {
    	this.setPropertyValue(value, "loan");    	
  	}
  	
  	public get loan(): string | null {
    	return this.getPropertyValue("loan");    	
  	}
	public set line (value: string | null) {
    	this.setPropertyValue(value, "line");    	
  	}
  	
  	public get line(): string | null {
    	return this.getPropertyValue("line");    	
  	}
	public set officialID (value: string | null) {
    	this.setPropertyValue(value, "officialID");    	
  	}
  	
  	public get officialID(): string | null {
    	return this.getPropertyValue("officialID");    	
  	}
	public set interestBalance (value: number | null) {
    	this.setPropertyValue(value, "interestBalance");    	
  	}
  	
  	public get interestBalance(): number | null {
    	return this.getPropertyValue("interestBalance");    	
  	}
	public set capitalBalance (value: number | null) {
    	this.setPropertyValue(value, "capitalBalance");    	
  	}
  	
  	public get capitalBalance(): number | null {
    	return this.getPropertyValue("capitalBalance");    	
  	}
	public set totalToRefinance (value: number | null) {
    	this.setPropertyValue(value, "totalToRefinance");    	
  	}
  	
  	public get totalToRefinance(): number | null {
    	return this.getPropertyValue("totalToRefinance");    	
  	}
	public set residualTerm (value: number | null) {
    	this.setPropertyValue(value, "residualTerm");    	
  	}
  	
  	public get residualTerm(): number | null {
    	return this.getPropertyValue("residualTerm");    	
  	}
	
}