
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RestructuringFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"codClient"	,
					"nameClient"	
			];			
			super(undefined,props);
		}   	    
	}
	public set codClient (value: number | null) {
    	this.setPropertyValue(value, "codClient");    	
  	}
  	
  	public get codClient(): number | null {
    	return this.getPropertyValue("codClient");    	
  	}
	public set nameClient (value: string | null) {
    	this.setPropertyValue(value, "nameClient");    	
  	}
  	
  	public get nameClient(): string | null {
    	return this.getPropertyValue("nameClient");    	
  	}
	
}