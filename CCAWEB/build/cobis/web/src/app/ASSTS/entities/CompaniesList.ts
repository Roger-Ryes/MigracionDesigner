
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CompaniesList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"ruc"	,
					"state"	,
					"archive"	,
					"rateApply"	,
					"clientName"	,
					"client"	,
					"contact"	,
					"paymentFrequency"	,
					"paymentArea"	,
					"classification"	,
					"paymentForm"	,
					"category"	,
					"phone"	,
					"antiquity"	,
					"companyName"	,
					"paymentPercentage"	,
					"account"	,
					"agreement"	,
					"paymentFormService"	,
					"term"	,
					"address"	,
					"institution"	
			];			
			super(undefined,props);
		}   	    
	}
	public set ruc (value: string | null) {
    	this.setPropertyValue(value, "ruc");    	
  	}
  	
  	public get ruc(): string | null {
    	return this.getPropertyValue("ruc");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set archive (value: string | null) {
    	this.setPropertyValue(value, "archive");    	
  	}
  	
  	public get archive(): string | null {
    	return this.getPropertyValue("archive");    	
  	}
	public set rateApply (value: number | null) {
    	this.setPropertyValue(value, "rateApply");    	
  	}
  	
  	public get rateApply(): number | null {
    	return this.getPropertyValue("rateApply");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set client (value: number | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): number | null {
    	return this.getPropertyValue("client");    	
  	}
	public set contact (value: string | null) {
    	this.setPropertyValue(value, "contact");    	
  	}
  	
  	public get contact(): string | null {
    	return this.getPropertyValue("contact");    	
  	}
	public set paymentFrequency (value: string | null) {
    	this.setPropertyValue(value, "paymentFrequency");    	
  	}
  	
  	public get paymentFrequency(): string | null {
    	return this.getPropertyValue("paymentFrequency");    	
  	}
	public set paymentArea (value: string | null) {
    	this.setPropertyValue(value, "paymentArea");    	
  	}
  	
  	public get paymentArea(): string | null {
    	return this.getPropertyValue("paymentArea");    	
  	}
	public set classification (value: string | null) {
    	this.setPropertyValue(value, "classification");    	
  	}
  	
  	public get classification(): string | null {
    	return this.getPropertyValue("classification");    	
  	}
	public set paymentForm (value: string | null) {
    	this.setPropertyValue(value, "paymentForm");    	
  	}
  	
  	public get paymentForm(): string | null {
    	return this.getPropertyValue("paymentForm");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set phone (value: string | null) {
    	this.setPropertyValue(value, "phone");    	
  	}
  	
  	public get phone(): string | null {
    	return this.getPropertyValue("phone");    	
  	}
	public set antiquity (value: string | null) {
    	this.setPropertyValue(value, "antiquity");    	
  	}
  	
  	public get antiquity(): string | null {
    	return this.getPropertyValue("antiquity");    	
  	}
	public set companyName (value: string | null) {
    	this.setPropertyValue(value, "companyName");    	
  	}
  	
  	public get companyName(): string | null {
    	return this.getPropertyValue("companyName");    	
  	}
	public set paymentPercentage (value: number | null) {
    	this.setPropertyValue(value, "paymentPercentage");    	
  	}
  	
  	public get paymentPercentage(): number | null {
    	return this.getPropertyValue("paymentPercentage");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set agreement (value: string | null) {
    	this.setPropertyValue(value, "agreement");    	
  	}
  	
  	public get agreement(): string | null {
    	return this.getPropertyValue("agreement");    	
  	}
	public set paymentFormService (value: string | null) {
    	this.setPropertyValue(value, "paymentFormService");    	
  	}
  	
  	public get paymentFormService(): string | null {
    	return this.getPropertyValue("paymentFormService");    	
  	}
	public set term (value: string | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): string | null {
    	return this.getPropertyValue("term");    	
  	}
	public set address (value: string | null) {
    	this.setPropertyValue(value, "address");    	
  	}
  	
  	public get address(): string | null {
    	return this.getPropertyValue("address");    	
  	}
	public set institution (value: number | null) {
    	this.setPropertyValue(value, "institution");    	
  	}
  	
  	public get institution(): number | null {
    	return this.getPropertyValue("institution");    	
  	}
	
}