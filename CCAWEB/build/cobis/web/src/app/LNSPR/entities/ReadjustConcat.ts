
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ReadjustConcat  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"str9"	,
					"str4"	,
					"str5"	,
					"str7"	,
					"str2"	,
					"str3"	,
					"mantieneCuota"	,
					"str1"	,
					"tasaMin"	,
					"str8"	,
					"row"	,
					"str6"	,
					"action"	,
					"str10"	
			];			
			super(undefined,props);
		}   	    
	}
	public set str9 (value: string | null) {
    	this.setPropertyValue(value, "str9");    	
  	}
  	
  	public get str9(): string | null {
    	return this.getPropertyValue("str9");    	
  	}
	public set str4 (value: string | null) {
    	this.setPropertyValue(value, "str4");    	
  	}
  	
  	public get str4(): string | null {
    	return this.getPropertyValue("str4");    	
  	}
	public set str5 (value: string | null) {
    	this.setPropertyValue(value, "str5");    	
  	}
  	
  	public get str5(): string | null {
    	return this.getPropertyValue("str5");    	
  	}
	public set str7 (value: string | null) {
    	this.setPropertyValue(value, "str7");    	
  	}
  	
  	public get str7(): string | null {
    	return this.getPropertyValue("str7");    	
  	}
	public set str2 (value: string | null) {
    	this.setPropertyValue(value, "str2");    	
  	}
  	
  	public get str2(): string | null {
    	return this.getPropertyValue("str2");    	
  	}
	public set str3 (value: string | null) {
    	this.setPropertyValue(value, "str3");    	
  	}
  	
  	public get str3(): string | null {
    	return this.getPropertyValue("str3");    	
  	}
	public set mantieneCuota (value: string | null) {
    	this.setPropertyValue(value, "mantieneCuota");    	
  	}
  	
  	public get mantieneCuota(): string | null {
    	return this.getPropertyValue("mantieneCuota");    	
  	}
	public set str1 (value: string | null) {
    	this.setPropertyValue(value, "str1");    	
  	}
  	
  	public get str1(): string | null {
    	return this.getPropertyValue("str1");    	
  	}
	public set tasaMin (value: string | null) {
    	this.setPropertyValue(value, "tasaMin");    	
  	}
  	
  	public get tasaMin(): string | null {
    	return this.getPropertyValue("tasaMin");    	
  	}
	public set str8 (value: string | null) {
    	this.setPropertyValue(value, "str8");    	
  	}
  	
  	public get str8(): string | null {
    	return this.getPropertyValue("str8");    	
  	}
	public set row (value: number | null) {
    	this.setPropertyValue(value, "row");    	
  	}
  	
  	public get row(): number | null {
    	return this.getPropertyValue("row");    	
  	}
	public set str6 (value: string | null) {
    	this.setPropertyValue(value, "str6");    	
  	}
  	
  	public get str6(): string | null {
    	return this.getPropertyValue("str6");    	
  	}
	public set action (value: string | null) {
    	this.setPropertyValue(value, "action");    	
  	}
  	
  	public get action(): string | null {
    	return this.getPropertyValue("action");    	
  	}
	public set str10 (value: string | null) {
    	this.setPropertyValue(value, "str10");    	
  	}
  	
  	public get str10(): string | null {
    	return this.getPropertyValue("str10");    	
  	}
	
}