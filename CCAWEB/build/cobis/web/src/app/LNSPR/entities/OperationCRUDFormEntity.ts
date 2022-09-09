
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OperationCRUDFormEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"role"	,
					"idNumber"	,
					"officer"	,
					"company"	,
					"subType"	,
					"fullName"	,
					"code"	
			];			
			super(undefined,props);
		}   	    
	}
	public set role (value: boolean | null) {
    	this.setPropertyValue(value, "role");    	
  	}
  	
  	public get role(): boolean | null {
    	return this.getPropertyValue("role");    	
  	}
	public set idNumber (value: string | null) {
    	this.setPropertyValue(value, "idNumber");    	
  	}
  	
  	public get idNumber(): string | null {
    	return this.getPropertyValue("idNumber");    	
  	}
	public set officer (value: string | null) {
    	this.setPropertyValue(value, "officer");    	
  	}
  	
  	public get officer(): string | null {
    	return this.getPropertyValue("officer");    	
  	}
	public set company (value: number | null) {
    	this.setPropertyValue(value, "company");    	
  	}
  	
  	public get company(): number | null {
    	return this.getPropertyValue("company");    	
  	}
	public set subType (value: string | null) {
    	this.setPropertyValue(value, "subType");    	
  	}
  	
  	public get subType(): string | null {
    	return this.getPropertyValue("subType");    	
  	}
	public set fullName (value: string | null) {
    	this.setPropertyValue(value, "fullName");    	
  	}
  	
  	public get fullName(): string | null {
    	return this.getPropertyValue("fullName");    	
  	}
	public set code (value: string | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): string | null {
    	return this.getPropertyValue("code");    	
  	}
	
}