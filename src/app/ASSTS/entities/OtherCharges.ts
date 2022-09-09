
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OtherCharges  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"sequential"	,
					"iniDiv"	,
					"divUp"	,
					"date"	,
					"concept"	,
					"value"	,
					"commentary"	,
					"categoryType"	,
					"valueApply"	,
					"reference"	,
					"valueMin"	,
					"valueMax"	,
					"baseCalculation"	,
					"balanceOp"	,
					"balanceDesemp"	,
					"rate"	,
					"decTapl"	,
					"range"	
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
	public set iniDiv (value: number | null) {
    	this.setPropertyValue(value, "iniDiv");    	
  	}
  	
  	public get iniDiv(): number | null {
    	return this.getPropertyValue("iniDiv");    	
  	}
	public set divUp (value: number | null) {
    	this.setPropertyValue(value, "divUp");    	
  	}
  	
  	public get divUp(): number | null {
    	return this.getPropertyValue("divUp");    	
  	}
	public set date (value: Date | null) {
    	this.setPropertyValue(value, "date");    	
  	}
  	
  	public get date(): Date | null {
    	return this.getPropertyValue("date");    	
  	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set commentary (value: string | null) {
    	this.setPropertyValue(value, "commentary");    	
  	}
  	
  	public get commentary(): string | null {
    	return this.getPropertyValue("commentary");    	
  	}
	public set categoryType (value: string | null) {
    	this.setPropertyValue(value, "categoryType");    	
  	}
  	
  	public get categoryType(): string | null {
    	return this.getPropertyValue("categoryType");    	
  	}
	public set valueApply (value: string | null) {
    	this.setPropertyValue(value, "valueApply");    	
  	}
  	
  	public get valueApply(): string | null {
    	return this.getPropertyValue("valueApply");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set valueMin (value: number | null) {
    	this.setPropertyValue(value, "valueMin");    	
  	}
  	
  	public get valueMin(): number | null {
    	return this.getPropertyValue("valueMin");    	
  	}
	public set valueMax (value: number | null) {
    	this.setPropertyValue(value, "valueMax");    	
  	}
  	
  	public get valueMax(): number | null {
    	return this.getPropertyValue("valueMax");    	
  	}
	public set baseCalculation (value: number | null) {
    	this.setPropertyValue(value, "baseCalculation");    	
  	}
  	
  	public get baseCalculation(): number | null {
    	return this.getPropertyValue("baseCalculation");    	
  	}
	public set balanceOp (value: string | null) {
    	this.setPropertyValue(value, "balanceOp");    	
  	}
  	
  	public get balanceOp(): string | null {
    	return this.getPropertyValue("balanceOp");    	
  	}
	public set balanceDesemp (value: string | null) {
    	this.setPropertyValue(value, "balanceDesemp");    	
  	}
  	
  	public get balanceDesemp(): string | null {
    	return this.getPropertyValue("balanceDesemp");    	
  	}
	public set rate (value: number | null) {
    	this.setPropertyValue(value, "rate");    	
  	}
  	
  	public get rate(): number | null {
    	return this.getPropertyValue("rate");    	
  	}
	public set decTapl (value: number | null) {
    	this.setPropertyValue(value, "decTapl");    	
  	}
  	
  	public get decTapl(): number | null {
    	return this.getPropertyValue("decTapl");    	
  	}
	public set range (value: string | null) {
    	this.setPropertyValue(value, "range");    	
  	}
  	
  	public get range(): string | null {
    	return this.getPropertyValue("range");    	
  	}
	
}