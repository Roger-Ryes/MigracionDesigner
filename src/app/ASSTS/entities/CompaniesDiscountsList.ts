
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CompaniesDiscountsList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"company"	,
					"payAll"	,
					"clientName"	,
					"percentage"	,
					"operation"	,
					"statusDiscounts"	,
					"dateCreateBatch"	,
					"client"	,
					"commentCompany"	,
					"sequentialBatch"	,
					"description"	,
					"sequentialDiscounts"	,
					"statusDiscountsName"	,
					"debitAll"	,
					"documentType"	,
					"commentClient"	,
					"dateMoveDiscounts"	,
					"dateInitDiscounts"	,
					"dateExpirationDiscounts"	,
					"clientRole"	,
					"bankId"	,
					"documentValue"	,
					"companyName"	,
					"dateMoveBatch"	,
					"debit"	,
					"fee"	,
					"statusBatch"	
			];			
			super(undefined,props);
		}   	    
	}
	public set company (value: number | null) {
    	this.setPropertyValue(value, "company");    	
  	}
  	
  	public get company(): number | null {
    	return this.getPropertyValue("company");    	
  	}
	public set payAll (value: number | null) {
    	this.setPropertyValue(value, "payAll");    	
  	}
  	
  	public get payAll(): number | null {
    	return this.getPropertyValue("payAll");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	public set operation (value: number | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): number | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set statusDiscounts (value: number | null) {
    	this.setPropertyValue(value, "statusDiscounts");    	
  	}
  	
  	public get statusDiscounts(): number | null {
    	return this.getPropertyValue("statusDiscounts");    	
  	}
	public set dateCreateBatch (value: Date | null) {
    	this.setPropertyValue(value, "dateCreateBatch");    	
  	}
  	
  	public get dateCreateBatch(): Date | null {
    	return this.getPropertyValue("dateCreateBatch");    	
  	}
	public set client (value: number | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): number | null {
    	return this.getPropertyValue("client");    	
  	}
	public set commentCompany (value: string | null) {
    	this.setPropertyValue(value, "commentCompany");    	
  	}
  	
  	public get commentCompany(): string | null {
    	return this.getPropertyValue("commentCompany");    	
  	}
	public set sequentialBatch (value: number | null) {
    	this.setPropertyValue(value, "sequentialBatch");    	
  	}
  	
  	public get sequentialBatch(): number | null {
    	return this.getPropertyValue("sequentialBatch");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set sequentialDiscounts (value: number | null) {
    	this.setPropertyValue(value, "sequentialDiscounts");    	
  	}
  	
  	public get sequentialDiscounts(): number | null {
    	return this.getPropertyValue("sequentialDiscounts");    	
  	}
	public set statusDiscountsName (value: string | null) {
    	this.setPropertyValue(value, "statusDiscountsName");    	
  	}
  	
  	public get statusDiscountsName(): string | null {
    	return this.getPropertyValue("statusDiscountsName");    	
  	}
	public set debitAll (value: number | null) {
    	this.setPropertyValue(value, "debitAll");    	
  	}
  	
  	public get debitAll(): number | null {
    	return this.getPropertyValue("debitAll");    	
  	}
	public set documentType (value: string | null) {
    	this.setPropertyValue(value, "documentType");    	
  	}
  	
  	public get documentType(): string | null {
    	return this.getPropertyValue("documentType");    	
  	}
	public set commentClient (value: string | null) {
    	this.setPropertyValue(value, "commentClient");    	
  	}
  	
  	public get commentClient(): string | null {
    	return this.getPropertyValue("commentClient");    	
  	}
	public set dateMoveDiscounts (value: Date | null) {
    	this.setPropertyValue(value, "dateMoveDiscounts");    	
  	}
  	
  	public get dateMoveDiscounts(): Date | null {
    	return this.getPropertyValue("dateMoveDiscounts");    	
  	}
	public set dateInitDiscounts (value: Date | null) {
    	this.setPropertyValue(value, "dateInitDiscounts");    	
  	}
  	
  	public get dateInitDiscounts(): Date | null {
    	return this.getPropertyValue("dateInitDiscounts");    	
  	}
	public set dateExpirationDiscounts (value: Date | null) {
    	this.setPropertyValue(value, "dateExpirationDiscounts");    	
  	}
  	
  	public get dateExpirationDiscounts(): Date | null {
    	return this.getPropertyValue("dateExpirationDiscounts");    	
  	}
	public set clientRole (value: string | null) {
    	this.setPropertyValue(value, "clientRole");    	
  	}
  	
  	public get clientRole(): string | null {
    	return this.getPropertyValue("clientRole");    	
  	}
	public set bankId (value: string | null) {
    	this.setPropertyValue(value, "bankId");    	
  	}
  	
  	public get bankId(): string | null {
    	return this.getPropertyValue("bankId");    	
  	}
	public set documentValue (value: string | null) {
    	this.setPropertyValue(value, "documentValue");    	
  	}
  	
  	public get documentValue(): string | null {
    	return this.getPropertyValue("documentValue");    	
  	}
	public set companyName (value: string | null) {
    	this.setPropertyValue(value, "companyName");    	
  	}
  	
  	public get companyName(): string | null {
    	return this.getPropertyValue("companyName");    	
  	}
	public set dateMoveBatch (value: Date | null) {
    	this.setPropertyValue(value, "dateMoveBatch");    	
  	}
  	
  	public get dateMoveBatch(): Date | null {
    	return this.getPropertyValue("dateMoveBatch");    	
  	}
	public set debit (value: number | null) {
    	this.setPropertyValue(value, "debit");    	
  	}
  	
  	public get debit(): number | null {
    	return this.getPropertyValue("debit");    	
  	}
	public set fee (value: number | null) {
    	this.setPropertyValue(value, "fee");    	
  	}
  	
  	public get fee(): number | null {
    	return this.getPropertyValue("fee");    	
  	}
	public set statusBatch (value: number | null) {
    	this.setPropertyValue(value, "statusBatch");    	
  	}
  	
  	public get statusBatch(): number | null {
    	return this.getPropertyValue("statusBatch");    	
  	}
	
}