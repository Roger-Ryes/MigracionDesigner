
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ListTransactionQuery  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"numberLoan"	,
					"state"	,
					"transaction"	,
					"transactionRef"	,
					"transactionDate"	,
					"sequential"	,
					"codCliente"	,
					"user"	,
					"secOpe"	
			];			
			super(undefined,props);
		}   	    
	}
	public set numberLoan (value: string | null) {
    	this.setPropertyValue(value, "numberLoan");    	
  	}
  	
  	public get numberLoan(): string | null {
    	return this.getPropertyValue("numberLoan");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set transaction (value: string | null) {
    	this.setPropertyValue(value, "transaction");    	
  	}
  	
  	public get transaction(): string | null {
    	return this.getPropertyValue("transaction");    	
  	}
	public set transactionRef (value: Date | null) {
    	this.setPropertyValue(value, "transactionRef");    	
  	}
  	
  	public get transactionRef(): Date | null {
    	return this.getPropertyValue("transactionRef");    	
  	}
	public set transactionDate (value: Date | null) {
    	this.setPropertyValue(value, "transactionDate");    	
  	}
  	
  	public get transactionDate(): Date | null {
    	return this.getPropertyValue("transactionDate");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set codCliente (value: string | null) {
    	this.setPropertyValue(value, "codCliente");    	
  	}
  	
  	public get codCliente(): string | null {
    	return this.getPropertyValue("codCliente");    	
  	}
	public set user (value: string | null) {
    	this.setPropertyValue(value, "user");    	
  	}
  	
  	public get user(): string | null {
    	return this.getPropertyValue("user");    	
  	}
	public set secOpe (value: number | null) {
    	this.setPropertyValue(value, "secOpe");    	
  	}
  	
  	public get secOpe(): number | null {
    	return this.getPropertyValue("secOpe");    	
  	}
	
}