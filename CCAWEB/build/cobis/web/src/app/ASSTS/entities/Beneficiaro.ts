
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Beneficiaro  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"birthDate"	,
					"clientID"	,
					"clientName"	,
					"relationShip"	,
					"postalCode"	,
					"loanID"	,
					"sequence"	,
					"cedID"	,
					"relationShipID"	,
					"telephone"	,
					"product"	,
					"address"	,
					"loanBankID"	,
					"percentage"	,
					"typeID"	
			];			
			super(undefined,props);
		}   	    
	}
	public set birthDate (value: Date | null) {
    	this.setPropertyValue(value, "birthDate");    	
  	}
  	
  	public get birthDate(): Date | null {
    	return this.getPropertyValue("birthDate");    	
  	}
	public set clientID (value: number | null) {
    	this.setPropertyValue(value, "clientID");    	
  	}
  	
  	public get clientID(): number | null {
    	return this.getPropertyValue("clientID");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set relationShip (value: string | null) {
    	this.setPropertyValue(value, "relationShip");    	
  	}
  	
  	public get relationShip(): string | null {
    	return this.getPropertyValue("relationShip");    	
  	}
	public set postalCode (value: string | null) {
    	this.setPropertyValue(value, "postalCode");    	
  	}
  	
  	public get postalCode(): string | null {
    	return this.getPropertyValue("postalCode");    	
  	}
	public set loanID (value: number | null) {
    	this.setPropertyValue(value, "loanID");    	
  	}
  	
  	public get loanID(): number | null {
    	return this.getPropertyValue("loanID");    	
  	}
	public set sequence (value: number | null) {
    	this.setPropertyValue(value, "sequence");    	
  	}
  	
  	public get sequence(): number | null {
    	return this.getPropertyValue("sequence");    	
  	}
	public set cedID (value: string | null) {
    	this.setPropertyValue(value, "cedID");    	
  	}
  	
  	public get cedID(): string | null {
    	return this.getPropertyValue("cedID");    	
  	}
	public set relationShipID (value: string | null) {
    	this.setPropertyValue(value, "relationShipID");    	
  	}
  	
  	public get relationShipID(): string | null {
    	return this.getPropertyValue("relationShipID");    	
  	}
	public set telephone (value: string | null) {
    	this.setPropertyValue(value, "telephone");    	
  	}
  	
  	public get telephone(): string | null {
    	return this.getPropertyValue("telephone");    	
  	}
	public set product (value: number | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): number | null {
    	return this.getPropertyValue("product");    	
  	}
	public set address (value: string | null) {
    	this.setPropertyValue(value, "address");    	
  	}
  	
  	public get address(): string | null {
    	return this.getPropertyValue("address");    	
  	}
	public set loanBankID (value: string | null) {
    	this.setPropertyValue(value, "loanBankID");    	
  	}
  	
  	public get loanBankID(): string | null {
    	return this.getPropertyValue("loanBankID");    	
  	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	public set typeID (value: string | null) {
    	this.setPropertyValue(value, "typeID");    	
  	}
  	
  	public get typeID(): string | null {
    	return this.getPropertyValue("typeID");    	
  	}
	
}