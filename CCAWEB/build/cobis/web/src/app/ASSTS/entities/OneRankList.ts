
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OneRankList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"sequential"	,
					"date"	,
					"idRange"	,
					"rate"	,
					"minValue"	,
					"type"	,
					"value"	,
					"maxValue"	
			];			
			super(undefined,props);
		}   	    
	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set date (value: Date | null) {
    	this.setPropertyValue(value, "date");    	
  	}
  	
  	public get date(): Date | null {
    	return this.getPropertyValue("date");    	
  	}
	public set idRange (value: number | null) {
    	this.setPropertyValue(value, "idRange");    	
  	}
  	
  	public get idRange(): number | null {
    	return this.getPropertyValue("idRange");    	
  	}
	public set rate (value: number | null) {
    	this.setPropertyValue(value, "rate");    	
  	}
  	
  	public get rate(): number | null {
    	return this.getPropertyValue("rate");    	
  	}
	public set minValue (value: number | null) {
    	this.setPropertyValue(value, "minValue");    	
  	}
  	
  	public get minValue(): number | null {
    	return this.getPropertyValue("minValue");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set maxValue (value: number | null) {
    	this.setPropertyValue(value, "maxValue");    	
  	}
  	
  	public get maxValue(): number | null {
    	return this.getPropertyValue("maxValue");    	
  	}
	
}