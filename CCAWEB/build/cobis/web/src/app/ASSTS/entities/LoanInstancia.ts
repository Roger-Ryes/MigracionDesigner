
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanInstancia  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"idOptionMenu"	,
					"errorValidation"	,
					"idInstancia"	,
					"tipo"	
			];			
			super(undefined,props);
		}   	    
	}
	public set idOptionMenu (value: string | null) {
    	this.setPropertyValue(value, "idOptionMenu");    	
  	}
  	
  	public get idOptionMenu(): string | null {
    	return this.getPropertyValue("idOptionMenu");    	
  	}
	public set errorValidation (value: boolean | null) {
    	this.setPropertyValue(value, "errorValidation");    	
  	}
  	
  	public get errorValidation(): boolean | null {
    	return this.getPropertyValue("errorValidation");    	
  	}
	public set idInstancia (value: string | null) {
    	this.setPropertyValue(value, "idInstancia");    	
  	}
  	
  	public get idInstancia(): string | null {
    	return this.getPropertyValue("idInstancia");    	
  	}
	public set tipo (value: string | null) {
    	this.setPropertyValue(value, "tipo");    	
  	}
  	
  	public get tipo(): string | null {
    	return this.getPropertyValue("tipo");    	
  	}
	
}