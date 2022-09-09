
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ModalTasaEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"descripcion"	,
					"identificador"	,
					"clase"	,
					"tasaPIT"	
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
	public set identificador (value: string | null) {
    	this.setPropertyValue(value, "identificador");    	
  	}
  	
  	public get identificador(): string | null {
    	return this.getPropertyValue("identificador");    	
  	}
	public set clase (value: string | null) {
    	this.setPropertyValue(value, "clase");    	
  	}
  	
  	public get clase(): string | null {
    	return this.getPropertyValue("clase");    	
  	}
	public set tasaPIT (value: string | null) {
    	this.setPropertyValue(value, "tasaPIT");    	
  	}
  	
  	public get tasaPIT(): string | null {
    	return this.getPropertyValue("tasaPIT");    	
  	}
	
}