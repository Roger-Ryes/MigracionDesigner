
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ProductLineList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"code"	,
					"description"	
			];			
			super(undefined,props);
		}   	    
	}
	public set code (value: string | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): string | null {
    	return this.getPropertyValue("code");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	
}