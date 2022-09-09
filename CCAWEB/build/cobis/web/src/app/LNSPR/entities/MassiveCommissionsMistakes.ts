
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class MassiveCommissionsMistakes  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"mistake"	,
					"operation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set mistake (value: string | null) {
    	this.setPropertyValue(value, "mistake");    	
  	}
  	
  	public get mistake(): string | null {
    	return this.getPropertyValue("mistake");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	
}