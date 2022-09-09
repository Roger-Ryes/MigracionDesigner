
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class TypeRates  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"identifier"	,
					"ratePit"	,
					"clase"	,
					"description"	
			];			
			super(undefined,props);
		}   	    
	}
	public set identifier (value: string | null) {
    	this.setPropertyValue(value, "identifier");    	
  	}
  	
  	public get identifier(): string | null {
    	return this.getPropertyValue("identifier");    	
  	}
	public set ratePit (value: string | null) {
    	this.setPropertyValue(value, "ratePit");    	
  	}
  	
  	public get ratePit(): string | null {
    	return this.getPropertyValue("ratePit");    	
  	}
	public set clase (value: string | null) {
    	this.setPropertyValue(value, "clase");    	
  	}
  	
  	public get clase(): string | null {
    	return this.getPropertyValue("clase");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	
}