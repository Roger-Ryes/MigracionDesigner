
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoansLines  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"term"	,
					"client"	,
					"secuencial"	,
					"moneda"	,
					"numPrestamo"	,
					"estado"	,
					"criterios"	,
					"dateIni"	,
					"naturaleza"	,
					"dateVto"	,
					"amount"	,
					"clienteDesc"	,
					"clientCode"	,
					"numLinea"	,
					"numTramite"	,
					"oficina"	
			];			
			super(undefined,props);
		}   	    
	}
	public set term (value: number | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): number | null {
    	return this.getPropertyValue("term");    	
  	}
	public set client (value: number | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): number | null {
    	return this.getPropertyValue("client");    	
  	}
	public set secuencial (value: number | null) {
    	this.setPropertyValue(value, "secuencial");    	
  	}
  	
  	public get secuencial(): number | null {
    	return this.getPropertyValue("secuencial");    	
  	}
	public set moneda (value: number | null) {
    	this.setPropertyValue(value, "moneda");    	
  	}
  	
  	public get moneda(): number | null {
    	return this.getPropertyValue("moneda");    	
  	}
	public set numPrestamo (value: string | null) {
    	this.setPropertyValue(value, "numPrestamo");    	
  	}
  	
  	public get numPrestamo(): string | null {
    	return this.getPropertyValue("numPrestamo");    	
  	}
	public set estado (value: string | null) {
    	this.setPropertyValue(value, "estado");    	
  	}
  	
  	public get estado(): string | null {
    	return this.getPropertyValue("estado");    	
  	}
	public set criterios (value: boolean | null) {
    	this.setPropertyValue(value, "criterios");    	
  	}
  	
  	public get criterios(): boolean | null {
    	return this.getPropertyValue("criterios");    	
  	}
	public set dateIni (value: Date | null) {
    	this.setPropertyValue(value, "dateIni");    	
  	}
  	
  	public get dateIni(): Date | null {
    	return this.getPropertyValue("dateIni");    	
  	}
	public set naturaleza (value: string | null) {
    	this.setPropertyValue(value, "naturaleza");    	
  	}
  	
  	public get naturaleza(): string | null {
    	return this.getPropertyValue("naturaleza");    	
  	}
	public set dateVto (value: Date | null) {
    	this.setPropertyValue(value, "dateVto");    	
  	}
  	
  	public get dateVto(): Date | null {
    	return this.getPropertyValue("dateVto");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set clienteDesc (value: string | null) {
    	this.setPropertyValue(value, "clienteDesc");    	
  	}
  	
  	public get clienteDesc(): string | null {
    	return this.getPropertyValue("clienteDesc");    	
  	}
	public set clientCode (value: number | null) {
    	this.setPropertyValue(value, "clientCode");    	
  	}
  	
  	public get clientCode(): number | null {
    	return this.getPropertyValue("clientCode");    	
  	}
	public set numLinea (value: string | null) {
    	this.setPropertyValue(value, "numLinea");    	
  	}
  	
  	public get numLinea(): string | null {
    	return this.getPropertyValue("numLinea");    	
  	}
	public set numTramite (value: number | null) {
    	this.setPropertyValue(value, "numTramite");    	
  	}
  	
  	public get numTramite(): number | null {
    	return this.getPropertyValue("numTramite");    	
  	}
	public set oficina (value: number | null) {
    	this.setPropertyValue(value, "oficina");    	
  	}
  	
  	public get oficina(): number | null {
    	return this.getPropertyValue("oficina");    	
  	}
	
}