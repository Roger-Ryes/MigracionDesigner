
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class SummaryMembers  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"codMember"	,
					"nameMember"	,
					"codMoney"	,
					"desMoney"	,
					"approved"	,
					"used"	,
					"available"	,
					"quote"	
			];			
			super(undefined,props);
		}   	    
	}
	public set codMember (value: number | null) {
    	this.setPropertyValue(value, "codMember");    	
  	}
  	
  	public get codMember(): number | null {
    	return this.getPropertyValue("codMember");    	
  	}
	public set nameMember (value: string | null) {
    	this.setPropertyValue(value, "nameMember");    	
  	}
  	
  	public get nameMember(): string | null {
    	return this.getPropertyValue("nameMember");    	
  	}
	public set codMoney (value: number | null) {
    	this.setPropertyValue(value, "codMoney");    	
  	}
  	
  	public get codMoney(): number | null {
    	return this.getPropertyValue("codMoney");    	
  	}
	public set desMoney (value: string | null) {
    	this.setPropertyValue(value, "desMoney");    	
  	}
  	
  	public get desMoney(): string | null {
    	return this.getPropertyValue("desMoney");    	
  	}
	public set approved (value: number | null) {
    	this.setPropertyValue(value, "approved");    	
  	}
  	
  	public get approved(): number | null {
    	return this.getPropertyValue("approved");    	
  	}
	public set used (value: number | null) {
    	this.setPropertyValue(value, "used");    	
  	}
  	
  	public get used(): number | null {
    	return this.getPropertyValue("used");    	
  	}
	public set available (value: number | null) {
    	this.setPropertyValue(value, "available");    	
  	}
  	
  	public get available(): number | null {
    	return this.getPropertyValue("available");    	
  	}
	public set quote (value: number | null) {
    	this.setPropertyValue(value, "quote");    	
  	}
  	
  	public get quote(): number | null {
    	return this.getPropertyValue("quote");    	
  	}
	
}