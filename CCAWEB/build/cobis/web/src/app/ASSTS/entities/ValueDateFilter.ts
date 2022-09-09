
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ValueDateFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"valueDate"	,
					"operationType"	,
					"observation"	,
					"indexTrn"	,
					"option"	
			];			
			super(undefined,props);
		}   	    
	}
	public set valueDate (value: Date | null) {
    	this.setPropertyValue(value, "valueDate");    	
  	}
  	
  	public get valueDate(): Date | null {
    	return this.getPropertyValue("valueDate");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set observation (value: string | null) {
    	this.setPropertyValue(value, "observation");    	
  	}
  	
  	public get observation(): string | null {
    	return this.getPropertyValue("observation");    	
  	}
	public set indexTrn (value: number | null) {
    	this.setPropertyValue(value, "indexTrn");    	
  	}
  	
  	public get indexTrn(): number | null {
    	return this.getPropertyValue("indexTrn");    	
  	}
	public set option (value: string | null) {
    	this.setPropertyValue(value, "option");    	
  	}
  	
  	public get option(): string | null {
    	return this.getPropertyValue("option");    	
  	}
	
}