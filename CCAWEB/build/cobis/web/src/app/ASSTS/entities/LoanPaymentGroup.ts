
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanPaymentGroup  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"vencidoGrupal"	,
					"nombreGrupo"	,
					"vigenteGrupal"	,
					"vigenteInterciclo"	,
					"totalExigible"	,
					"totalPrecancelar"	,
					"grupo"	,
					"vencidoInterciclo"	
			];			
			super(undefined,props);
		}   	    
	}
	public set vencidoGrupal (value: number | null) {
    	this.setPropertyValue(value, "vencidoGrupal");    	
  	}
  	
  	public get vencidoGrupal(): number | null {
    	return this.getPropertyValue("vencidoGrupal");    	
  	}
	public set nombreGrupo (value: string | null) {
    	this.setPropertyValue(value, "nombreGrupo");    	
  	}
  	
  	public get nombreGrupo(): string | null {
    	return this.getPropertyValue("nombreGrupo");    	
  	}
	public set vigenteGrupal (value: number | null) {
    	this.setPropertyValue(value, "vigenteGrupal");    	
  	}
  	
  	public get vigenteGrupal(): number | null {
    	return this.getPropertyValue("vigenteGrupal");    	
  	}
	public set vigenteInterciclo (value: number | null) {
    	this.setPropertyValue(value, "vigenteInterciclo");    	
  	}
  	
  	public get vigenteInterciclo(): number | null {
    	return this.getPropertyValue("vigenteInterciclo");    	
  	}
	public set totalExigible (value: number | null) {
    	this.setPropertyValue(value, "totalExigible");    	
  	}
  	
  	public get totalExigible(): number | null {
    	return this.getPropertyValue("totalExigible");    	
  	}
	public set totalPrecancelar (value: number | null) {
    	this.setPropertyValue(value, "totalPrecancelar");    	
  	}
  	
  	public get totalPrecancelar(): number | null {
    	return this.getPropertyValue("totalPrecancelar");    	
  	}
	public set grupo (value: number | null) {
    	this.setPropertyValue(value, "grupo");    	
  	}
  	
  	public get grupo(): number | null {
    	return this.getPropertyValue("grupo");    	
  	}
	public set vencidoInterciclo (value: number | null) {
    	this.setPropertyValue(value, "vencidoInterciclo");    	
  	}
  	
  	public get vencidoInterciclo(): number | null {
    	return this.getPropertyValue("vencidoInterciclo");    	
  	}
	
}