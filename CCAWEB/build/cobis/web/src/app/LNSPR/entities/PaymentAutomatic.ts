
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PaymentAutomatic  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientRole"	,
					"paymentMethod"	,
					"account"	,
					"bankId"	,
					"clientName"	,
					"accountOld"	,
					"operation"	,
					"institutionName"	,
					"clientOld"	,
					"institutionOld"	,
					"percentage"	,
					"paymentName"	,
					"comments"	,
					"client"	,
					"institution"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientRole (value: string | null) {
    	this.setPropertyValue(value, "clientRole");    	
  	}
  	
  	public get clientRole(): string | null {
    	return this.getPropertyValue("clientRole");    	
  	}
	public set paymentMethod (value: string | null) {
    	this.setPropertyValue(value, "paymentMethod");    	
  	}
  	
  	public get paymentMethod(): string | null {
    	return this.getPropertyValue("paymentMethod");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set bankId (value: string | null) {
    	this.setPropertyValue(value, "bankId");    	
  	}
  	
  	public get bankId(): string | null {
    	return this.getPropertyValue("bankId");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set accountOld (value: string | null) {
    	this.setPropertyValue(value, "accountOld");    	
  	}
  	
  	public get accountOld(): string | null {
    	return this.getPropertyValue("accountOld");    	
  	}
	public set operation (value: number | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): number | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set institutionName (value: string | null) {
    	this.setPropertyValue(value, "institutionName");    	
  	}
  	
  	public get institutionName(): string | null {
    	return this.getPropertyValue("institutionName");    	
  	}
	public set clientOld (value: number | null) {
    	this.setPropertyValue(value, "clientOld");    	
  	}
  	
  	public get clientOld(): number | null {
    	return this.getPropertyValue("clientOld");    	
  	}
	public set institutionOld (value: string | null) {
    	this.setPropertyValue(value, "institutionOld");    	
  	}
  	
  	public get institutionOld(): string | null {
    	return this.getPropertyValue("institutionOld");    	
  	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	public set paymentName (value: string | null) {
    	this.setPropertyValue(value, "paymentName");    	
  	}
  	
  	public get paymentName(): string | null {
    	return this.getPropertyValue("paymentName");    	
  	}
	public set comments (value: string | null) {
    	this.setPropertyValue(value, "comments");    	
  	}
  	
  	public get comments(): string | null {
    	return this.getPropertyValue("comments");    	
  	}
	public set client (value: number | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): number | null {
    	return this.getPropertyValue("client");    	
  	}
	public set institution (value: string | null) {
    	this.setPropertyValue(value, "institution");    	
  	}
  	
  	public get institution(): string | null {
    	return this.getPropertyValue("institution");    	
  	}
	
}