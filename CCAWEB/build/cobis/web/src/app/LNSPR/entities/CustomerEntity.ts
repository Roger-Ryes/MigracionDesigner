
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CustomerEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"customerId"	,
					"customerName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set customerId (value: string | null) {
    	this.setPropertyValue(value, "customerId");    	
  	}
  	
  	public get customerId(): string | null {
    	return this.getPropertyValue("customerId");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	
}