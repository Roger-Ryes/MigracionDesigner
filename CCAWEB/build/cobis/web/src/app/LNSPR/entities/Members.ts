
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Members  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"used"	,
					"codLine"	,
					"control"	,
					"observations"	,
					"currency"	,
					"memberName"	,
					"editionMode"	,
					"member"	,
					"sequential"	,
					"amount"	,
					"available"	
			];			
			super(undefined,props);
		}   	    
	}
	public set used (value: number | null) {
    	this.setPropertyValue(value, "used");    	
  	}
  	
  	public get used(): number | null {
    	return this.getPropertyValue("used");    	
  	}
	public set codLine (value: string | null) {
    	this.setPropertyValue(value, "codLine");    	
  	}
  	
  	public get codLine(): string | null {
    	return this.getPropertyValue("codLine");    	
  	}
	public set control (value: string | null) {
    	this.setPropertyValue(value, "control");    	
  	}
  	
  	public get control(): string | null {
    	return this.getPropertyValue("control");    	
  	}
	public set observations (value: string | null) {
    	this.setPropertyValue(value, "observations");    	
  	}
  	
  	public get observations(): string | null {
    	return this.getPropertyValue("observations");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set memberName (value: string | null) {
    	this.setPropertyValue(value, "memberName");    	
  	}
  	
  	public get memberName(): string | null {
    	return this.getPropertyValue("memberName");    	
  	}
	public set editionMode (value: number | null) {
    	this.setPropertyValue(value, "editionMode");    	
  	}
  	
  	public get editionMode(): number | null {
    	return this.getPropertyValue("editionMode");    	
  	}
	public set member (value: string | null) {
    	this.setPropertyValue(value, "member");    	
  	}
  	
  	public get member(): string | null {
    	return this.getPropertyValue("member");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set available (value: number | null) {
    	this.setPropertyValue(value, "available");    	
  	}
  	
  	public get available(): number | null {
    	return this.getPropertyValue("available");    	
  	}
	
}