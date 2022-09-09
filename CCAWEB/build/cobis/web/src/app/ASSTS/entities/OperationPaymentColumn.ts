
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OperationPaymentColumn  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"attribute1"	,
					"attribute2"	,
					"attribute3"	,
					"attribute4"	,
					"attribute5"	,
					"attribute6"	,
					"attribute7"	,
					"attribute8"	,
					"attribute9"	,
					"attribute10"	,
					"attribute11"	,
					"attribute12"	,
					"attribute13"	,
					"attribute14"	,
					"attribute15"	,
					"attribute16"	,
					"attribute17"	,
					"attribute18"	,
					"attribute19"	
			];			
			super(undefined,props);
		}   	    
	}
	public set attribute1 (value: string | null) {
    	this.setPropertyValue(value, "attribute1");    	
  	}
  	
  	public get attribute1(): string | null {
    	return this.getPropertyValue("attribute1");    	
  	}
	public set attribute2 (value: string | null) {
    	this.setPropertyValue(value, "attribute2");    	
  	}
  	
  	public get attribute2(): string | null {
    	return this.getPropertyValue("attribute2");    	
  	}
	public set attribute3 (value: string | null) {
    	this.setPropertyValue(value, "attribute3");    	
  	}
  	
  	public get attribute3(): string | null {
    	return this.getPropertyValue("attribute3");    	
  	}
	public set attribute4 (value: string | null) {
    	this.setPropertyValue(value, "attribute4");    	
  	}
  	
  	public get attribute4(): string | null {
    	return this.getPropertyValue("attribute4");    	
  	}
	public set attribute5 (value: string | null) {
    	this.setPropertyValue(value, "attribute5");    	
  	}
  	
  	public get attribute5(): string | null {
    	return this.getPropertyValue("attribute5");    	
  	}
	public set attribute6 (value: string | null) {
    	this.setPropertyValue(value, "attribute6");    	
  	}
  	
  	public get attribute6(): string | null {
    	return this.getPropertyValue("attribute6");    	
  	}
	public set attribute7 (value: string | null) {
    	this.setPropertyValue(value, "attribute7");    	
  	}
  	
  	public get attribute7(): string | null {
    	return this.getPropertyValue("attribute7");    	
  	}
	public set attribute8 (value: string | null) {
    	this.setPropertyValue(value, "attribute8");    	
  	}
  	
  	public get attribute8(): string | null {
    	return this.getPropertyValue("attribute8");    	
  	}
	public set attribute9 (value: string | null) {
    	this.setPropertyValue(value, "attribute9");    	
  	}
  	
  	public get attribute9(): string | null {
    	return this.getPropertyValue("attribute9");    	
  	}
	public set attribute10 (value: string | null) {
    	this.setPropertyValue(value, "attribute10");    	
  	}
  	
  	public get attribute10(): string | null {
    	return this.getPropertyValue("attribute10");    	
  	}
	public set attribute11 (value: string | null) {
    	this.setPropertyValue(value, "attribute11");    	
  	}
  	
  	public get attribute11(): string | null {
    	return this.getPropertyValue("attribute11");    	
  	}
	public set attribute12 (value: string | null) {
    	this.setPropertyValue(value, "attribute12");    	
  	}
  	
  	public get attribute12(): string | null {
    	return this.getPropertyValue("attribute12");    	
  	}
	public set attribute13 (value: string | null) {
    	this.setPropertyValue(value, "attribute13");    	
  	}
  	
  	public get attribute13(): string | null {
    	return this.getPropertyValue("attribute13");    	
  	}
	public set attribute14 (value: string | null) {
    	this.setPropertyValue(value, "attribute14");    	
  	}
  	
  	public get attribute14(): string | null {
    	return this.getPropertyValue("attribute14");    	
  	}
	public set attribute15 (value: string | null) {
    	this.setPropertyValue(value, "attribute15");    	
  	}
  	
  	public get attribute15(): string | null {
    	return this.getPropertyValue("attribute15");    	
  	}
	public set attribute16 (value: string | null) {
    	this.setPropertyValue(value, "attribute16");    	
  	}
  	
  	public get attribute16(): string | null {
    	return this.getPropertyValue("attribute16");    	
  	}
	public set attribute17 (value: string | null) {
    	this.setPropertyValue(value, "attribute17");    	
  	}
  	
  	public get attribute17(): string | null {
    	return this.getPropertyValue("attribute17");    	
  	}
	public set attribute18 (value: string | null) {
    	this.setPropertyValue(value, "attribute18");    	
  	}
  	
  	public get attribute18(): string | null {
    	return this.getPropertyValue("attribute18");    	
  	}
	public set attribute19 (value: string | null) {
    	this.setPropertyValue(value, "attribute19");    	
  	}
  	
  	public get attribute19(): string | null {
    	return this.getPropertyValue("attribute19");    	
  	}
	
}