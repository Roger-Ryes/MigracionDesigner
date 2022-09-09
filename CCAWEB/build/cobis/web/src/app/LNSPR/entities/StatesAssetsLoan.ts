
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class StatesAssetsLoan  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"code"	,
					"descStatus"	
			];			
			super(undefined,props);
		}   	    
	}
	public set code (value: string | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): string | null {
    	return this.getPropertyValue("code");    	
  	}
	public set descStatus (value: string | null) {
    	this.setPropertyValue(value, "descStatus");    	
  	}
  	
  	public get descStatus(): string | null {
    	return this.getPropertyValue("descStatus");    	
  	}
	
}