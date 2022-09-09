
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ReceiptPayment  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"completeClientName"	,
					"walmartReference"	,
					"operationType"	,
					"barCode"	,
					"referenceNumber"	,
					"printingDate"	,
					"walmartBarCode"	
			];			
			super(undefined,props);
		}   	    
	}
	public set completeClientName (value: string | null) {
    	this.setPropertyValue(value, "completeClientName");    	
  	}
  	
  	public get completeClientName(): string | null {
    	return this.getPropertyValue("completeClientName");    	
  	}
	public set walmartReference (value: string | null) {
    	this.setPropertyValue(value, "walmartReference");    	
  	}
  	
  	public get walmartReference(): string | null {
    	return this.getPropertyValue("walmartReference");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set barCode (value: string | null) {
    	this.setPropertyValue(value, "barCode");    	
  	}
  	
  	public get barCode(): string | null {
    	return this.getPropertyValue("barCode");    	
  	}
	public set referenceNumber (value: string | null) {
    	this.setPropertyValue(value, "referenceNumber");    	
  	}
  	
  	public get referenceNumber(): string | null {
    	return this.getPropertyValue("referenceNumber");    	
  	}
	public set printingDate (value: string | null) {
    	this.setPropertyValue(value, "printingDate");    	
  	}
  	
  	public get printingDate(): string | null {
    	return this.getPropertyValue("printingDate");    	
  	}
	public set walmartBarCode (value: string | null) {
    	this.setPropertyValue(value, "walmartBarCode");    	
  	}
  	
  	public get walmartBarCode(): string | null {
    	return this.getPropertyValue("walmartBarCode");    	
  	}
	
}