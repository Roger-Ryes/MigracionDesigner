
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoansLinesHeader  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"sector"	,
					"fechaAprobacion"	,
					"secuencial"	,
					"estado"	,
					"montoReservado"	,
					"oficina"	,
					"rotativa"	,
					"clienteCodigo"	,
					"estadoCod"	,
					"monedaCod"	,
					"cupo"	,
					"naturalezaOp"	,
					"monto"	,
					"fechaVencimiento"	,
					"numDias"	,
					"montoUtilizado"	,
					"monedaDesc"	,
					"clienteNombre"	,
					"montoDisponible"	
			];			
			super(undefined,props);
		}   	    
	}
	public set sector (value: string | null) {
    	this.setPropertyValue(value, "sector");    	
  	}
  	
  	public get sector(): string | null {
    	return this.getPropertyValue("sector");    	
  	}
	public set fechaAprobacion (value: Date | null) {
    	this.setPropertyValue(value, "fechaAprobacion");    	
  	}
  	
  	public get fechaAprobacion(): Date | null {
    	return this.getPropertyValue("fechaAprobacion");    	
  	}
	public set secuencial (value: number | null) {
    	this.setPropertyValue(value, "secuencial");    	
  	}
  	
  	public get secuencial(): number | null {
    	return this.getPropertyValue("secuencial");    	
  	}
	public set estado (value: string | null) {
    	this.setPropertyValue(value, "estado");    	
  	}
  	
  	public get estado(): string | null {
    	return this.getPropertyValue("estado");    	
  	}
	public set montoReservado (value: number | null) {
    	this.setPropertyValue(value, "montoReservado");    	
  	}
  	
  	public get montoReservado(): number | null {
    	return this.getPropertyValue("montoReservado");    	
  	}
	public set oficina (value: number | null) {
    	this.setPropertyValue(value, "oficina");    	
  	}
  	
  	public get oficina(): number | null {
    	return this.getPropertyValue("oficina");    	
  	}
	public set rotativa (value: string | null) {
    	this.setPropertyValue(value, "rotativa");    	
  	}
  	
  	public get rotativa(): string | null {
    	return this.getPropertyValue("rotativa");    	
  	}
	public set clienteCodigo (value: number | null) {
    	this.setPropertyValue(value, "clienteCodigo");    	
  	}
  	
  	public get clienteCodigo(): number | null {
    	return this.getPropertyValue("clienteCodigo");    	
  	}
	public set estadoCod (value: string | null) {
    	this.setPropertyValue(value, "estadoCod");    	
  	}
  	
  	public get estadoCod(): string | null {
    	return this.getPropertyValue("estadoCod");    	
  	}
	public set monedaCod (value: number | null) {
    	this.setPropertyValue(value, "monedaCod");    	
  	}
  	
  	public get monedaCod(): number | null {
    	return this.getPropertyValue("monedaCod");    	
  	}
	public set cupo (value: string | null) {
    	this.setPropertyValue(value, "cupo");    	
  	}
  	
  	public get cupo(): string | null {
    	return this.getPropertyValue("cupo");    	
  	}
	public set naturalezaOp (value: string | null) {
    	this.setPropertyValue(value, "naturalezaOp");    	
  	}
  	
  	public get naturalezaOp(): string | null {
    	return this.getPropertyValue("naturalezaOp");    	
  	}
	public set monto (value: number | null) {
    	this.setPropertyValue(value, "monto");    	
  	}
  	
  	public get monto(): number | null {
    	return this.getPropertyValue("monto");    	
  	}
	public set fechaVencimiento (value: Date | null) {
    	this.setPropertyValue(value, "fechaVencimiento");    	
  	}
  	
  	public get fechaVencimiento(): Date | null {
    	return this.getPropertyValue("fechaVencimiento");    	
  	}
	public set numDias (value: number | null) {
    	this.setPropertyValue(value, "numDias");    	
  	}
  	
  	public get numDias(): number | null {
    	return this.getPropertyValue("numDias");    	
  	}
	public set montoUtilizado (value: number | null) {
    	this.setPropertyValue(value, "montoUtilizado");    	
  	}
  	
  	public get montoUtilizado(): number | null {
    	return this.getPropertyValue("montoUtilizado");    	
  	}
	public set monedaDesc (value: string | null) {
    	this.setPropertyValue(value, "monedaDesc");    	
  	}
  	
  	public get monedaDesc(): string | null {
    	return this.getPropertyValue("monedaDesc");    	
  	}
	public set clienteNombre (value: string | null) {
    	this.setPropertyValue(value, "clienteNombre");    	
  	}
  	
  	public get clienteNombre(): string | null {
    	return this.getPropertyValue("clienteNombre");    	
  	}
	public set montoDisponible (value: number | null) {
    	this.setPropertyValue(value, "montoDisponible");    	
  	}
  	
  	public get montoDisponible(): number | null {
    	return this.getPropertyValue("montoDisponible");    	
  	}
	
}