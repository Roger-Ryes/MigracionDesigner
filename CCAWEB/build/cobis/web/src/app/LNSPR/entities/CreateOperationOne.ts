
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CreateOperationOne  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"value2"	,
					"value1"	
			];			
			super(undefined,props);
		}   	    
	}
	public set value2 (value: string | null) {
    	this.setPropertyValue(value, "value2");    	
  	}
  	
  	public get value2(): string | null {
    	return this.getPropertyValue("value2");    	
  	}
	public set value1 (value: string | null) {
    	this.setPropertyValue(value, "value1");    	
  	}
  	
  	public get value1(): string | null {
    	return this.getPropertyValue("value1");    	
  	}
	
}