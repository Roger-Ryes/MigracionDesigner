
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ValidationProcedure  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"procedure"	
			];			
			super(undefined,props);
		}   	    
	}
	public set procedure (value: number | null) {
    	this.setPropertyValue(value, "procedure");    	
  	}
  	
  	public get procedure(): number | null {
    	return this.getPropertyValue("procedure");    	
  	}
	
}