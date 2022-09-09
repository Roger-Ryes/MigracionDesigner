
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Negotiation  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"paymentType"	,
					"interestType"	,
					"additionalPayments"	,
					"calculateReturn"	,
					"reductionType"	,
					"fullFee"	
			];			
			super(undefined,props);
		}   	    
	}
	public set paymentType (value: string | null) {
    	this.setPropertyValue(value, "paymentType");    	
  	}
  	
  	public get paymentType(): string | null {
    	return this.getPropertyValue("paymentType");    	
  	}
	public set interestType (value: string | null) {
    	this.setPropertyValue(value, "interestType");    	
  	}
  	
  	public get interestType(): string | null {
    	return this.getPropertyValue("interestType");    	
  	}
	public set additionalPayments (value: boolean | null) {
    	this.setPropertyValue(value, "additionalPayments");    	
  	}
  	
  	public get additionalPayments(): boolean | null {
    	return this.getPropertyValue("additionalPayments");    	
  	}
	public set calculateReturn (value: string | null) {
    	this.setPropertyValue(value, "calculateReturn");    	
  	}
  	
  	public get calculateReturn(): string | null {
    	return this.getPropertyValue("calculateReturn");    	
  	}
	public set reductionType (value: string | null) {
    	this.setPropertyValue(value, "reductionType");    	
  	}
  	
  	public get reductionType(): string | null {
    	return this.getPropertyValue("reductionType");    	
  	}
	public set fullFee (value: boolean | null) {
    	this.setPropertyValue(value, "fullFee");    	
  	}
  	
  	public get fullFee(): boolean | null {
    	return this.getPropertyValue("fullFee");    	
  	}
	
}