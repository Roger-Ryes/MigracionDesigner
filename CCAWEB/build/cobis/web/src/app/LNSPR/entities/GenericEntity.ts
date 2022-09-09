
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class GenericEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"flag"	,
					"renewal"	,
					"value1"	
			];			
			super(undefined,props);
		}   	    
	}
	public set flag (value: boolean | null) {
    	this.setPropertyValue(value, "flag");    	
  	}
  	
  	public get flag(): boolean | null {
    	return this.getPropertyValue("flag");    	
  	}
	public set renewal (value: string | null) {
    	this.setPropertyValue(value, "renewal");    	
  	}
  	
  	public get renewal(): string | null {
    	return this.getPropertyValue("renewal");    	
  	}
	public set value1 (value: string | null) {
    	this.setPropertyValue(value, "value1");    	
  	}
  	
  	public get value1(): string | null {
    	return this.getPropertyValue("value1");    	
  	}
	
}