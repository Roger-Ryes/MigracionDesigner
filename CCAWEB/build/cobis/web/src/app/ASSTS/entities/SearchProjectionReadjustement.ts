
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class SearchProjectionReadjustement  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"percentage"	,
					"dateReadjustment"	
			];			
			super(undefined,props);
		}   	    
	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	public set dateReadjustment (value: Date | null) {
    	this.setPropertyValue(value, "dateReadjustment");    	
  	}
  	
  	public get dateReadjustment(): Date | null {
    	return this.getPropertyValue("dateReadjustment");    	
  	}
	
}