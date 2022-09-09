
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"dynamicField5"	,
					"dynamicField14"	,
					"fee"	,
					"dynamicField20"	,
					"dynamicField18"	,
					"dynamicField15"	,
					"dynamicField17"	,
					"dynamicField1"	,
					"dynamicField4"	,
					"dynamicField3"	,
					"dynamicField8"	,
					"dynamicField11"	,
					"expirationDate"	,
					"dynamicField7"	,
					"dynamicField6"	,
					"balanceCapital"	,
					"dynamicField9"	,
					"dynamicField10"	,
					"dynamicField2"	,
					"dividend"	,
					"dynamicField16"	,
					"dynamicField12"	,
					"dynamicField13"	,
					"dynamicField19"	
			];			
			super(undefined,props);
		}   	    
	}
	public set dynamicField5 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField5");    	
  	}
  	
  	public get dynamicField5(): number | null {
    	return this.getPropertyValue("dynamicField5");    	
  	}
	public set dynamicField14 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField14");    	
  	}
  	
  	public get dynamicField14(): number | null {
    	return this.getPropertyValue("dynamicField14");    	
  	}
	public set fee (value: number | null) {
    	this.setPropertyValue(value, "fee");    	
  	}
  	
  	public get fee(): number | null {
    	return this.getPropertyValue("fee");    	
  	}
	public set dynamicField20 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField20");    	
  	}
  	
  	public get dynamicField20(): number | null {
    	return this.getPropertyValue("dynamicField20");    	
  	}
	public set dynamicField18 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField18");    	
  	}
  	
  	public get dynamicField18(): number | null {
    	return this.getPropertyValue("dynamicField18");    	
  	}
	public set dynamicField15 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField15");    	
  	}
  	
  	public get dynamicField15(): number | null {
    	return this.getPropertyValue("dynamicField15");    	
  	}
	public set dynamicField17 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField17");    	
  	}
  	
  	public get dynamicField17(): number | null {
    	return this.getPropertyValue("dynamicField17");    	
  	}
	public set dynamicField1 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField1");    	
  	}
  	
  	public get dynamicField1(): number | null {
    	return this.getPropertyValue("dynamicField1");    	
  	}
	public set dynamicField4 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField4");    	
  	}
  	
  	public get dynamicField4(): number | null {
    	return this.getPropertyValue("dynamicField4");    	
  	}
	public set dynamicField3 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField3");    	
  	}
  	
  	public get dynamicField3(): number | null {
    	return this.getPropertyValue("dynamicField3");    	
  	}
	public set dynamicField8 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField8");    	
  	}
  	
  	public get dynamicField8(): number | null {
    	return this.getPropertyValue("dynamicField8");    	
  	}
	public set dynamicField11 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField11");    	
  	}
  	
  	public get dynamicField11(): number | null {
    	return this.getPropertyValue("dynamicField11");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set dynamicField7 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField7");    	
  	}
  	
  	public get dynamicField7(): number | null {
    	return this.getPropertyValue("dynamicField7");    	
  	}
	public set dynamicField6 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField6");    	
  	}
  	
  	public get dynamicField6(): number | null {
    	return this.getPropertyValue("dynamicField6");    	
  	}
	public set balanceCapital (value: number | null) {
    	this.setPropertyValue(value, "balanceCapital");    	
  	}
  	
  	public get balanceCapital(): number | null {
    	return this.getPropertyValue("balanceCapital");    	
  	}
	public set dynamicField9 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField9");    	
  	}
  	
  	public get dynamicField9(): number | null {
    	return this.getPropertyValue("dynamicField9");    	
  	}
	public set dynamicField10 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField10");    	
  	}
  	
  	public get dynamicField10(): number | null {
    	return this.getPropertyValue("dynamicField10");    	
  	}
	public set dynamicField2 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField2");    	
  	}
  	
  	public get dynamicField2(): number | null {
    	return this.getPropertyValue("dynamicField2");    	
  	}
	public set dividend (value: number | null) {
    	this.setPropertyValue(value, "dividend");    	
  	}
  	
  	public get dividend(): number | null {
    	return this.getPropertyValue("dividend");    	
  	}
	public set dynamicField16 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField16");    	
  	}
  	
  	public get dynamicField16(): number | null {
    	return this.getPropertyValue("dynamicField16");    	
  	}
	public set dynamicField12 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField12");    	
  	}
  	
  	public get dynamicField12(): number | null {
    	return this.getPropertyValue("dynamicField12");    	
  	}
	public set dynamicField13 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField13");    	
  	}
  	
  	public get dynamicField13(): number | null {
    	return this.getPropertyValue("dynamicField13");    	
  	}
	public set dynamicField19 (value: number | null) {
    	this.setPropertyValue(value, "dynamicField19");    	
  	}
  	
  	public get dynamicField19(): number | null {
    	return this.getPropertyValue("dynamicField19");    	
  	}
	
}