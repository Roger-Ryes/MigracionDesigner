
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Priorities  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"item"	,
					"priority"	
			];			
			super(undefined,props);
		}   	    
	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set priority (value: number | null) {
    	this.setPropertyValue(value, "priority");    	
  	}
  	
  	public get priority(): number | null {
    	return this.getPropertyValue("priority");    	
  	}
	
}