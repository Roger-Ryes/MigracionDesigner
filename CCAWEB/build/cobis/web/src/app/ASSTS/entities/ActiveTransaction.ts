
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ActiveTransaction  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"secuential"	,
					"user"	,
					"operation"	,
					"transaction"	,
					"observation"	,
					"state"	,
					"dateTransaction"	,
					"dateReverd"	
			];			
			super(undefined,props);
		}   	    
	}
	public set secuential (value: number | null) {
    	this.setPropertyValue(value, "secuential");    	
  	}
  	
  	public get secuential(): number | null {
    	return this.getPropertyValue("secuential");    	
  	}
	public set user (value: string | null) {
    	this.setPropertyValue(value, "user");    	
  	}
  	
  	public get user(): string | null {
    	return this.getPropertyValue("user");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set transaction (value: string | null) {
    	this.setPropertyValue(value, "transaction");    	
  	}
  	
  	public get transaction(): string | null {
    	return this.getPropertyValue("transaction");    	
  	}
	public set observation (value: string | null) {
    	this.setPropertyValue(value, "observation");    	
  	}
  	
  	public get observation(): string | null {
    	return this.getPropertyValue("observation");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set dateTransaction (value: string | null) {
    	this.setPropertyValue(value, "dateTransaction");    	
  	}
  	
  	public get dateTransaction(): string | null {
    	return this.getPropertyValue("dateTransaction");    	
  	}
	public set dateReverd (value: string | null) {
    	this.setPropertyValue(value, "dateReverd");    	
  	}
  	
  	public get dateReverd(): string | null {
    	return this.getPropertyValue("dateReverd");    	
  	}
	
}