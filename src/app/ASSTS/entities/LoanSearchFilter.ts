
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanSearchFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"category"	,
					"group"	,
					"codClient"	,
					"avanceSearch"	,
					"isGroup"	,
					"isDisbursment"	,
					"operation"	,
					"migratedOper"	,
					"officer"	,
					"numIdentification"	,
					"codCurrency"	,
					"disbursementDate"	,
					"type"	,
					"numProcedures"	,
					"office"	,
					"status"	
			];			
			super(undefined,props);
		}   	    
	}
	public set category (value: number | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): number | null {
    	return this.getPropertyValue("category");    	
  	}
	public set group (value: string | null) {
    	this.setPropertyValue(value, "group");    	
  	}
  	
  	public get group(): string | null {
    	return this.getPropertyValue("group");    	
  	}
	public set codClient (value: number | null) {
    	this.setPropertyValue(value, "codClient");    	
  	}
  	
  	public get codClient(): number | null {
    	return this.getPropertyValue("codClient");    	
  	}
	public set avanceSearch (value: boolean | null) {
    	this.setPropertyValue(value, "avanceSearch");    	
  	}
  	
  	public get avanceSearch(): boolean | null {
    	return this.getPropertyValue("avanceSearch");    	
  	}
	public set isGroup (value: boolean | null) {
    	this.setPropertyValue(value, "isGroup");    	
  	}
  	
  	public get isGroup(): boolean | null {
    	return this.getPropertyValue("isGroup");    	
  	}
	public set isDisbursment (value: string | null) {
    	this.setPropertyValue(value, "isDisbursment");    	
  	}
  	
  	public get isDisbursment(): string | null {
    	return this.getPropertyValue("isDisbursment");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set migratedOper (value: string | null) {
    	this.setPropertyValue(value, "migratedOper");    	
  	}
  	
  	public get migratedOper(): string | null {
    	return this.getPropertyValue("migratedOper");    	
  	}
	public set officer (value: number | null) {
    	this.setPropertyValue(value, "officer");    	
  	}
  	
  	public get officer(): number | null {
    	return this.getPropertyValue("officer");    	
  	}
	public set numIdentification (value: string | null) {
    	this.setPropertyValue(value, "numIdentification");    	
  	}
  	
  	public get numIdentification(): string | null {
    	return this.getPropertyValue("numIdentification");    	
  	}
	public set codCurrency (value: number | null) {
    	this.setPropertyValue(value, "codCurrency");    	
  	}
  	
  	public get codCurrency(): number | null {
    	return this.getPropertyValue("codCurrency");    	
  	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set numProcedures (value: string | null) {
    	this.setPropertyValue(value, "numProcedures");    	
  	}
  	
  	public get numProcedures(): string | null {
    	return this.getPropertyValue("numProcedures");    	
  	}
	public set office (value: number | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): number | null {
    	return this.getPropertyValue("office");    	
  	}
	public set status (value: string | null) {
    	this.setPropertyValue(value, "status");    	
  	}
  	
  	public get status(): string | null {
    	return this.getPropertyValue("status");    	
  	}
	
}