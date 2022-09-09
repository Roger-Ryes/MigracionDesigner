
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Catalog3Items  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"code"	,
					"producto"	,
					"value1"	,
					"value2"	
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
	public set producto (value: string | null) {
    	this.setPropertyValue(value, "producto");    	
  	}
  	
  	public get producto(): string | null {
    	return this.getPropertyValue("producto");    	
  	}
	public set value1 (value: number | null) {
    	this.setPropertyValue(value, "value1");    	
  	}
  	
  	public get value1(): number | null {
    	return this.getPropertyValue("value1");    	
  	}
	public set value2 (value: string | null) {
    	this.setPropertyValue(value, "value2");    	
  	}
  	
  	public get value2(): string | null {
    	return this.getPropertyValue("value2");    	
  	}
	
}