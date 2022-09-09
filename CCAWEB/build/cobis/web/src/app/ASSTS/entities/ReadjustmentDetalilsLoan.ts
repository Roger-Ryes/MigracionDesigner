
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ReadjustmentDetalilsLoan  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"concepto"	,
					"referencial"	,
					"signo"	,
					"factor"	,
					"porcentaje"	
			];			
			super(undefined,props);
		}   	    
	}
	public set concepto (value: string | null) {
    	this.setPropertyValue(value, "concepto");    	
  	}
  	
  	public get concepto(): string | null {
    	return this.getPropertyValue("concepto");    	
  	}
	public set referencial (value: string | null) {
    	this.setPropertyValue(value, "referencial");    	
  	}
  	
  	public get referencial(): string | null {
    	return this.getPropertyValue("referencial");    	
  	}
	public set signo (value: string | null) {
    	this.setPropertyValue(value, "signo");    	
  	}
  	
  	public get signo(): string | null {
    	return this.getPropertyValue("signo");    	
  	}
	public set factor (value: number | null) {
    	this.setPropertyValue(value, "factor");    	
  	}
  	
  	public get factor(): number | null {
    	return this.getPropertyValue("factor");    	
  	}
	public set porcentaje (value: number | null) {
    	this.setPropertyValue(value, "porcentaje");    	
  	}
  	
  	public get porcentaje(): number | null {
    	return this.getPropertyValue("porcentaje");    	
  	}
	
}