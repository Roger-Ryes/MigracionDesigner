
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ConsentimientoCredito  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"operacion"	,
					"montoPPBasico"	,
					"monto"	,
					"fechaVigencia"	,
					"rol"	,
					"parentesco"	,
					"cuenta"	,
					"montoLiquidacion"	,
					"depositoInicial"	,
					"progBasico"	,
					"montoAhorro"	,
					"codigoCliente"	,
					"montoEntregar"	,
					"porcentaje"	,
					"progPrevencion"	,
					"numeroCertificado"	,
					"nombre"	,
					"beneficiario"	,
					"montoPPVoluntario"	
			];			
			super(undefined,props);
		}   	    
	}
	public set operacion (value: string | null) {
    	this.setPropertyValue(value, "operacion");    	
  	}
  	
  	public get operacion(): string | null {
    	return this.getPropertyValue("operacion");    	
  	}
	public set montoPPBasico (value: number | null) {
    	this.setPropertyValue(value, "montoPPBasico");    	
  	}
  	
  	public get montoPPBasico(): number | null {
    	return this.getPropertyValue("montoPPBasico");    	
  	}
	public set monto (value: number | null) {
    	this.setPropertyValue(value, "monto");    	
  	}
  	
  	public get monto(): number | null {
    	return this.getPropertyValue("monto");    	
  	}
	public set fechaVigencia (value: Date | null) {
    	this.setPropertyValue(value, "fechaVigencia");    	
  	}
  	
  	public get fechaVigencia(): Date | null {
    	return this.getPropertyValue("fechaVigencia");    	
  	}
	public set rol (value: string | null) {
    	this.setPropertyValue(value, "rol");    	
  	}
  	
  	public get rol(): string | null {
    	return this.getPropertyValue("rol");    	
  	}
	public set parentesco (value: string | null) {
    	this.setPropertyValue(value, "parentesco");    	
  	}
  	
  	public get parentesco(): string | null {
    	return this.getPropertyValue("parentesco");    	
  	}
	public set cuenta (value: number | null) {
    	this.setPropertyValue(value, "cuenta");    	
  	}
  	
  	public get cuenta(): number | null {
    	return this.getPropertyValue("cuenta");    	
  	}
	public set montoLiquidacion (value: number | null) {
    	this.setPropertyValue(value, "montoLiquidacion");    	
  	}
  	
  	public get montoLiquidacion(): number | null {
    	return this.getPropertyValue("montoLiquidacion");    	
  	}
	public set depositoInicial (value: number | null) {
    	this.setPropertyValue(value, "depositoInicial");    	
  	}
  	
  	public get depositoInicial(): number | null {
    	return this.getPropertyValue("depositoInicial");    	
  	}
	public set progBasico (value: string | null) {
    	this.setPropertyValue(value, "progBasico");    	
  	}
  	
  	public get progBasico(): string | null {
    	return this.getPropertyValue("progBasico");    	
  	}
	public set montoAhorro (value: number | null) {
    	this.setPropertyValue(value, "montoAhorro");    	
  	}
  	
  	public get montoAhorro(): number | null {
    	return this.getPropertyValue("montoAhorro");    	
  	}
	public set codigoCliente (value: number | null) {
    	this.setPropertyValue(value, "codigoCliente");    	
  	}
  	
  	public get codigoCliente(): number | null {
    	return this.getPropertyValue("codigoCliente");    	
  	}
	public set montoEntregar (value: number | null) {
    	this.setPropertyValue(value, "montoEntregar");    	
  	}
  	
  	public get montoEntregar(): number | null {
    	return this.getPropertyValue("montoEntregar");    	
  	}
	public set porcentaje (value: number | null) {
    	this.setPropertyValue(value, "porcentaje");    	
  	}
  	
  	public get porcentaje(): number | null {
    	return this.getPropertyValue("porcentaje");    	
  	}
	public set progPrevencion (value: string | null) {
    	this.setPropertyValue(value, "progPrevencion");    	
  	}
  	
  	public get progPrevencion(): string | null {
    	return this.getPropertyValue("progPrevencion");    	
  	}
	public set numeroCertificado (value: string | null) {
    	this.setPropertyValue(value, "numeroCertificado");    	
  	}
  	
  	public get numeroCertificado(): string | null {
    	return this.getPropertyValue("numeroCertificado");    	
  	}
	public set nombre (value: string | null) {
    	this.setPropertyValue(value, "nombre");    	
  	}
  	
  	public get nombre(): string | null {
    	return this.getPropertyValue("nombre");    	
  	}
	public set beneficiario (value: string | null) {
    	this.setPropertyValue(value, "beneficiario");    	
  	}
  	
  	public get beneficiario(): string | null {
    	return this.getPropertyValue("beneficiario");    	
  	}
	public set montoPPVoluntario (value: number | null) {
    	this.setPropertyValue(value, "montoPPVoluntario");    	
  	}
  	
  	public get montoPPVoluntario(): number | null {
    	return this.getPropertyValue("montoPPVoluntario");    	
  	}
	
}