
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ProjectionQuota  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amountOverdue"	,
					"prepaymentAmount"	,
					"projectionDate"	,
					"projectionDays"	,
					"typeCalculation"	,
					"currentAmountDue"	,
					"expirationDays"	,
					"dateProcess"	
			];			
			super(undefined,props);
		}   	    
	}
	public set amountOverdue (value: number | null) {
    	this.setPropertyValue(value, "amountOverdue");    	
  	}
  	
  	public get amountOverdue(): number | null {
    	return this.getPropertyValue("amountOverdue");    	
  	}
	public set prepaymentAmount (value: number | null) {
    	this.setPropertyValue(value, "prepaymentAmount");    	
  	}
  	
  	public get prepaymentAmount(): number | null {
    	return this.getPropertyValue("prepaymentAmount");    	
  	}
	public set projectionDate (value: Date | null) {
    	this.setPropertyValue(value, "projectionDate");    	
  	}
  	
  	public get projectionDate(): Date | null {
    	return this.getPropertyValue("projectionDate");    	
  	}
	public set projectionDays (value: number | null) {
    	this.setPropertyValue(value, "projectionDays");    	
  	}
  	
  	public get projectionDays(): number | null {
    	return this.getPropertyValue("projectionDays");    	
  	}
	public set typeCalculation (value: string | null) {
    	this.setPropertyValue(value, "typeCalculation");    	
  	}
  	
  	public get typeCalculation(): string | null {
    	return this.getPropertyValue("typeCalculation");    	
  	}
	public set currentAmountDue (value: number | null) {
    	this.setPropertyValue(value, "currentAmountDue");    	
  	}
  	
  	public get currentAmountDue(): number | null {
    	return this.getPropertyValue("currentAmountDue");    	
  	}
	public set expirationDays (value: number | null) {
    	this.setPropertyValue(value, "expirationDays");    	
  	}
  	
  	public get expirationDays(): number | null {
    	return this.getPropertyValue("expirationDays");    	
  	}
	public set dateProcess (value: Date | null) {
    	this.setPropertyValue(value, "dateProcess");    	
  	}
  	
  	public get dateProcess(): Date | null {
    	return this.getPropertyValue("dateProcess");    	
  	}
	
}