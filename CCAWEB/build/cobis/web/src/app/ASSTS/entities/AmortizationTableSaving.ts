
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationTableSaving  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"groupName"	,
					"periodicityPayment"	,
					"symbol"	,
					"frequency"	,
					"rode"	,
					"startDate"	,
					"termFrequency"	,
					"group"	,
					"interestRate"	,
					"branchOffice"	,
					"numCredit"	,
					"amountPay"	,
					"cycle"	,
					"numAccount"	,
					"reca"	,
					"operationType"	,
					"promoter"	
			];			
			super(undefined,props);
		}   	    
	}
	public set groupName (value: string | null) {
    	this.setPropertyValue(value, "groupName");    	
  	}
  	
  	public get groupName(): string | null {
    	return this.getPropertyValue("groupName");    	
  	}
	public set periodicityPayment (value: string | null) {
    	this.setPropertyValue(value, "periodicityPayment");    	
  	}
  	
  	public get periodicityPayment(): string | null {
    	return this.getPropertyValue("periodicityPayment");    	
  	}
	public set symbol (value: string | null) {
    	this.setPropertyValue(value, "symbol");    	
  	}
  	
  	public get symbol(): string | null {
    	return this.getPropertyValue("symbol");    	
  	}
	public set frequency (value: string | null) {
    	this.setPropertyValue(value, "frequency");    	
  	}
  	
  	public get frequency(): string | null {
    	return this.getPropertyValue("frequency");    	
  	}
	public set rode (value: number | null) {
    	this.setPropertyValue(value, "rode");    	
  	}
  	
  	public get rode(): number | null {
    	return this.getPropertyValue("rode");    	
  	}
	public set startDate (value: Date | null) {
    	this.setPropertyValue(value, "startDate");    	
  	}
  	
  	public get startDate(): Date | null {
    	return this.getPropertyValue("startDate");    	
  	}
	public set termFrequency (value: string | null) {
    	this.setPropertyValue(value, "termFrequency");    	
  	}
  	
  	public get termFrequency(): string | null {
    	return this.getPropertyValue("termFrequency");    	
  	}
	public set group (value: number | null) {
    	this.setPropertyValue(value, "group");    	
  	}
  	
  	public get group(): number | null {
    	return this.getPropertyValue("group");    	
  	}
	public set interestRate (value: number | null) {
    	this.setPropertyValue(value, "interestRate");    	
  	}
  	
  	public get interestRate(): number | null {
    	return this.getPropertyValue("interestRate");    	
  	}
	public set branchOffice (value: string | null) {
    	this.setPropertyValue(value, "branchOffice");    	
  	}
  	
  	public get branchOffice(): string | null {
    	return this.getPropertyValue("branchOffice");    	
  	}
	public set numCredit (value: string | null) {
    	this.setPropertyValue(value, "numCredit");    	
  	}
  	
  	public get numCredit(): string | null {
    	return this.getPropertyValue("numCredit");    	
  	}
	public set amountPay (value: number | null) {
    	this.setPropertyValue(value, "amountPay");    	
  	}
  	
  	public get amountPay(): number | null {
    	return this.getPropertyValue("amountPay");    	
  	}
	public set cycle (value: number | null) {
    	this.setPropertyValue(value, "cycle");    	
  	}
  	
  	public get cycle(): number | null {
    	return this.getPropertyValue("cycle");    	
  	}
	public set numAccount (value: string | null) {
    	this.setPropertyValue(value, "numAccount");    	
  	}
  	
  	public get numAccount(): string | null {
    	return this.getPropertyValue("numAccount");    	
  	}
	public set reca (value: string | null) {
    	this.setPropertyValue(value, "reca");    	
  	}
  	
  	public get reca(): string | null {
    	return this.getPropertyValue("reca");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set promoter (value: string | null) {
    	this.setPropertyValue(value, "promoter");    	
  	}
  	
  	public get promoter(): string | null {
    	return this.getPropertyValue("promoter");    	
  	}
	
}