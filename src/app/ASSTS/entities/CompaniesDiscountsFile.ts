
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CompaniesDiscountsFile  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"errorDesc"	,
					"documentValue"	,
					"companyComments"	,
					"approved"	,
					"debitAll"	,
					"companyId"	,
					"approvedId"	,
					"companyStatusOk"	,
					"fee"	,
					"client"	,
					"operation"	,
					"sequential"	,
					"batchId"	,
					"companyStatusId"	,
					"documentType"	,
					"dateExpirationDiscounts"	,
					"clientName"	,
					"debit"	,
					"errorId"	
			];			
			super(undefined,props);
		}   	    
	}
	public set errorDesc (value: string | null) {
    	this.setPropertyValue(value, "errorDesc");    	
  	}
  	
  	public get errorDesc(): string | null {
    	return this.getPropertyValue("errorDesc");    	
  	}
	public set documentValue (value: string | null) {
    	this.setPropertyValue(value, "documentValue");    	
  	}
  	
  	public get documentValue(): string | null {
    	return this.getPropertyValue("documentValue");    	
  	}
	public set companyComments (value: string | null) {
    	this.setPropertyValue(value, "companyComments");    	
  	}
  	
  	public get companyComments(): string | null {
    	return this.getPropertyValue("companyComments");    	
  	}
	public set approved (value: boolean | null) {
    	this.setPropertyValue(value, "approved");    	
  	}
  	
  	public get approved(): boolean | null {
    	return this.getPropertyValue("approved");    	
  	}
	public set debitAll (value: number | null) {
    	this.setPropertyValue(value, "debitAll");    	
  	}
  	
  	public get debitAll(): number | null {
    	return this.getPropertyValue("debitAll");    	
  	}
	public set companyId (value: string | null) {
    	this.setPropertyValue(value, "companyId");    	
  	}
  	
  	public get companyId(): string | null {
    	return this.getPropertyValue("companyId");    	
  	}
	public set approvedId (value: number | null) {
    	this.setPropertyValue(value, "approvedId");    	
  	}
  	
  	public get approvedId(): number | null {
    	return this.getPropertyValue("approvedId");    	
  	}
	public set companyStatusOk (value: string | null) {
    	this.setPropertyValue(value, "companyStatusOk");    	
  	}
  	
  	public get companyStatusOk(): string | null {
    	return this.getPropertyValue("companyStatusOk");    	
  	}
	public set fee (value: number | null) {
    	this.setPropertyValue(value, "fee");    	
  	}
  	
  	public get fee(): number | null {
    	return this.getPropertyValue("fee");    	
  	}
	public set client (value: number | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): number | null {
    	return this.getPropertyValue("client");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set batchId (value: number | null) {
    	this.setPropertyValue(value, "batchId");    	
  	}
  	
  	public get batchId(): number | null {
    	return this.getPropertyValue("batchId");    	
  	}
	public set companyStatusId (value: number | null) {
    	this.setPropertyValue(value, "companyStatusId");    	
  	}
  	
  	public get companyStatusId(): number | null {
    	return this.getPropertyValue("companyStatusId");    	
  	}
	public set documentType (value: string | null) {
    	this.setPropertyValue(value, "documentType");    	
  	}
  	
  	public get documentType(): string | null {
    	return this.getPropertyValue("documentType");    	
  	}
	public set dateExpirationDiscounts (value: Date | null) {
    	this.setPropertyValue(value, "dateExpirationDiscounts");    	
  	}
  	
  	public get dateExpirationDiscounts(): Date | null {
    	return this.getPropertyValue("dateExpirationDiscounts");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set debit (value: number | null) {
    	this.setPropertyValue(value, "debit");    	
  	}
  	
  	public get debit(): number | null {
    	return this.getPropertyValue("debit");    	
  	}
	public set errorId (value: number | null) {
    	this.setPropertyValue(value, "errorId");    	
  	}
  	
  	public get errorId(): number | null {
    	return this.getPropertyValue("errorId");    	
  	}
	
}