
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanPolicy  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"dateEndorsement"	,
					"amountEndorsement"	,
					"coverage"	,
					"sequentialPag"	,
					"description"	,
					"fvalidityStart"	,
					"policy"	,
					"statePolicy"	,
					"currency"	,
					"codeExternal"	,
					"fendorsementEnd"	,
					"amountPolicy"	,
					"fvalidityEnd"	,
					"insurance"	
			];			
			super(undefined,props);
		}   	    
	}
	public set dateEndorsement (value: Date | null) {
    	this.setPropertyValue(value, "dateEndorsement");    	
  	}
  	
  	public get dateEndorsement(): Date | null {
    	return this.getPropertyValue("dateEndorsement");    	
  	}
	public set amountEndorsement (value: number | null) {
    	this.setPropertyValue(value, "amountEndorsement");    	
  	}
  	
  	public get amountEndorsement(): number | null {
    	return this.getPropertyValue("amountEndorsement");    	
  	}
	public set coverage (value: string | null) {
    	this.setPropertyValue(value, "coverage");    	
  	}
  	
  	public get coverage(): string | null {
    	return this.getPropertyValue("coverage");    	
  	}
	public set sequentialPag (value: number | null) {
    	this.setPropertyValue(value, "sequentialPag");    	
  	}
  	
  	public get sequentialPag(): number | null {
    	return this.getPropertyValue("sequentialPag");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set fvalidityStart (value: Date | null) {
    	this.setPropertyValue(value, "fvalidityStart");    	
  	}
  	
  	public get fvalidityStart(): Date | null {
    	return this.getPropertyValue("fvalidityStart");    	
  	}
	public set policy (value: string | null) {
    	this.setPropertyValue(value, "policy");    	
  	}
  	
  	public get policy(): string | null {
    	return this.getPropertyValue("policy");    	
  	}
	public set statePolicy (value: string | null) {
    	this.setPropertyValue(value, "statePolicy");    	
  	}
  	
  	public get statePolicy(): string | null {
    	return this.getPropertyValue("statePolicy");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set codeExternal (value: string | null) {
    	this.setPropertyValue(value, "codeExternal");    	
  	}
  	
  	public get codeExternal(): string | null {
    	return this.getPropertyValue("codeExternal");    	
  	}
	public set fendorsementEnd (value: Date | null) {
    	this.setPropertyValue(value, "fendorsementEnd");    	
  	}
  	
  	public get fendorsementEnd(): Date | null {
    	return this.getPropertyValue("fendorsementEnd");    	
  	}
	public set amountPolicy (value: number | null) {
    	this.setPropertyValue(value, "amountPolicy");    	
  	}
  	
  	public get amountPolicy(): number | null {
    	return this.getPropertyValue("amountPolicy");    	
  	}
	public set fvalidityEnd (value: Date | null) {
    	this.setPropertyValue(value, "fvalidityEnd");    	
  	}
  	
  	public get fvalidityEnd(): Date | null {
    	return this.getPropertyValue("fvalidityEnd");    	
  	}
	public set insurance (value: string | null) {
    	this.setPropertyValue(value, "insurance");    	
  	}
  	
  	public get insurance(): string | null {
    	return this.getPropertyValue("insurance");    	
  	}
	
}