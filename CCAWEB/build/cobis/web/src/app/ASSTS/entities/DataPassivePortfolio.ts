
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DataPassivePortfolio  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"contractNumber"	,
					"financingTerm"	,
					"authDate"	,
					"debtType"	,
					"termType"	,
					"subFinancing"	,
					"financingLine"	,
					"facilityNumber"	,
					"authNumber"	,
					"creditorType"	
			];			
			super(undefined,props);
		}   	    
	}
	public set contractNumber (value: string | null) {
    	this.setPropertyValue(value, "contractNumber");    	
  	}
  	
  	public get contractNumber(): string | null {
    	return this.getPropertyValue("contractNumber");    	
  	}
	public set financingTerm (value: number | null) {
    	this.setPropertyValue(value, "financingTerm");    	
  	}
  	
  	public get financingTerm(): number | null {
    	return this.getPropertyValue("financingTerm");    	
  	}
	public set authDate (value: Date | null) {
    	this.setPropertyValue(value, "authDate");    	
  	}
  	
  	public get authDate(): Date | null {
    	return this.getPropertyValue("authDate");    	
  	}
	public set debtType (value: string | null) {
    	this.setPropertyValue(value, "debtType");    	
  	}
  	
  	public get debtType(): string | null {
    	return this.getPropertyValue("debtType");    	
  	}
	public set termType (value: string | null) {
    	this.setPropertyValue(value, "termType");    	
  	}
  	
  	public get termType(): string | null {
    	return this.getPropertyValue("termType");    	
  	}
	public set subFinancing (value: string | null) {
    	this.setPropertyValue(value, "subFinancing");    	
  	}
  	
  	public get subFinancing(): string | null {
    	return this.getPropertyValue("subFinancing");    	
  	}
	public set financingLine (value: string | null) {
    	this.setPropertyValue(value, "financingLine");    	
  	}
  	
  	public get financingLine(): string | null {
    	return this.getPropertyValue("financingLine");    	
  	}
	public set facilityNumber (value: string | null) {
    	this.setPropertyValue(value, "facilityNumber");    	
  	}
  	
  	public get facilityNumber(): string | null {
    	return this.getPropertyValue("facilityNumber");    	
  	}
	public set authNumber (value: string | null) {
    	this.setPropertyValue(value, "authNumber");    	
  	}
  	
  	public get authNumber(): string | null {
    	return this.getPropertyValue("authNumber");    	
  	}
	public set creditorType (value: string | null) {
    	this.setPropertyValue(value, "creditorType");    	
  	}
  	
  	public get creditorType(): string | null {
    	return this.getPropertyValue("creditorType");    	
  	}
	
}