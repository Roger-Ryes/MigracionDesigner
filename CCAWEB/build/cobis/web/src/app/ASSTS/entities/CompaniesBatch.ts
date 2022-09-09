
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class CompaniesBatch  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"dateMove"	,
					"sequential"	,
					"filePath"	,
					"description"	,
					"companyName"	,
					"fileUp"	,
					"dateCreate"	,
					"statusId"	,
					"statusName"	,
					"fileMsg"	,
					"company"	,
					"fileError"	,
					"executeOnline"	,
					"fileName"	
			];			
			super(undefined,props);
		}   	    
	}
	public set dateMove (value: Date | null) {
    	this.setPropertyValue(value, "dateMove");    	
  	}
  	
  	public get dateMove(): Date | null {
    	return this.getPropertyValue("dateMove");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set filePath (value: string | null) {
    	this.setPropertyValue(value, "filePath");    	
  	}
  	
  	public get filePath(): string | null {
    	return this.getPropertyValue("filePath");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set companyName (value: string | null) {
    	this.setPropertyValue(value, "companyName");    	
  	}
  	
  	public get companyName(): string | null {
    	return this.getPropertyValue("companyName");    	
  	}
	public set fileUp (value: number | null) {
    	this.setPropertyValue(value, "fileUp");    	
  	}
  	
  	public get fileUp(): number | null {
    	return this.getPropertyValue("fileUp");    	
  	}
	public set dateCreate (value: Date | null) {
    	this.setPropertyValue(value, "dateCreate");    	
  	}
  	
  	public get dateCreate(): Date | null {
    	return this.getPropertyValue("dateCreate");    	
  	}
	public set statusId (value: number | null) {
    	this.setPropertyValue(value, "statusId");    	
  	}
  	
  	public get statusId(): number | null {
    	return this.getPropertyValue("statusId");    	
  	}
	public set statusName (value: string | null) {
    	this.setPropertyValue(value, "statusName");    	
  	}
  	
  	public get statusName(): string | null {
    	return this.getPropertyValue("statusName");    	
  	}
	public set fileMsg (value: string | null) {
    	this.setPropertyValue(value, "fileMsg");    	
  	}
  	
  	public get fileMsg(): string | null {
    	return this.getPropertyValue("fileMsg");    	
  	}
	public set company (value: string | null) {
    	this.setPropertyValue(value, "company");    	
  	}
  	
  	public get company(): string | null {
    	return this.getPropertyValue("company");    	
  	}
	public set fileError (value: number | null) {
    	this.setPropertyValue(value, "fileError");    	
  	}
  	
  	public get fileError(): number | null {
    	return this.getPropertyValue("fileError");    	
  	}
	public set executeOnline (value: string | null) {
    	this.setPropertyValue(value, "executeOnline");    	
  	}
  	
  	public get executeOnline(): string | null {
    	return this.getPropertyValue("executeOnline");    	
  	}
	public set fileName (value: string | null) {
    	this.setPropertyValue(value, "fileName");    	
  	}
  	
  	public get fileName(): string | null {
    	return this.getPropertyValue("fileName");    	
  	}
	
}