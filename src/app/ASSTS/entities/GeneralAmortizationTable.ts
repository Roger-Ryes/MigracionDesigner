
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class GeneralAmortizationTable  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"banck"	,
					"mnemonic"	,
					"type"	
			];			
			super(undefined,props);
		}   	    
	}
	public set banck (value: string | null) {
    	this.setPropertyValue(value, "banck");    	
  	}
  	
  	public get banck(): string | null {
    	return this.getPropertyValue("banck");    	
  	}
	public set mnemonic (value: string | null) {
    	this.setPropertyValue(value, "mnemonic");    	
  	}
  	
  	public get mnemonic(): string | null {
    	return this.getPropertyValue("mnemonic");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	
}