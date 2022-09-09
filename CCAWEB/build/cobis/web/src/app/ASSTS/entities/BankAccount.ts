
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class BankAccount  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"account"	,
					"customerCode"	,
					"accountName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set customerCode (value: number | null) {
    	this.setPropertyValue(value, "customerCode");    	
  	}
  	
  	public get customerCode(): number | null {
    	return this.getPropertyValue("customerCode");    	
  	}
	public set accountName (value: string | null) {
    	this.setPropertyValue(value, "accountName");    	
  	}
  	
  	public get accountName(): string | null {
    	return this.getPropertyValue("accountName");    	
  	}
	
}