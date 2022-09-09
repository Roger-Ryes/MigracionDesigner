
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LineGuaranteesAssociatedList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"currency"	,
					"valueMN"	,
					"procedure"	,
					"admissionDate"	,
					"code"	,
					"clasee"	,
					"state"	,
					"guarantee"	,
					"type"	,
					"currentValue"	,
					"initialValue"	,
					"description"	
			];			
			super(undefined,props);
		}   	    
	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set valueMN (value: number | null) {
    	this.setPropertyValue(value, "valueMN");    	
  	}
  	
  	public get valueMN(): number | null {
    	return this.getPropertyValue("valueMN");    	
  	}
	public set procedure (value: number | null) {
    	this.setPropertyValue(value, "procedure");    	
  	}
  	
  	public get procedure(): number | null {
    	return this.getPropertyValue("procedure");    	
  	}
	public set admissionDate (value: string | null) {
    	this.setPropertyValue(value, "admissionDate");    	
  	}
  	
  	public get admissionDate(): string | null {
    	return this.getPropertyValue("admissionDate");    	
  	}
	public set code (value: string | null) {
    	this.setPropertyValue(value, "code");    	
  	}
  	
  	public get code(): string | null {
    	return this.getPropertyValue("code");    	
  	}
	public set clasee (value: string | null) {
    	this.setPropertyValue(value, "clasee");    	
  	}
  	
  	public get clasee(): string | null {
    	return this.getPropertyValue("clasee");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set guarantee (value: string | null) {
    	this.setPropertyValue(value, "guarantee");    	
  	}
  	
  	public get guarantee(): string | null {
    	return this.getPropertyValue("guarantee");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set currentValue (value: number | null) {
    	this.setPropertyValue(value, "currentValue");    	
  	}
  	
  	public get currentValue(): number | null {
    	return this.getPropertyValue("currentValue");    	
  	}
	public set initialValue (value: number | null) {
    	this.setPropertyValue(value, "initialValue");    	
  	}
  	
  	public get initialValue(): number | null {
    	return this.getPropertyValue("initialValue");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	
}