
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class GeneralParameters  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"codDolar"	,
					"factor"	,
					"cotizDolar"	,
					"localCurrency"	
			];			
			super(undefined,props);
		}   	    
	}
	public set codDolar (value: number | null) {
    	this.setPropertyValue(value, "codDolar");    	
  	}
  	
  	public get codDolar(): number | null {
    	return this.getPropertyValue("codDolar");    	
  	}
	public set factor (value: number | null) {
    	this.setPropertyValue(value, "factor");    	
  	}
  	
  	public get factor(): number | null {
    	return this.getPropertyValue("factor");    	
  	}
	public set cotizDolar (value: number | null) {
    	this.setPropertyValue(value, "cotizDolar");    	
  	}
  	
  	public get cotizDolar(): number | null {
    	return this.getPropertyValue("cotizDolar");    	
  	}
	public set localCurrency (value: number | null) {
    	this.setPropertyValue(value, "localCurrency");    	
  	}
  	
  	public get localCurrency(): number | null {
    	return this.getPropertyValue("localCurrency");    	
  	}
	
}