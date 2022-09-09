
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class TransactionLoan  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"transactionId"	,
					"secuential"	,
					"operation"	,
					"dateTran"	,
					"dateRef"	,
					"user"	,
					"status"	
			];			
			super(undefined,props);
		}   	    
	}
	public set transactionId (value: string | null) {
    	this.setPropertyValue(value, "transactionId");    	
  	}
  	
  	public get transactionId(): string | null {
    	return this.getPropertyValue("transactionId");    	
  	}
	public set secuential (value: number | null) {
    	this.setPropertyValue(value, "secuential");    	
  	}
  	
  	public get secuential(): number | null {
    	return this.getPropertyValue("secuential");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set dateTran (value: string | null) {
    	this.setPropertyValue(value, "dateTran");    	
  	}
  	
  	public get dateTran(): string | null {
    	return this.getPropertyValue("dateTran");    	
  	}
	public set dateRef (value: string | null) {
    	this.setPropertyValue(value, "dateRef");    	
  	}
  	
  	public get dateRef(): string | null {
    	return this.getPropertyValue("dateRef");    	
  	}
	public set user (value: string | null) {
    	this.setPropertyValue(value, "user");    	
  	}
  	
  	public get user(): string | null {
    	return this.getPropertyValue("user");    	
  	}
	public set status (value: string | null) {
    	this.setPropertyValue(value, "status");    	
  	}
  	
  	public get status(): string | null {
    	return this.getPropertyValue("status");    	
  	}
	
}