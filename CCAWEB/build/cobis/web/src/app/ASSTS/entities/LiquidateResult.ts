
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LiquidateResult  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"sumTotal"	
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
	
}