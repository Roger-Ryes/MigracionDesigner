
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class NoAppliedPayment  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"usuario"	,
					"fecha"	,
					"oficina"	,
					"secuencial"	,
					"tipoCobro"	,
					"retencion"	,
					"tipoReduccion"	,
					"cuotaCompleta"	,
					"anticipos"	
			];			
			super(undefined,props);
		}   	    
	}
	public set usuario (value: string | null) {
    	this.setPropertyValue(value, "usuario");    	
  	}
  	
  	public get usuario(): string | null {
    	return this.getPropertyValue("usuario");    	
  	}
	public set fecha (value: string | null) {
    	this.setPropertyValue(value, "fecha");    	
  	}
  	
  	public get fecha(): string | null {
    	return this.getPropertyValue("fecha");    	
  	}
	public set oficina (value: number | null) {
    	this.setPropertyValue(value, "oficina");    	
  	}
  	
  	public get oficina(): number | null {
    	return this.getPropertyValue("oficina");    	
  	}
	public set secuencial (value: number | null) {
    	this.setPropertyValue(value, "secuencial");    	
  	}
  	
  	public get secuencial(): number | null {
    	return this.getPropertyValue("secuencial");    	
  	}
	public set tipoCobro (value: string | null) {
    	this.setPropertyValue(value, "tipoCobro");    	
  	}
  	
  	public get tipoCobro(): string | null {
    	return this.getPropertyValue("tipoCobro");    	
  	}
	public set retencion (value: number | null) {
    	this.setPropertyValue(value, "retencion");    	
  	}
  	
  	public get retencion(): number | null {
    	return this.getPropertyValue("retencion");    	
  	}
	public set tipoReduccion (value: string | null) {
    	this.setPropertyValue(value, "tipoReduccion");    	
  	}
  	
  	public get tipoReduccion(): string | null {
    	return this.getPropertyValue("tipoReduccion");    	
  	}
	public set cuotaCompleta (value: string | null) {
    	this.setPropertyValue(value, "cuotaCompleta");    	
  	}
  	
  	public get cuotaCompleta(): string | null {
    	return this.getPropertyValue("cuotaCompleta");    	
  	}
	public set anticipos (value: string | null) {
    	this.setPropertyValue(value, "anticipos");    	
  	}
  	
  	public get anticipos(): string | null {
    	return this.getPropertyValue("anticipos");    	
  	}
	
}