
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ExtendsQuotaExt  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"quotaExt"	,
					"startDateExt"	,
					"endDateExt"	,
					"capitalExt"	,
					"interestExt"	,
					"others"	,
					"total"	,
					"state"	
			];			
			super(undefined,props);
		}   	    
	}
	public set quotaExt (value: number | null) {
    	this.setPropertyValue(value, "quotaExt");    	
  	}
  	
  	public get quotaExt(): number | null {
    	return this.getPropertyValue("quotaExt");    	
  	}
	public set startDateExt (value: string | null) {
    	this.setPropertyValue(value, "startDateExt");    	
  	}
  	
  	public get startDateExt(): string | null {
    	return this.getPropertyValue("startDateExt");    	
  	}
	public set endDateExt (value: string | null) {
    	this.setPropertyValue(value, "endDateExt");    	
  	}
  	
  	public get endDateExt(): string | null {
    	return this.getPropertyValue("endDateExt");    	
  	}
	public set capitalExt (value: number | null) {
    	this.setPropertyValue(value, "capitalExt");    	
  	}
  	
  	public get capitalExt(): number | null {
    	return this.getPropertyValue("capitalExt");    	
  	}
	public set interestExt (value: number | null) {
    	this.setPropertyValue(value, "interestExt");    	
  	}
  	
  	public get interestExt(): number | null {
    	return this.getPropertyValue("interestExt");    	
  	}
	public set others (value: number | null) {
    	this.setPropertyValue(value, "others");    	
  	}
  	
  	public get others(): number | null {
    	return this.getPropertyValue("others");    	
  	}
	public set total (value: number | null) {
    	this.setPropertyValue(value, "total");    	
  	}
  	
  	public get total(): number | null {
    	return this.getPropertyValue("total");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	
}