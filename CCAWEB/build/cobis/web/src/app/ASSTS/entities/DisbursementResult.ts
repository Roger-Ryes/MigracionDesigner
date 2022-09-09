
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DisbursementResult  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"sumTotal"	,
					"difference"	
			];			
			super(undefined,props);
		}   	    
	}
	public set sumTotal (value: number | null) {
    	this.setPropertyValue(value, "sumTotal");    	
  	}
  	
  	public get sumTotal(): number | null {
    	return this.getPropertyValue("sumTotal");    	
  	}
	public set difference (value: number | null) {
    	this.setPropertyValue(value, "difference");    	
  	}
  	
  	public get difference(): number | null {
    	return this.getPropertyValue("difference");    	
  	}
	
}