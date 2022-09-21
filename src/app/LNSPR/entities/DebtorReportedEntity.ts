
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DebtorReportedEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"calification"	,
					"docNumber"	,
					"code"	,
					"type"	,
					"deptorName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set calification (value: string | null) {
    	this.setPropertyValue(value, "calification");    	
  	}
  	
  	public get calification(): string | null {
    	return this.getPropertyValue("calification");    	
  	}
	public set docNumber (value: string | null) {
    	this.setPropertyValue(value, "docNumber");    	
  	}
  	
  	public get docNumber(): string | null {
    	return this.getPropertyValue("docNumber");    	
  	}
	public set code (value: string | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): string | null {
    	return this.getPropertyValue("code");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set deptorName (value: string | null) {
    	this.setPropertyValue(value, "deptorName");    	
  	}
  	
  	public get deptorName(): string | null {
    	return this.getPropertyValue("deptorName");    	
  	}
	
}