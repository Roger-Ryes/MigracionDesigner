
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Rates  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"referenceValue"	,
					"typePoints"	,
					"valueDeafult"	,
					"numberDecimals"	,
					"lockedMin"	,
					"rateType"	,
					"valueMax"	,
					"portfolioClass"	,
					"valueMin"	,
					"lockedDefault"	,
					"value"	,
					"clase"	,
					"lockedMax"	,
					"signDefault"	,
					"signMax"	,
					"signMin"	
			];			
			super(undefined,props);
		}   	    
	}
	public set referenceValue (value: string | null) {
    	this.setPropertyValue(value, "referenceValue");    	
  	}
  	
  	public get referenceValue(): string | null {
    	return this.getPropertyValue("referenceValue");    	
  	}
	public set typePoints (value: string | null) {
    	this.setPropertyValue(value, "typePoints");    	
  	}
  	
  	public get typePoints(): string | null {
    	return this.getPropertyValue("typePoints");    	
  	}
	public set valueDeafult (value: number | null) {
    	this.setPropertyValue(value, "valueDeafult");    	
  	}
  	
  	public get valueDeafult(): number | null {
    	return this.getPropertyValue("valueDeafult");    	
  	}
	public set numberDecimals (value: number | null) {
    	this.setPropertyValue(value, "numberDecimals");    	
  	}
  	
  	public get numberDecimals(): number | null {
    	return this.getPropertyValue("numberDecimals");    	
  	}
	public set lockedMin (value: number | null) {
    	this.setPropertyValue(value, "lockedMin");    	
  	}
  	
  	public get lockedMin(): number | null {
    	return this.getPropertyValue("lockedMin");    	
  	}
	public set rateType (value: string | null) {
    	this.setPropertyValue(value, "rateType");    	
  	}
  	
  	public get rateType(): string | null {
    	return this.getPropertyValue("rateType");    	
  	}
	public set valueMax (value: number | null) {
    	this.setPropertyValue(value, "valueMax");    	
  	}
  	
  	public get valueMax(): number | null {
    	return this.getPropertyValue("valueMax");    	
  	}
	public set portfolioClass (value: string | null) {
    	this.setPropertyValue(value, "portfolioClass");    	
  	}
  	
  	public get portfolioClass(): string | null {
    	return this.getPropertyValue("portfolioClass");    	
  	}
	public set valueMin (value: number | null) {
    	this.setPropertyValue(value, "valueMin");    	
  	}
  	
  	public get valueMin(): number | null {
    	return this.getPropertyValue("valueMin");    	
  	}
	public set lockedDefault (value: number | null) {
    	this.setPropertyValue(value, "lockedDefault");    	
  	}
  	
  	public get lockedDefault(): number | null {
    	return this.getPropertyValue("lockedDefault");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set clase (value: string | null) {
    	this.setPropertyValue(value, "clase");    	
  	}
  	
  	public get clase(): string | null {
    	return this.getPropertyValue("clase");    	
  	}
	public set lockedMax (value: number | null) {
    	this.setPropertyValue(value, "lockedMax");    	
  	}
  	
  	public get lockedMax(): number | null {
    	return this.getPropertyValue("lockedMax");    	
  	}
	public set signDefault (value: string | null) {
    	this.setPropertyValue(value, "signDefault");    	
  	}
  	
  	public get signDefault(): string | null {
    	return this.getPropertyValue("signDefault");    	
  	}
	public set signMax (value: string | null) {
    	this.setPropertyValue(value, "signMax");    	
  	}
  	
  	public get signMax(): string | null {
    	return this.getPropertyValue("signMax");    	
  	}
	public set signMin (value: string | null) {
    	this.setPropertyValue(value, "signMin");    	
  	}
  	
  	public get signMin(): string | null {
    	return this.getPropertyValue("signMin");    	
  	}
	
}