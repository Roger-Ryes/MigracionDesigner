
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanItemsValues  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"description"	,
					"defaultValue"	,
					"defaultSign"	,
					"type"	,
					"referenceValue"	,
					"itemClass"	,
					"reference"	,
					"descriptionV"	
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
	public set defaultValue (value: number | null) {
    	this.setPropertyValue(value, "defaultValue");    	
  	}
  	
  	public get defaultValue(): number | null {
    	return this.getPropertyValue("defaultValue");    	
  	}
	public set defaultSign (value: string | null) {
    	this.setPropertyValue(value, "defaultSign");    	
  	}
  	
  	public get defaultSign(): string | null {
    	return this.getPropertyValue("defaultSign");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set referenceValue (value: number | null) {
    	this.setPropertyValue(value, "referenceValue");    	
  	}
  	
  	public get referenceValue(): number | null {
    	return this.getPropertyValue("referenceValue");    	
  	}
	public set itemClass (value: string | null) {
    	this.setPropertyValue(value, "itemClass");    	
  	}
  	
  	public get itemClass(): string | null {
    	return this.getPropertyValue("itemClass");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set descriptionV (value: string | null) {
    	this.setPropertyValue(value, "descriptionV");    	
  	}
  	
  	public get descriptionV(): string | null {
    	return this.getPropertyValue("descriptionV");    	
  	}
	
}