
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class TwoRangesList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"date"	,
					"sequential"	,
					"maxValue2"	,
					"minValue1"	,
					"variable"	,
					"maxValue1"	,
					"idRange"	,
					"minValue2"	,
					"rate"	
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
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set maxValue2 (value: number | null) {
    	this.setPropertyValue(value, "maxValue2");    	
  	}
  	
  	public get maxValue2(): number | null {
    	return this.getPropertyValue("maxValue2");    	
  	}
	public set minValue1 (value: number | null) {
    	this.setPropertyValue(value, "minValue1");    	
  	}
  	
  	public get minValue1(): number | null {
    	return this.getPropertyValue("minValue1");    	
  	}
	public set variable (value: string | null) {
    	this.setPropertyValue(value, "variable");    	
  	}
  	
  	public get variable(): string | null {
    	return this.getPropertyValue("variable");    	
  	}
	public set maxValue1 (value: number | null) {
    	this.setPropertyValue(value, "maxValue1");    	
  	}
  	
  	public get maxValue1(): number | null {
    	return this.getPropertyValue("maxValue1");    	
  	}
	public set idRange (value: number | null) {
    	this.setPropertyValue(value, "idRange");    	
  	}
  	
  	public get idRange(): number | null {
    	return this.getPropertyValue("idRange");    	
  	}
	public set minValue2 (value: number | null) {
    	this.setPropertyValue(value, "minValue2");    	
  	}
  	
  	public get minValue2(): number | null {
    	return this.getPropertyValue("minValue2");    	
  	}
	public set rate (value: number | null) {
    	this.setPropertyValue(value, "rate");    	
  	}
  	
  	public get rate(): number | null {
    	return this.getPropertyValue("rate");    	
  	}
	
}