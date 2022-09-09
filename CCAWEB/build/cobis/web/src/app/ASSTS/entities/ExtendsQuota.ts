
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ExtendsQuota  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"extendsDate"	,
					"maximumDateExtended"	,
					"numberQuota"	,
					"expirationDate"	,
					"processDate"	
			];			
			super(undefined,props);
		}   	    
	}
	public set extendsDate (value: Date | null) {
    	this.setPropertyValue(value, "extendsDate");    	
  	}
  	
  	public get extendsDate(): Date | null {
    	return this.getPropertyValue("extendsDate");    	
  	}
	public set maximumDateExtended (value: Date | null) {
    	this.setPropertyValue(value, "maximumDateExtended");    	
  	}
  	
  	public get maximumDateExtended(): Date | null {
    	return this.getPropertyValue("maximumDateExtended");    	
  	}
	public set numberQuota (value: number | null) {
    	this.setPropertyValue(value, "numberQuota");    	
  	}
  	
  	public get numberQuota(): number | null {
    	return this.getPropertyValue("numberQuota");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set processDate (value: Date | null) {
    	this.setPropertyValue(value, "processDate");    	
  	}
  	
  	public get processDate(): Date | null {
    	return this.getPropertyValue("processDate");    	
  	}
	
}