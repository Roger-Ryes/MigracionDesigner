
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ItemEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"type"	,
					"item"	,
					"grace"	,
					"factorReadjustment"	,
					"value"	,
					"priority"	,
					"wayPayment"	,
					"symbol"	,
					"symbolReadjustment"	,
					"operation"	,
					"calculationBase"	,
					"referential"	,
					"financialBurden"	,
					"percent"	,
					"factor"	,
					"finance"	,
					"referentialReadjustment"	
			];			
			super(undefined,props);
		}   	    
	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set grace (value: number | null) {
    	this.setPropertyValue(value, "grace");    	
  	}
  	
  	public get grace(): number | null {
    	return this.getPropertyValue("grace");    	
  	}
	public set factorReadjustment (value: number | null) {
    	this.setPropertyValue(value, "factorReadjustment");    	
  	}
  	
  	public get factorReadjustment(): number | null {
    	return this.getPropertyValue("factorReadjustment");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set priority (value: number | null) {
    	this.setPropertyValue(value, "priority");    	
  	}
  	
  	public get priority(): number | null {
    	return this.getPropertyValue("priority");    	
  	}
	public set wayPayment (value: string | null) {
    	this.setPropertyValue(value, "wayPayment");    	
  	}
  	
  	public get wayPayment(): string | null {
    	return this.getPropertyValue("wayPayment");    	
  	}
	public set symbol (value: string | null) {
    	this.setPropertyValue(value, "symbol");    	
  	}
  	
  	public get symbol(): string | null {
    	return this.getPropertyValue("symbol");    	
  	}
	public set symbolReadjustment (value: string | null) {
    	this.setPropertyValue(value, "symbolReadjustment");    	
  	}
  	
  	public get symbolReadjustment(): string | null {
    	return this.getPropertyValue("symbolReadjustment");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set calculationBase (value: string | null) {
    	this.setPropertyValue(value, "calculationBase");    	
  	}
  	
  	public get calculationBase(): string | null {
    	return this.getPropertyValue("calculationBase");    	
  	}
	public set referential (value: string | null) {
    	this.setPropertyValue(value, "referential");    	
  	}
  	
  	public get referential(): string | null {
    	return this.getPropertyValue("referential");    	
  	}
	public set financialBurden (value: string | null) {
    	this.setPropertyValue(value, "financialBurden");    	
  	}
  	
  	public get financialBurden(): string | null {
    	return this.getPropertyValue("financialBurden");    	
  	}
	public set percent (value: string | null) {
    	this.setPropertyValue(value, "percent");    	
  	}
  	
  	public get percent(): string | null {
    	return this.getPropertyValue("percent");    	
  	}
	public set factor (value: number | null) {
    	this.setPropertyValue(value, "factor");    	
  	}
  	
  	public get factor(): number | null {
    	return this.getPropertyValue("factor");    	
  	}
	public set finance (value: string | null) {
    	this.setPropertyValue(value, "finance");    	
  	}
  	
  	public get finance(): string | null {
    	return this.getPropertyValue("finance");    	
  	}
	public set referentialReadjustment (value: string | null) {
    	this.setPropertyValue(value, "referentialReadjustment");    	
  	}
  	
  	public get referentialReadjustment(): string | null {
    	return this.getPropertyValue("referentialReadjustment");    	
  	}
	
}