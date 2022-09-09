
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CondonationDetail  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"valueToCondone"	,
					"currentAmount"	,
					"dueAmount"	,
					"observation"	,
					"totalValue"	,
					"pastDueAmount"	,
					"concept"	
			];			
			super(undefined,props);
		}   	    
	}
	public set valueToCondone (value: number | null) {
    	this.setPropertyValue(value, "valueToCondone");    	
  	}
  	
  	public get valueToCondone(): number | null {
    	return this.getPropertyValue("valueToCondone");    	
  	}
	public set currentAmount (value: number | null) {
    	this.setPropertyValue(value, "currentAmount");    	
  	}
  	
  	public get currentAmount(): number | null {
    	return this.getPropertyValue("currentAmount");    	
  	}
	public set dueAmount (value: number | null) {
    	this.setPropertyValue(value, "dueAmount");    	
  	}
  	
  	public get dueAmount(): number | null {
    	return this.getPropertyValue("dueAmount");    	
  	}
	public set observation (value: string | null) {
    	this.setPropertyValue(value, "observation");    	
  	}
  	
  	public get observation(): string | null {
    	return this.getPropertyValue("observation");    	
  	}
	public set totalValue (value: number | null) {
    	this.setPropertyValue(value, "totalValue");    	
  	}
  	
  	public get totalValue(): number | null {
    	return this.getPropertyValue("totalValue");    	
  	}
	public set pastDueAmount (value: number | null) {
    	this.setPropertyValue(value, "pastDueAmount");    	
  	}
  	
  	public get pastDueAmount(): number | null {
    	return this.getPropertyValue("pastDueAmount");    	
  	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	
}