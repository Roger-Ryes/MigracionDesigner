
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Entity1  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"Attribute2"	,
					"modeOp"	
			];			
			super(undefined,props);
		}   	    
	}
	public set Attribute2 (value: string | null) {
    	this.setPropertyValue(value, "Attribute2");    	
  	}
  	
  	public get Attribute2(): string | null {
    	return this.getPropertyValue("Attribute2");    	
  	}
	public set modeOp (value: string | null) {
    	this.setPropertyValue(value, "modeOp");    	
  	}
  	
  	public get modeOp(): string | null {
    	return this.getPropertyValue("modeOp");    	
  	}
	
}