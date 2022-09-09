
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DetailTransactionQuery  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"money"	,
					"account"	,
					"state"	,
					"beneficiary"	,
					"amountMN"	,
					"price"	,
					"amount"	,
					"codValor"	,
					"dividend"	,
					"affectation"	,
					"entry"	
			];			
			super(undefined,props);
		}   	    
	}
	public set money (value: number | null) {
    	this.setPropertyValue(value, "money");    	
  	}
  	
  	public get money(): number | null {
    	return this.getPropertyValue("money");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set state (value: number | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): number | null {
    	return this.getPropertyValue("state");    	
  	}
	public set beneficiary (value: string | null) {
    	this.setPropertyValue(value, "beneficiary");    	
  	}
  	
  	public get beneficiary(): string | null {
    	return this.getPropertyValue("beneficiary");    	
  	}
	public set amountMN (value: number | null) {
    	this.setPropertyValue(value, "amountMN");    	
  	}
  	
  	public get amountMN(): number | null {
    	return this.getPropertyValue("amountMN");    	
  	}
	public set price (value: string | null) {
    	this.setPropertyValue(value, "price");    	
  	}
  	
  	public get price(): string | null {
    	return this.getPropertyValue("price");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set codValor (value: string | null) {
    	this.setPropertyValue(value, "codValor");    	
  	}
  	
  	public get codValor(): string | null {
    	return this.getPropertyValue("codValor");    	
  	}
	public set dividend (value: number | null) {
    	this.setPropertyValue(value, "dividend");    	
  	}
  	
  	public get dividend(): number | null {
    	return this.getPropertyValue("dividend");    	
  	}
	public set affectation (value: string | null) {
    	this.setPropertyValue(value, "affectation");    	
  	}
  	
  	public get affectation(): string | null {
    	return this.getPropertyValue("affectation");    	
  	}
	public set entry (value: string | null) {
    	this.setPropertyValue(value, "entry");    	
  	}
  	
  	public get entry(): string | null {
    	return this.getPropertyValue("entry");    	
  	}
	
}