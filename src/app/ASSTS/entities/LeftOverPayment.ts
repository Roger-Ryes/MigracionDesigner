
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LeftOverPayment  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"currencyType"	,
					"paymentType"	,
					"reference"	,
					"note"	,
					"numCheck"	,
					"bank"	,
					"value"	,
					"leftoverQuotationValue"	
			];			
			super(undefined,props);
		}   	    
	}
	public set currencyType (value: number | null) {
    	this.setPropertyValue(value, "currencyType");    	
  	}
  	
  	public get currencyType(): number | null {
    	return this.getPropertyValue("currencyType");    	
  	}
	public set paymentType (value: string | null) {
    	this.setPropertyValue(value, "paymentType");    	
  	}
  	
  	public get paymentType(): string | null {
    	return this.getPropertyValue("paymentType");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set note (value: string | null) {
    	this.setPropertyValue(value, "note");    	
  	}
  	
  	public get note(): string | null {
    	return this.getPropertyValue("note");    	
  	}
	public set numCheck (value: string | null) {
    	this.setPropertyValue(value, "numCheck");    	
  	}
  	
  	public get numCheck(): string | null {
    	return this.getPropertyValue("numCheck");    	
  	}
	public set bank (value: string | null) {
    	this.setPropertyValue(value, "bank");    	
  	}
  	
  	public get bank(): string | null {
    	return this.getPropertyValue("bank");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set leftoverQuotationValue (value: number | null) {
    	this.setPropertyValue(value, "leftoverQuotationValue");    	
  	}
  	
  	public get leftoverQuotationValue(): number | null {
    	return this.getPropertyValue("leftoverQuotationValue");    	
  	}
	
}