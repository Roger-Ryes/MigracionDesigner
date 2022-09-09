
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CartaLiberaRecursosData  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"nroCredito"	,
					"currentYear"	,
					"cliente"	,
					"porcentajeALiberar"	,
					"monto"	,
					"simboloMoneda"	,
					"sucursal"	,
					"ciudad"	,
					"porcentajeLiberar"	,
					"banck"	,
					"fecha"	,
					"porcentajePenLiberar"	,
					"currentMonth"	,
					"currentDay"	
			];			
			super(undefined,props);
		}   	    
	}
	public set nroCredito (value: string | null) {
    	this.setPropertyValue(value, "nroCredito");    	
  	}
  	
  	public get nroCredito(): string | null {
    	return this.getPropertyValue("nroCredito");    	
  	}
	public set currentYear (value: string | null) {
    	this.setPropertyValue(value, "currentYear");    	
  	}
  	
  	public get currentYear(): string | null {
    	return this.getPropertyValue("currentYear");    	
  	}
	public set cliente (value: string | null) {
    	this.setPropertyValue(value, "cliente");    	
  	}
  	
  	public get cliente(): string | null {
    	return this.getPropertyValue("cliente");    	
  	}
	public set porcentajeALiberar (value: string | null) {
    	this.setPropertyValue(value, "porcentajeALiberar");    	
  	}
  	
  	public get porcentajeALiberar(): string | null {
    	return this.getPropertyValue("porcentajeALiberar");    	
  	}
	public set monto (value: string | null) {
    	this.setPropertyValue(value, "monto");    	
  	}
  	
  	public get monto(): string | null {
    	return this.getPropertyValue("monto");    	
  	}
	public set simboloMoneda (value: string | null) {
    	this.setPropertyValue(value, "simboloMoneda");    	
  	}
  	
  	public get simboloMoneda(): string | null {
    	return this.getPropertyValue("simboloMoneda");    	
  	}
	public set sucursal (value: string | null) {
    	this.setPropertyValue(value, "sucursal");    	
  	}
  	
  	public get sucursal(): string | null {
    	return this.getPropertyValue("sucursal");    	
  	}
	public set ciudad (value: string | null) {
    	this.setPropertyValue(value, "ciudad");    	
  	}
  	
  	public get ciudad(): string | null {
    	return this.getPropertyValue("ciudad");    	
  	}
	public set porcentajeLiberar (value: string | null) {
    	this.setPropertyValue(value, "porcentajeLiberar");    	
  	}
  	
  	public get porcentajeLiberar(): string | null {
    	return this.getPropertyValue("porcentajeLiberar");    	
  	}
	public set banck (value: string | null) {
    	this.setPropertyValue(value, "banck");    	
  	}
  	
  	public get banck(): string | null {
    	return this.getPropertyValue("banck");    	
  	}
	public set fecha (value: string | null) {
    	this.setPropertyValue(value, "fecha");    	
  	}
  	
  	public get fecha(): string | null {
    	return this.getPropertyValue("fecha");    	
  	}
	public set porcentajePenLiberar (value: string | null) {
    	this.setPropertyValue(value, "porcentajePenLiberar");    	
  	}
  	
  	public get porcentajePenLiberar(): string | null {
    	return this.getPropertyValue("porcentajePenLiberar");    	
  	}
	public set currentMonth (value: string | null) {
    	this.setPropertyValue(value, "currentMonth");    	
  	}
  	
  	public get currentMonth(): string | null {
    	return this.getPropertyValue("currentMonth");    	
  	}
	public set currentDay (value: string | null) {
    	this.setPropertyValue(value, "currentDay");    	
  	}
  	
  	public get currentDay(): string | null {
    	return this.getPropertyValue("currentDay");    	
  	}
	
}