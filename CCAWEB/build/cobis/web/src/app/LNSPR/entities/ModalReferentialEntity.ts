
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ModalReferentialEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"description"	,
					"secuential"	,
					"typeValue"	,
					"value"	
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
	public set secuential (value: string | null) {
    	this.setPropertyValue(value, "secuential");    	
  	}
  	
  	public get secuential(): string | null {
    	return this.getPropertyValue("secuential");    	
  	}
	public set typeValue (value: string | null) {
    	this.setPropertyValue(value, "typeValue");    	
  	}
  	
  	public get typeValue(): string | null {
    	return this.getPropertyValue("typeValue");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	
}