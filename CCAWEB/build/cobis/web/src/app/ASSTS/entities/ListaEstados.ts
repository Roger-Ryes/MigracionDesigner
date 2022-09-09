
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ListaEstados  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"descripcion"	,
					"codigo"	,
					"procesa"	,
					"aceptaPago"	
			];			
			super(undefined,props);
		}   	    
	}
	public set descripcion (value: string | null) {
    	this.setPropertyValue(value, "descripcion");    	
  	}
  	
  	public get descripcion(): string | null {
    	return this.getPropertyValue("descripcion");    	
  	}
	public set codigo (value: number | null) {
    	this.setPropertyValue(value, "codigo");    	
  	}
  	
  	public get codigo(): number | null {
    	return this.getPropertyValue("codigo");    	
  	}
	public set procesa (value: string | null) {
    	this.setPropertyValue(value, "procesa");    	
  	}
  	
  	public get procesa(): string | null {
    	return this.getPropertyValue("procesa");    	
  	}
	public set aceptaPago (value: string | null) {
    	this.setPropertyValue(value, "aceptaPago");    	
  	}
  	
  	public get aceptaPago(): string | null {
    	return this.getPropertyValue("aceptaPago");    	
  	}
	
}