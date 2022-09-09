
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DeferredItemsDetailList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"acumulated"	,
					"item"	,
					"earn"	,
					"balance"	
			];			
			super(undefined,props);
		}   	    
	}
	public set acumulated (value: number | null) {
    	this.setPropertyValue(value, "acumulated");    	
  	}
  	
  	public get acumulated(): number | null {
    	return this.getPropertyValue("acumulated");    	
  	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set earn (value: number | null) {
    	this.setPropertyValue(value, "earn");    	
  	}
  	
  	public get earn(): number | null {
    	return this.getPropertyValue("earn");    	
  	}
	public set balance (value: number | null) {
    	this.setPropertyValue(value, "balance");    	
  	}
  	
  	public get balance(): number | null {
    	return this.getPropertyValue("balance");    	
  	}
	
}