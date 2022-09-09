
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class UserContext  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"userFilial"	
			];			
			super(undefined,props);
		}   	    
	}
	public set userFilial (value: string | null) {
    	this.setPropertyValue(value, "userFilial");    	
  	}
  	
  	public get userFilial(): string | null {
    	return this.getPropertyValue("userFilial");    	
  	}
	
}