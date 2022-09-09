
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanSaleDetailList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"errorDescription"	,
					"error"	,
					"dateSale"	,
					"sequential"	,
					"state"	,
					"secOperation"	,
					"operation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set errorDescription (value: string | null) {
    	this.setPropertyValue(value, "errorDescription");    	
  	}
  	
  	public get errorDescription(): string | null {
    	return this.getPropertyValue("errorDescription");    	
  	}
	public set error (value: string | null) {
    	this.setPropertyValue(value, "error");    	
  	}
  	
  	public get error(): string | null {
    	return this.getPropertyValue("error");    	
  	}
	public set dateSale (value: Date | null) {
    	this.setPropertyValue(value, "dateSale");    	
  	}
  	
  	public get dateSale(): Date | null {
    	return this.getPropertyValue("dateSale");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set secOperation (value: number | null) {
    	this.setPropertyValue(value, "secOperation");    	
  	}
  	
  	public get secOperation(): number | null {
    	return this.getPropertyValue("secOperation");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	
}