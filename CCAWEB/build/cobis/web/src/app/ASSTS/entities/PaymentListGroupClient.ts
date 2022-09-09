
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PaymentListGroupClient  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"descripcion"	,
					"codigo"	,
					"etiqueta"	
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
	public set codigo (value: string | null) {
    	this.setPropertyValue(value, "codigo");    	
  	}
  	
  	public get codigo(): string | null {
    	return this.getPropertyValue("codigo");    	
  	}
	public set etiqueta (value: string | null) {
    	this.setPropertyValue(value, "etiqueta");    	
  	}
  	
  	public get etiqueta(): string | null {
    	return this.getPropertyValue("etiqueta");    	
  	}
	
}