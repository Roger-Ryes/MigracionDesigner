
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PaymentForm  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientId"	,
					"quotationTr"	,
					"restrictiveCrossing"	,
					"amountTr"	,
					"checkNumber"	,
					"economicDestination"	,
					"officeId"	,
					"amountDsDec"	,
					"currencyId"	,
					"quoteTypeTr"	,
					"clientFullName"	,
					"currencyIdAux"	,
					"promoterTerm"	,
					"reference"	,
					"payAmount"	,
					"concept"	,
					"currencyName"	,
					"currencyFlagAux"	,
					"payFormName"	,
					"payFormId"	,
					"accountNumber"	,
					"payFormCategory"	,
					"payQuoteLbl"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientId (value: number | null) {
    	this.setPropertyValue(value, "clientId");    	
  	}
  	
  	public get clientId(): number | null {
    	return this.getPropertyValue("clientId");    	
  	}
	public set quotationTr (value: number | null) {
    	this.setPropertyValue(value, "quotationTr");    	
  	}
  	
  	public get quotationTr(): number | null {
    	return this.getPropertyValue("quotationTr");    	
  	}
	public set restrictiveCrossing (value: boolean | null) {
    	this.setPropertyValue(value, "restrictiveCrossing");    	
  	}
  	
  	public get restrictiveCrossing(): boolean | null {
    	return this.getPropertyValue("restrictiveCrossing");    	
  	}
	public set amountTr (value: number | null) {
    	this.setPropertyValue(value, "amountTr");    	
  	}
  	
  	public get amountTr(): number | null {
    	return this.getPropertyValue("amountTr");    	
  	}
	public set checkNumber (value: string | null) {
    	this.setPropertyValue(value, "checkNumber");    	
  	}
  	
  	public get checkNumber(): string | null {
    	return this.getPropertyValue("checkNumber");    	
  	}
	public set economicDestination (value: string | null) {
    	this.setPropertyValue(value, "economicDestination");    	
  	}
  	
  	public get economicDestination(): string | null {
    	return this.getPropertyValue("economicDestination");    	
  	}
	public set officeId (value: number | null) {
    	this.setPropertyValue(value, "officeId");    	
  	}
  	
  	public get officeId(): number | null {
    	return this.getPropertyValue("officeId");    	
  	}
	public set amountDsDec (value: number | null) {
    	this.setPropertyValue(value, "amountDsDec");    	
  	}
  	
  	public get amountDsDec(): number | null {
    	return this.getPropertyValue("amountDsDec");    	
  	}
	public set currencyId (value: number | null) {
    	this.setPropertyValue(value, "currencyId");    	
  	}
  	
  	public get currencyId(): number | null {
    	return this.getPropertyValue("currencyId");    	
  	}
	public set quoteTypeTr (value: string | null) {
    	this.setPropertyValue(value, "quoteTypeTr");    	
  	}
  	
  	public get quoteTypeTr(): string | null {
    	return this.getPropertyValue("quoteTypeTr");    	
  	}
	public set clientFullName (value: string | null) {
    	this.setPropertyValue(value, "clientFullName");    	
  	}
  	
  	public get clientFullName(): string | null {
    	return this.getPropertyValue("clientFullName");    	
  	}
	public set currencyIdAux (value: number | null) {
    	this.setPropertyValue(value, "currencyIdAux");    	
  	}
  	
  	public get currencyIdAux(): number | null {
    	return this.getPropertyValue("currencyIdAux");    	
  	}
	public set promoterTerm (value: number | null) {
    	this.setPropertyValue(value, "promoterTerm");    	
  	}
  	
  	public get promoterTerm(): number | null {
    	return this.getPropertyValue("promoterTerm");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set payAmount (value: number | null) {
    	this.setPropertyValue(value, "payAmount");    	
  	}
  	
  	public get payAmount(): number | null {
    	return this.getPropertyValue("payAmount");    	
  	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	public set currencyName (value: string | null) {
    	this.setPropertyValue(value, "currencyName");    	
  	}
  	
  	public get currencyName(): string | null {
    	return this.getPropertyValue("currencyName");    	
  	}
	public set currencyFlagAux (value: string | null) {
    	this.setPropertyValue(value, "currencyFlagAux");    	
  	}
  	
  	public get currencyFlagAux(): string | null {
    	return this.getPropertyValue("currencyFlagAux");    	
  	}
	public set payFormName (value: string | null) {
    	this.setPropertyValue(value, "payFormName");    	
  	}
  	
  	public get payFormName(): string | null {
    	return this.getPropertyValue("payFormName");    	
  	}
	public set payFormId (value: string | null) {
    	this.setPropertyValue(value, "payFormId");    	
  	}
  	
  	public get payFormId(): string | null {
    	return this.getPropertyValue("payFormId");    	
  	}
	public set accountNumber (value: string | null) {
    	this.setPropertyValue(value, "accountNumber");    	
  	}
  	
  	public get accountNumber(): string | null {
    	return this.getPropertyValue("accountNumber");    	
  	}
	public set payFormCategory (value: string | null) {
    	this.setPropertyValue(value, "payFormCategory");    	
  	}
  	
  	public get payFormCategory(): string | null {
    	return this.getPropertyValue("payFormCategory");    	
  	}
	public set payQuoteLbl (value: string | null) {
    	this.setPropertyValue(value, "payQuoteLbl");    	
  	}
  	
  	public get payQuoteLbl(): string | null {
    	return this.getPropertyValue("payQuoteLbl");    	
  	}
	
}