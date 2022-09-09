
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DetailNoAppliedPayment  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"tipo"	,
					"concepto"	,
					"montoMPG"	,
					"moneda"	,
					"montoMOP"	,
					"cuenta"	
			];			
			super(undefined,props);
		}   	    
	}
	public set tipo (value: string | null) {
    	this.setPropertyValue(value, "tipo");    	
  	}
  	
  	public get tipo(): string | null {
    	return this.getPropertyValue("tipo");    	
  	}
	public set concepto (value: string | null) {
    	this.setPropertyValue(value, "concepto");    	
  	}
  	
  	public get concepto(): string | null {
    	return this.getPropertyValue("concepto");    	
  	}
	public set montoMPG (value: number | null) {
    	this.setPropertyValue(value, "montoMPG");    	
  	}
  	
  	public get montoMPG(): number | null {
    	return this.getPropertyValue("montoMPG");    	
  	}
	public set moneda (value: number | null) {
    	this.setPropertyValue(value, "moneda");    	
  	}
  	
  	public get moneda(): number | null {
    	return this.getPropertyValue("moneda");    	
  	}
	public set montoMOP (value: number | null) {
    	this.setPropertyValue(value, "montoMOP");    	
  	}
  	
  	public get montoMOP(): number | null {
    	return this.getPropertyValue("montoMOP");    	
  	}
	public set cuenta (value: string | null) {
    	this.setPropertyValue(value, "cuenta");    	
  	}
  	
  	public get cuenta(): string | null {
    	return this.getPropertyValue("cuenta");    	
  	}
	
}