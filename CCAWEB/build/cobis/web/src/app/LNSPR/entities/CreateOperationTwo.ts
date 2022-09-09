
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CreateOperationTwo  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"value1"	
			];			
			super(undefined,props);
		}   	    
	}
	public set value1 (value: string | null) {
    	this.setPropertyValue(value, "value1");    	
  	}
  	
  	public get value1(): string | null {
    	return this.getPropertyValue("value1");    	
  	}
	
}