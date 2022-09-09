
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Seguros  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientID"	,
					"type"	,
					"folio"	,
					"dateValidityIni"	,
					"group"	,
					"loanBankID"	,
					"loanID"	,
					"term"	,
					"typeID"	,
					"statusDesc"	,
					"amount"	,
					"dateValidityFin"	,
					"clientName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientID (value: number | null) {
    	this.setPropertyValue(value, "clientID");    	
  	}
  	
  	public get clientID(): number | null {
    	return this.getPropertyValue("clientID");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set folio (value: string | null) {
    	this.setPropertyValue(value, "folio");    	
  	}
  	
  	public get folio(): string | null {
    	return this.getPropertyValue("folio");    	
  	}
	public set dateValidityIni (value: Date | null) {
    	this.setPropertyValue(value, "dateValidityIni");    	
  	}
  	
  	public get dateValidityIni(): Date | null {
    	return this.getPropertyValue("dateValidityIni");    	
  	}
	public set group (value: number | null) {
    	this.setPropertyValue(value, "group");    	
  	}
  	
  	public get group(): number | null {
    	return this.getPropertyValue("group");    	
  	}
	public set loanBankID (value: string | null) {
    	this.setPropertyValue(value, "loanBankID");    	
  	}
  	
  	public get loanBankID(): string | null {
    	return this.getPropertyValue("loanBankID");    	
  	}
	public set loanID (value: number | null) {
    	this.setPropertyValue(value, "loanID");    	
  	}
  	
  	public get loanID(): number | null {
    	return this.getPropertyValue("loanID");    	
  	}
	public set term (value: number | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): number | null {
    	return this.getPropertyValue("term");    	
  	}
	public set typeID (value: string | null) {
    	this.setPropertyValue(value, "typeID");    	
  	}
  	
  	public get typeID(): string | null {
    	return this.getPropertyValue("typeID");    	
  	}
	public set statusDesc (value: string | null) {
    	this.setPropertyValue(value, "statusDesc");    	
  	}
  	
  	public get statusDesc(): string | null {
    	return this.getPropertyValue("statusDesc");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set dateValidityFin (value: Date | null) {
    	this.setPropertyValue(value, "dateValidityFin");    	
  	}
  	
  	public get dateValidityFin(): Date | null {
    	return this.getPropertyValue("dateValidityFin");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	
}