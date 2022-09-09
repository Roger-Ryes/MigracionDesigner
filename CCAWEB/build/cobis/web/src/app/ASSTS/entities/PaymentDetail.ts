
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PaymentDetail  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"fee"	,
					"description"	,
					"statusDescription"	,
					"account"	,
					"moneyDescription"	,
					"amount"	,
					"amountMn"	,
					"sequential"	
			];			
			super(undefined,props);
		}   	    
	}
	public set fee (value: number | null) {
    	this.setPropertyValue(value, "fee");    	
  	}
  	
  	public get fee(): number | null {
    	return this.getPropertyValue("fee");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set statusDescription (value: string | null) {
    	this.setPropertyValue(value, "statusDescription");    	
  	}
  	
  	public get statusDescription(): string | null {
    	return this.getPropertyValue("statusDescription");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set moneyDescription (value: string | null) {
    	this.setPropertyValue(value, "moneyDescription");    	
  	}
  	
  	public get moneyDescription(): string | null {
    	return this.getPropertyValue("moneyDescription");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set amountMn (value: number | null) {
    	this.setPropertyValue(value, "amountMn");    	
  	}
  	
  	public get amountMn(): number | null {
    	return this.getPropertyValue("amountMn");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	
}