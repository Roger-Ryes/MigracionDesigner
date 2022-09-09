
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RulerResult  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amountSafe"	,
					"lastCondition"	,
					"returnResults"	,
					"amountMonthly"	,
					"returnVariable"	
			];			
			super(undefined,props);
		}   	    
	}
	public set amountSafe (value: number | null) {
    	this.setPropertyValue(value, "amountSafe");    	
  	}
  	
  	public get amountSafe(): number | null {
    	return this.getPropertyValue("amountSafe");    	
  	}
	public set lastCondition (value: string | null) {
    	this.setPropertyValue(value, "lastCondition");    	
  	}
  	
  	public get lastCondition(): string | null {
    	return this.getPropertyValue("lastCondition");    	
  	}
	public set returnResults (value: string | null) {
    	this.setPropertyValue(value, "returnResults");    	
  	}
  	
  	public get returnResults(): string | null {
    	return this.getPropertyValue("returnResults");    	
  	}
	public set amountMonthly (value: number | null) {
    	this.setPropertyValue(value, "amountMonthly");    	
  	}
  	
  	public get amountMonthly(): number | null {
    	return this.getPropertyValue("amountMonthly");    	
  	}
	public set returnVariable (value: string | null) {
    	this.setPropertyValue(value, "returnVariable");    	
  	}
  	
  	public get returnVariable(): string | null {
    	return this.getPropertyValue("returnVariable");    	
  	}
	
}