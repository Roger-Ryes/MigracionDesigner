
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DetailPaymentForm  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"disbursementId"	,
					"disbursementrate"	,
					"currencyId"	,
					"currencyDescription"	,
					"amount"	,
					"typeQuotation"	,
					"quote"	,
					"amountOp"	,
					"quoteTypeOp"	,
					"quoteOp"	,
					"amountMn"	,
					"account"	,
					"beneficiary"	,
					"officeId"	,
					"officeName"	,
					"sequential"	,
					"productCategory"	,
					"preNotification"	,
					"observations"	
			];			
			super(undefined,props);
		}   	    
	}
	public set disbursementId (value: number | null) {
    	this.setPropertyValue(value, "disbursementId");    	
  	}
  	
  	public get disbursementId(): number | null {
    	return this.getPropertyValue("disbursementId");    	
  	}
	public set disbursementrate (value: string | null) {
    	this.setPropertyValue(value, "disbursementrate");    	
  	}
  	
  	public get disbursementrate(): string | null {
    	return this.getPropertyValue("disbursementrate");    	
  	}
	public set currencyId (value: number | null) {
    	this.setPropertyValue(value, "currencyId");    	
  	}
  	
  	public get currencyId(): number | null {
    	return this.getPropertyValue("currencyId");    	
  	}
	public set currencyDescription (value: string | null) {
    	this.setPropertyValue(value, "currencyDescription");    	
  	}
  	
  	public get currencyDescription(): string | null {
    	return this.getPropertyValue("currencyDescription");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set typeQuotation (value: string | null) {
    	this.setPropertyValue(value, "typeQuotation");    	
  	}
  	
  	public get typeQuotation(): string | null {
    	return this.getPropertyValue("typeQuotation");    	
  	}
	public set quote (value: number | null) {
    	this.setPropertyValue(value, "quote");    	
  	}
  	
  	public get quote(): number | null {
    	return this.getPropertyValue("quote");    	
  	}
	public set amountOp (value: number | null) {
    	this.setPropertyValue(value, "amountOp");    	
  	}
  	
  	public get amountOp(): number | null {
    	return this.getPropertyValue("amountOp");    	
  	}
	public set quoteTypeOp (value: string | null) {
    	this.setPropertyValue(value, "quoteTypeOp");    	
  	}
  	
  	public get quoteTypeOp(): string | null {
    	return this.getPropertyValue("quoteTypeOp");    	
  	}
	public set quoteOp (value: number | null) {
    	this.setPropertyValue(value, "quoteOp");    	
  	}
  	
  	public get quoteOp(): number | null {
    	return this.getPropertyValue("quoteOp");    	
  	}
	public set amountMn (value: number | null) {
    	this.setPropertyValue(value, "amountMn");    	
  	}
  	
  	public get amountMn(): number | null {
    	return this.getPropertyValue("amountMn");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set beneficiary (value: string | null) {
    	this.setPropertyValue(value, "beneficiary");    	
  	}
  	
  	public get beneficiary(): string | null {
    	return this.getPropertyValue("beneficiary");    	
  	}
	public set officeId (value: number | null) {
    	this.setPropertyValue(value, "officeId");    	
  	}
  	
  	public get officeId(): number | null {
    	return this.getPropertyValue("officeId");    	
  	}
	public set officeName (value: string | null) {
    	this.setPropertyValue(value, "officeName");    	
  	}
  	
  	public get officeName(): string | null {
    	return this.getPropertyValue("officeName");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set productCategory (value: string | null) {
    	this.setPropertyValue(value, "productCategory");    	
  	}
  	
  	public get productCategory(): string | null {
    	return this.getPropertyValue("productCategory");    	
  	}
	public set preNotification (value: number | null) {
    	this.setPropertyValue(value, "preNotification");    	
  	}
  	
  	public get preNotification(): number | null {
    	return this.getPropertyValue("preNotification");    	
  	}
	public set observations (value: string | null) {
    	this.setPropertyValue(value, "observations");    	
  	}
  	
  	public get observations(): string | null {
    	return this.getPropertyValue("observations");    	
  	}
	
}