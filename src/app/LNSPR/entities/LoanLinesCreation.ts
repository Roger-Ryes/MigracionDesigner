
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanLinesCreation  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"startDate"	,
					"observations"	,
					"ubication"	,
					"available"	,
					"rotary"	,
					"sector"	,
					"customerGroup"	,
					"daysNumber"	,
					"office"	,
					"estado"	,
					"official"	,
					"used"	,
					"dueDate"	,
					"nature"	,
					"tramitNumber"	,
					"coin"	,
					"customer"	,
					"customerName"	,
					"amount"	,
					"lineCode"	,
					"searchType"	,
					"sequential"	
			];			
			super(undefined,props);
		}   	    
	}
	public set startDate (value: Date | null) {
    	this.setPropertyValue(value, "startDate");    	
  	}
  	
  	public get startDate(): Date | null {
    	return this.getPropertyValue("startDate");    	
  	}
	public set observations (value: string | null) {
    	this.setPropertyValue(value, "observations");    	
  	}
  	
  	public get observations(): string | null {
    	return this.getPropertyValue("observations");    	
  	}
	public set ubication (value: string | null) {
    	this.setPropertyValue(value, "ubication");    	
  	}
  	
  	public get ubication(): string | null {
    	return this.getPropertyValue("ubication");    	
  	}
	public set available (value: number | null) {
    	this.setPropertyValue(value, "available");    	
  	}
  	
  	public get available(): number | null {
    	return this.getPropertyValue("available");    	
  	}
	public set rotary (value: string | null) {
    	this.setPropertyValue(value, "rotary");    	
  	}
  	
  	public get rotary(): string | null {
    	return this.getPropertyValue("rotary");    	
  	}
	public set sector (value: string | null) {
    	this.setPropertyValue(value, "sector");    	
  	}
  	
  	public get sector(): string | null {
    	return this.getPropertyValue("sector");    	
  	}
	public set customerGroup (value: string | null) {
    	this.setPropertyValue(value, "customerGroup");    	
  	}
  	
  	public get customerGroup(): string | null {
    	return this.getPropertyValue("customerGroup");    	
  	}
	public set daysNumber (value: number | null) {
    	this.setPropertyValue(value, "daysNumber");    	
  	}
  	
  	public get daysNumber(): number | null {
    	return this.getPropertyValue("daysNumber");    	
  	}
	public set office (value: string | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): string | null {
    	return this.getPropertyValue("office");    	
  	}
	public set estado (value: string | null) {
    	this.setPropertyValue(value, "estado");    	
  	}
  	
  	public get estado(): string | null {
    	return this.getPropertyValue("estado");    	
  	}
	public set official (value: string | null) {
    	this.setPropertyValue(value, "official");    	
  	}
  	
  	public get official(): string | null {
    	return this.getPropertyValue("official");    	
  	}
	public set used (value: number | null) {
    	this.setPropertyValue(value, "used");    	
  	}
  	
  	public get used(): number | null {
    	return this.getPropertyValue("used");    	
  	}
	public set dueDate (value: Date | null) {
    	this.setPropertyValue(value, "dueDate");    	
  	}
  	
  	public get dueDate(): Date | null {
    	return this.getPropertyValue("dueDate");    	
  	}
	public set nature (value: string | null) {
    	this.setPropertyValue(value, "nature");    	
  	}
  	
  	public get nature(): string | null {
    	return this.getPropertyValue("nature");    	
  	}
	public set tramitNumber (value: number | null) {
    	this.setPropertyValue(value, "tramitNumber");    	
  	}
  	
  	public get tramitNumber(): number | null {
    	return this.getPropertyValue("tramitNumber");    	
  	}
	public set coin (value: number | null) {
    	this.setPropertyValue(value, "coin");    	
  	}
  	
  	public get coin(): number | null {
    	return this.getPropertyValue("coin");    	
  	}
	public set customer (value: string | null) {
    	this.setPropertyValue(value, "customer");    	
  	}
  	
  	public get customer(): string | null {
    	return this.getPropertyValue("customer");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set lineCode (value: string | null) {
    	this.setPropertyValue(value, "lineCode");    	
  	}
  	
  	public get lineCode(): string | null {
    	return this.getPropertyValue("lineCode");    	
  	}
	public set searchType (value: string | null) {
    	this.setPropertyValue(value, "searchType");    	
  	}
  	
  	public get searchType(): string | null {
    	return this.getPropertyValue("searchType");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	
}