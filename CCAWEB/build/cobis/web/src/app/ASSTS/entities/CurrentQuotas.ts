
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CurrentQuotas  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"quota"	,
					"startDate"	,
					"endDate"	,
					"capital"	,
					"interest"	,
					"others"	,
					"total"	,
					"state"	
			];			
			super(undefined,props);
		}   	    
	}
	public set quota (value: number | null) {
    	this.setPropertyValue(value, "quota");    	
  	}
  	
  	public get quota(): number | null {
    	return this.getPropertyValue("quota");    	
  	}
	public set startDate (value: string | null) {
    	this.setPropertyValue(value, "startDate");    	
  	}
  	
  	public get startDate(): string | null {
    	return this.getPropertyValue("startDate");    	
  	}
	public set endDate (value: Date | null) {
    	this.setPropertyValue(value, "endDate");    	
  	}
  	
  	public get endDate(): Date | null {
    	return this.getPropertyValue("endDate");    	
  	}
	public set capital (value: number | null) {
    	this.setPropertyValue(value, "capital");    	
  	}
  	
  	public get capital(): number | null {
    	return this.getPropertyValue("capital");    	
  	}
	public set interest (value: number | null) {
    	this.setPropertyValue(value, "interest");    	
  	}
  	
  	public get interest(): number | null {
    	return this.getPropertyValue("interest");    	
  	}
	public set others (value: number | null) {
    	this.setPropertyValue(value, "others");    	
  	}
  	
  	public get others(): number | null {
    	return this.getPropertyValue("others");    	
  	}
	public set total (value: number | null) {
    	this.setPropertyValue(value, "total");    	
  	}
  	
  	public get total(): number | null {
    	return this.getPropertyValue("total");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	
}