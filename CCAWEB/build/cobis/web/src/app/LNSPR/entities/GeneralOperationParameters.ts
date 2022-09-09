
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class GeneralOperationParameters  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"paymentType"	,
					"paymentMethod"	,
					"cashPayments"	,
					"payInterest"	,
					"additionalPayments"	,
					"paymentForm"	,
					"readjustmentPeriod"	,
					"account"	,
					"readjustable"	,
					"fullFee"	,
					"returnValue"	,
					"restructuring"	,
					"renewal"	
			];			
			super(undefined,props);
		}   	    
	}
	public set paymentType (value: string | null) {
    	this.setPropertyValue(value, "paymentType");    	
  	}
  	
  	public get paymentType(): string | null {
    	return this.getPropertyValue("paymentType");    	
  	}
	public set paymentMethod (value: string | null) {
    	this.setPropertyValue(value, "paymentMethod");    	
  	}
  	
  	public get paymentMethod(): string | null {
    	return this.getPropertyValue("paymentMethod");    	
  	}
	public set cashPayments (value: string | null) {
    	this.setPropertyValue(value, "cashPayments");    	
  	}
  	
  	public get cashPayments(): string | null {
    	return this.getPropertyValue("cashPayments");    	
  	}
	public set payInterest (value: string | null) {
    	this.setPropertyValue(value, "payInterest");    	
  	}
  	
  	public get payInterest(): string | null {
    	return this.getPropertyValue("payInterest");    	
  	}
	public set additionalPayments (value: string | null) {
    	this.setPropertyValue(value, "additionalPayments");    	
  	}
  	
  	public get additionalPayments(): string | null {
    	return this.getPropertyValue("additionalPayments");    	
  	}
	public set paymentForm (value: string | null) {
    	this.setPropertyValue(value, "paymentForm");    	
  	}
  	
  	public get paymentForm(): string | null {
    	return this.getPropertyValue("paymentForm");    	
  	}
	public set readjustmentPeriod (value: number | null) {
    	this.setPropertyValue(value, "readjustmentPeriod");    	
  	}
  	
  	public get readjustmentPeriod(): number | null {
    	return this.getPropertyValue("readjustmentPeriod");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set readjustable (value: string | null) {
    	this.setPropertyValue(value, "readjustable");    	
  	}
  	
  	public get readjustable(): string | null {
    	return this.getPropertyValue("readjustable");    	
  	}
	public set fullFee (value: string | null) {
    	this.setPropertyValue(value, "fullFee");    	
  	}
  	
  	public get fullFee(): string | null {
    	return this.getPropertyValue("fullFee");    	
  	}
	public set returnValue (value: string | null) {
    	this.setPropertyValue(value, "returnValue");    	
  	}
  	
  	public get returnValue(): string | null {
    	return this.getPropertyValue("returnValue");    	
  	}
	public set restructuring (value: string | null) {
    	this.setPropertyValue(value, "restructuring");    	
  	}
  	
  	public get restructuring(): string | null {
    	return this.getPropertyValue("restructuring");    	
  	}
	public set renewal (value: string | null) {
    	this.setPropertyValue(value, "renewal");    	
  	}
  	
  	public get renewal(): string | null {
    	return this.getPropertyValue("renewal");    	
  	}
	
}