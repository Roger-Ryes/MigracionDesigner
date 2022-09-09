
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Fund  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amountSource"	,
					"incresedValue"	,
					"sponsorId"	,
					"fundName"	,
					"sourceType"	,
					"validityDate"	,
					"reservedValue"	,
					"statusCode"	,
					"availableBalance"	,
					"fundId"	,
					"usedValue"	,
					"newCustomerCredit"	
			];			
			super(undefined,props);
		}   	    
	}
	public set amountSource (value: number | null) {
    	this.setPropertyValue(value, "amountSource");    	
  	}
  	
  	public get amountSource(): number | null {
    	return this.getPropertyValue("amountSource");    	
  	}
	public set incresedValue (value: number | null) {
    	this.setPropertyValue(value, "incresedValue");    	
  	}
  	
  	public get incresedValue(): number | null {
    	return this.getPropertyValue("incresedValue");    	
  	}
	public set sponsorId (value: string | null) {
    	this.setPropertyValue(value, "sponsorId");    	
  	}
  	
  	public get sponsorId(): string | null {
    	return this.getPropertyValue("sponsorId");    	
  	}
	public set fundName (value: string | null) {
    	this.setPropertyValue(value, "fundName");    	
  	}
  	
  	public get fundName(): string | null {
    	return this.getPropertyValue("fundName");    	
  	}
	public set sourceType (value: string | null) {
    	this.setPropertyValue(value, "sourceType");    	
  	}
  	
  	public get sourceType(): string | null {
    	return this.getPropertyValue("sourceType");    	
  	}
	public set validityDate (value: Date | null) {
    	this.setPropertyValue(value, "validityDate");    	
  	}
  	
  	public get validityDate(): Date | null {
    	return this.getPropertyValue("validityDate");    	
  	}
	public set reservedValue (value: number | null) {
    	this.setPropertyValue(value, "reservedValue");    	
  	}
  	
  	public get reservedValue(): number | null {
    	return this.getPropertyValue("reservedValue");    	
  	}
	public set statusCode (value: string | null) {
    	this.setPropertyValue(value, "statusCode");    	
  	}
  	
  	public get statusCode(): string | null {
    	return this.getPropertyValue("statusCode");    	
  	}
	public set availableBalance (value: number | null) {
    	this.setPropertyValue(value, "availableBalance");    	
  	}
  	
  	public get availableBalance(): number | null {
    	return this.getPropertyValue("availableBalance");    	
  	}
	public set fundId (value: number | null) {
    	this.setPropertyValue(value, "fundId");    	
  	}
  	
  	public get fundId(): number | null {
    	return this.getPropertyValue("fundId");    	
  	}
	public set usedValue (value: number | null) {
    	this.setPropertyValue(value, "usedValue");    	
  	}
  	
  	public get usedValue(): number | null {
    	return this.getPropertyValue("usedValue");    	
  	}
	public set newCustomerCredit (value: number | null) {
    	this.setPropertyValue(value, "newCustomerCredit");    	
  	}
  	
  	public get newCustomerCredit(): number | null {
    	return this.getPropertyValue("newCustomerCredit");    	
  	}
	
}