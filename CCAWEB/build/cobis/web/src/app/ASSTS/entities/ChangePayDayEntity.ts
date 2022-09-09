
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ChangePayDayEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"newPayDay"	,
					"operation"	,
					"reason"	,
					"currentPayDay"	,
					"client"	,
					"keepQuota"	
			];			
			super(undefined,props);
		}   	    
	}
	public set newPayDay (value: number | null) {
    	this.setPropertyValue(value, "newPayDay");    	
  	}
  	
  	public get newPayDay(): number | null {
    	return this.getPropertyValue("newPayDay");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set reason (value: string | null) {
    	this.setPropertyValue(value, "reason");    	
  	}
  	
  	public get reason(): string | null {
    	return this.getPropertyValue("reason");    	
  	}
	public set currentPayDay (value: number | null) {
    	this.setPropertyValue(value, "currentPayDay");    	
  	}
  	
  	public get currentPayDay(): number | null {
    	return this.getPropertyValue("currentPayDay");    	
  	}
	public set client (value: string | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): string | null {
    	return this.getPropertyValue("client");    	
  	}
	public set keepQuota (value: string | null) {
    	this.setPropertyValue(value, "keepQuota");    	
  	}
  	
  	public get keepQuota(): string | null {
    	return this.getPropertyValue("keepQuota");    	
  	}
	
}