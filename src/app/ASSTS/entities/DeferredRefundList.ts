
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DeferredRefundList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"value"	,
					"item"	,
					"ingress"	
			];			
			super(undefined,props);
		}   	    
	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set ingress (value: number | null) {
    	this.setPropertyValue(value, "ingress");    	
  	}
  	
  	public get ingress(): number | null {
    	return this.getPropertyValue("ingress");    	
  	}
	
}