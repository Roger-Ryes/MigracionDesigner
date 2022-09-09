
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class QuoteDetails  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"description"	,
					"expired"	,
					"active"	,
					"inactive"	,
					"total"	
			];			
			super(undefined,props);
		}   	    
	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set expired (value: number | null) {
    	this.setPropertyValue(value, "expired");    	
  	}
  	
  	public get expired(): number | null {
    	return this.getPropertyValue("expired");    	
  	}
	public set active (value: number | null) {
    	this.setPropertyValue(value, "active");    	
  	}
  	
  	public get active(): number | null {
    	return this.getPropertyValue("active");    	
  	}
	public set inactive (value: number | null) {
    	this.setPropertyValue(value, "inactive");    	
  	}
  	
  	public get inactive(): number | null {
    	return this.getPropertyValue("inactive");    	
  	}
	public set total (value: number | null) {
    	this.setPropertyValue(value, "total");    	
  	}
  	
  	public get total(): number | null {
    	return this.getPropertyValue("total");    	
  	}
	
}