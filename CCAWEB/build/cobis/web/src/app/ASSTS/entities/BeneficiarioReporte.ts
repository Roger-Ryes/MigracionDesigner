
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class BeneficiarioReporte  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"nombreBeneficiario"	,
					"codigoCliente"	,
					"fechaFinal"	,
					"fechaInicial"	,
					"nombreCliente"	,
					"porcentaje"	
			];			
			super(undefined,props);
		}   	    
	}
	public set nombreBeneficiario (value: string | null) {
    	this.setPropertyValue(value, "nombreBeneficiario");    	
  	}
  	
  	public get nombreBeneficiario(): string | null {
    	return this.getPropertyValue("nombreBeneficiario");    	
  	}
	public set codigoCliente (value: number | null) {
    	this.setPropertyValue(value, "codigoCliente");    	
  	}
  	
  	public get codigoCliente(): number | null {
    	return this.getPropertyValue("codigoCliente");    	
  	}
	public set fechaFinal (value: Date | null) {
    	this.setPropertyValue(value, "fechaFinal");    	
  	}
  	
  	public get fechaFinal(): Date | null {
    	return this.getPropertyValue("fechaFinal");    	
  	}
	public set fechaInicial (value: Date | null) {
    	this.setPropertyValue(value, "fechaInicial");    	
  	}
  	
  	public get fechaInicial(): Date | null {
    	return this.getPropertyValue("fechaInicial");    	
  	}
	public set nombreCliente (value: string | null) {
    	this.setPropertyValue(value, "nombreCliente");    	
  	}
  	
  	public get nombreCliente(): string | null {
    	return this.getPropertyValue("nombreCliente");    	
  	}
	public set porcentaje (value: number | null) {
    	this.setPropertyValue(value, "porcentaje");    	
  	}
  	
  	public get porcentaje(): number | null {
    	return this.getPropertyValue("porcentaje");    	
  	}
	
}