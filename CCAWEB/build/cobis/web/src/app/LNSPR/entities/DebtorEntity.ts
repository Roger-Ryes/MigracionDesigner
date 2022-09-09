
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DebtorEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"code"	,
					"idNumber"	,
					"fullName"	,
					"type"	,
					"description"	,
					"role"	,
					"score"	
			];			
			super(undefined,props);
		}   	    
	}
	public set code (value: number | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): number | null {
    	return this.getPropertyValue("code");    	
  	}
	public set idNumber (value: string | null) {
    	this.setPropertyValue(value, "idNumber");    	
  	}
  	
  	public get idNumber(): string | null {
    	return this.getPropertyValue("idNumber");    	
  	}
	public set fullName (value: string | null) {
    	this.setPropertyValue(value, "fullName");    	
  	}
  	
  	public get fullName(): string | null {
    	return this.getPropertyValue("fullName");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set role (value: string | null) {
    	this.setPropertyValue(value, "role");    	
  	}
  	
  	public get role(): string | null {
    	return this.getPropertyValue("role");    	
  	}
	public set score (value: string | null) {
    	this.setPropertyValue(value, "score");    	
  	}
  	
  	public get score(): string | null {
    	return this.getPropertyValue("score");    	
  	}
	
}