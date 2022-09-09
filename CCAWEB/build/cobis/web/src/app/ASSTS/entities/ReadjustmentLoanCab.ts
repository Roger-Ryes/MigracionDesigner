
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ReadjustmentLoanCab  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"date"	,
					"mantCuota"	,
					"secuencial"	,
					"desagio"	
			];			
			super(undefined,props);
		}   	    
	}
	public set date (value: Date | null) {
    	this.setPropertyValue(value, "date");    	
  	}
  	
  	public get date(): Date | null {
    	return this.getPropertyValue("date");    	
  	}
	public set mantCuota (value: string | null) {
    	this.setPropertyValue(value, "mantCuota");    	
  	}
  	
  	public get mantCuota(): string | null {
    	return this.getPropertyValue("mantCuota");    	
  	}
	public set secuencial (value: number | null) {
    	this.setPropertyValue(value, "secuencial");    	
  	}
  	
  	public get secuencial(): number | null {
    	return this.getPropertyValue("secuencial");    	
  	}
	public set desagio (value: string | null) {
    	this.setPropertyValue(value, "desagio");    	
  	}
  	
  	public get desagio(): string | null {
    	return this.getPropertyValue("desagio");    	
  	}
	
}