
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class FilterTransactionQuery  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"state"	,
					"endDate"	,
					"numberLoan"	,
					"startDate"	,
					"typeTransaction"	
			];			
			super(undefined,props);
		}   	    
	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set endDate (value: Date | null) {
    	this.setPropertyValue(value, "endDate");    	
  	}
  	
  	public get endDate(): Date | null {
    	return this.getPropertyValue("endDate");    	
  	}
	public set numberLoan (value: string | null) {
    	this.setPropertyValue(value, "numberLoan");    	
  	}
  	
  	public get numberLoan(): string | null {
    	return this.getPropertyValue("numberLoan");    	
  	}
	public set startDate (value: Date | null) {
    	this.setPropertyValue(value, "startDate");    	
  	}
  	
  	public get startDate(): Date | null {
    	return this.getPropertyValue("startDate");    	
  	}
	public set typeTransaction (value: string | null) {
    	this.setPropertyValue(value, "typeTransaction");    	
  	}
  	
  	public get typeTransaction(): string | null {
    	return this.getPropertyValue("typeTransaction");    	
  	}
	
}