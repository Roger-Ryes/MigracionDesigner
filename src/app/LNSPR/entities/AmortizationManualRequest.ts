
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationManualRequest  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"str3"	,
					"str5"	,
					"str4"	,
					"str1"	,
					"str2"	,
					"diasAnio"	,
					"fila"	,
					"str6"	,
					"accion"	,
					"str7"	,
					"str9"	,
					"str10"	,
					"operacion"	,
					"str8"	,
					"fechaIni"	
			];			
			super(undefined,props);
		}   	    
	}
	public set str3 (value: string | null) {
    	this.setPropertyValue(value, "str3");    	
  	}
  	
  	public get str3(): string | null {
    	return this.getPropertyValue("str3");    	
  	}
	public set str5 (value: string | null) {
    	this.setPropertyValue(value, "str5");    	
  	}
  	
  	public get str5(): string | null {
    	return this.getPropertyValue("str5");    	
  	}
	public set str4 (value: string | null) {
    	this.setPropertyValue(value, "str4");    	
  	}
  	
  	public get str4(): string | null {
    	return this.getPropertyValue("str4");    	
  	}
	public set str1 (value: string | null) {
    	this.setPropertyValue(value, "str1");    	
  	}
  	
  	public get str1(): string | null {
    	return this.getPropertyValue("str1");    	
  	}
	public set str2 (value: string | null) {
    	this.setPropertyValue(value, "str2");    	
  	}
  	
  	public get str2(): string | null {
    	return this.getPropertyValue("str2");    	
  	}
	public set diasAnio (value: number | null) {
    	this.setPropertyValue(value, "diasAnio");    	
  	}
  	
  	public get diasAnio(): number | null {
    	return this.getPropertyValue("diasAnio");    	
  	}
	public set fila (value: number | null) {
    	this.setPropertyValue(value, "fila");    	
  	}
  	
  	public get fila(): number | null {
    	return this.getPropertyValue("fila");    	
  	}
	public set str6 (value: string | null) {
    	this.setPropertyValue(value, "str6");    	
  	}
  	
  	public get str6(): string | null {
    	return this.getPropertyValue("str6");    	
  	}
	public set accion (value: string | null) {
    	this.setPropertyValue(value, "accion");    	
  	}
  	
  	public get accion(): string | null {
    	return this.getPropertyValue("accion");    	
  	}
	public set str7 (value: string | null) {
    	this.setPropertyValue(value, "str7");    	
  	}
  	
  	public get str7(): string | null {
    	return this.getPropertyValue("str7");    	
  	}
	public set str9 (value: string | null) {
    	this.setPropertyValue(value, "str9");    	
  	}
  	
  	public get str9(): string | null {
    	return this.getPropertyValue("str9");    	
  	}
	public set str10 (value: string | null) {
    	this.setPropertyValue(value, "str10");    	
  	}
  	
  	public get str10(): string | null {
    	return this.getPropertyValue("str10");    	
  	}
	public set operacion (value: number | null) {
    	this.setPropertyValue(value, "operacion");    	
  	}
  	
  	public get operacion(): number | null {
    	return this.getPropertyValue("operacion");    	
  	}
	public set str8 (value: string | null) {
    	this.setPropertyValue(value, "str8");    	
  	}
  	
  	public get str8(): string | null {
    	return this.getPropertyValue("str8");    	
  	}
	public set fechaIni (value: Date | null) {
    	this.setPropertyValue(value, "fechaIni");    	
  	}
  	
  	public get fechaIni(): Date | null {
    	return this.getPropertyValue("fechaIni");    	
  	}
	
}