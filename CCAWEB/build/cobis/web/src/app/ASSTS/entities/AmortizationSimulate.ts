
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationSimulate  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"porroga"	,
					"items6"	,
					"days"	,
					"balanceCap"	,
					"items8"	,
					"items3"	,
					"items1"	,
					"items12"	,
					"items7"	,
					"items15"	,
					"items11"	,
					"items13"	,
					"items9"	,
					"items4"	,
					"items5"	,
					"items14"	,
					"items10"	,
					"state"	,
					"expiration"	,
					"items2"	,
					"shareValue"	,
					"share"	
			];			
			super(undefined,props);
		}   	    
	}
	public set porroga (value: string | null) {
    	this.setPropertyValue(value, "porroga");    	
  	}
  	
  	public get porroga(): string | null {
    	return this.getPropertyValue("porroga");    	
  	}
	public set items6 (value: number | null) {
    	this.setPropertyValue(value, "items6");    	
  	}
  	
  	public get items6(): number | null {
    	return this.getPropertyValue("items6");    	
  	}
	public set days (value: number | null) {
    	this.setPropertyValue(value, "days");    	
  	}
  	
  	public get days(): number | null {
    	return this.getPropertyValue("days");    	
  	}
	public set balanceCap (value: number | null) {
    	this.setPropertyValue(value, "balanceCap");    	
  	}
  	
  	public get balanceCap(): number | null {
    	return this.getPropertyValue("balanceCap");    	
  	}
	public set items8 (value: number | null) {
    	this.setPropertyValue(value, "items8");    	
  	}
  	
  	public get items8(): number | null {
    	return this.getPropertyValue("items8");    	
  	}
	public set items3 (value: number | null) {
    	this.setPropertyValue(value, "items3");    	
  	}
  	
  	public get items3(): number | null {
    	return this.getPropertyValue("items3");    	
  	}
	public set items1 (value: number | null) {
    	this.setPropertyValue(value, "items1");    	
  	}
  	
  	public get items1(): number | null {
    	return this.getPropertyValue("items1");    	
  	}
	public set items12 (value: number | null) {
    	this.setPropertyValue(value, "items12");    	
  	}
  	
  	public get items12(): number | null {
    	return this.getPropertyValue("items12");    	
  	}
	public set items7 (value: number | null) {
    	this.setPropertyValue(value, "items7");    	
  	}
  	
  	public get items7(): number | null {
    	return this.getPropertyValue("items7");    	
  	}
	public set items15 (value: number | null) {
    	this.setPropertyValue(value, "items15");    	
  	}
  	
  	public get items15(): number | null {
    	return this.getPropertyValue("items15");    	
  	}
	public set items11 (value: number | null) {
    	this.setPropertyValue(value, "items11");    	
  	}
  	
  	public get items11(): number | null {
    	return this.getPropertyValue("items11");    	
  	}
	public set items13 (value: number | null) {
    	this.setPropertyValue(value, "items13");    	
  	}
  	
  	public get items13(): number | null {
    	return this.getPropertyValue("items13");    	
  	}
	public set items9 (value: number | null) {
    	this.setPropertyValue(value, "items9");    	
  	}
  	
  	public get items9(): number | null {
    	return this.getPropertyValue("items9");    	
  	}
	public set items4 (value: number | null) {
    	this.setPropertyValue(value, "items4");    	
  	}
  	
  	public get items4(): number | null {
    	return this.getPropertyValue("items4");    	
  	}
	public set items5 (value: number | null) {
    	this.setPropertyValue(value, "items5");    	
  	}
  	
  	public get items5(): number | null {
    	return this.getPropertyValue("items5");    	
  	}
	public set items14 (value: number | null) {
    	this.setPropertyValue(value, "items14");    	
  	}
  	
  	public get items14(): number | null {
    	return this.getPropertyValue("items14");    	
  	}
	public set items10 (value: number | null) {
    	this.setPropertyValue(value, "items10");    	
  	}
  	
  	public get items10(): number | null {
    	return this.getPropertyValue("items10");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set expiration (value: Date | null) {
    	this.setPropertyValue(value, "expiration");    	
  	}
  	
  	public get expiration(): Date | null {
    	return this.getPropertyValue("expiration");    	
  	}
	public set items2 (value: number | null) {
    	this.setPropertyValue(value, "items2");    	
  	}
  	
  	public get items2(): number | null {
    	return this.getPropertyValue("items2");    	
  	}
	public set shareValue (value: number | null) {
    	this.setPropertyValue(value, "shareValue");    	
  	}
  	
  	public get shareValue(): number | null {
    	return this.getPropertyValue("shareValue");    	
  	}
	public set share (value: number | null) {
    	this.setPropertyValue(value, "share");    	
  	}
  	
  	public get share(): number | null {
    	return this.getPropertyValue("share");    	
  	}
	
}