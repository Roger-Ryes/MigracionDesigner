
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ValidationGroup  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"result"	
			];			
			super(undefined,props);
		}   	    
	}
	public set result (value: string | null) {
    	this.setPropertyValue(value, "result");    	
  	}
  	
  	public get result(): string | null {
    	return this.getPropertyValue("result");    	
  	}
	
}