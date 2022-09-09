
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class MemberDetail  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"codeMember"	,
					"controlAmount"	,
					"available"	,
					"used"	,
					"member"	,
					"currency"	,
					"amount"	,
					"observations"	
			];			
			super(undefined,props);
		}   	    
	}
	public set codeMember (value: string | null) {
    	this.setPropertyValue(value, "codeMember");    	
  	}
  	
  	public get codeMember(): string | null {
    	return this.getPropertyValue("codeMember");    	
  	}
	public set controlAmount (value: string | null) {
    	this.setPropertyValue(value, "controlAmount");    	
  	}
  	
  	public get controlAmount(): string | null {
    	return this.getPropertyValue("controlAmount");    	
  	}
	public set available (value: number | null) {
    	this.setPropertyValue(value, "available");    	
  	}
  	
  	public get available(): number | null {
    	return this.getPropertyValue("available");    	
  	}
	public set used (value: number | null) {
    	this.setPropertyValue(value, "used");    	
  	}
  	
  	public get used(): number | null {
    	return this.getPropertyValue("used");    	
  	}
	public set member (value: string | null) {
    	this.setPropertyValue(value, "member");    	
  	}
  	
  	public get member(): string | null {
    	return this.getPropertyValue("member");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set amount (value: string | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): string | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set observations (value: string | null) {
    	this.setPropertyValue(value, "observations");    	
  	}
  	
  	public get observations(): string | null {
    	return this.getPropertyValue("observations");    	
  	}
	
}