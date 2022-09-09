
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationQuoteDetail  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"item"	,
					"statusItem"	,
					"period"	,
					"quote"	,
					"grace"	,
					"paid"	,
					"accumulated"	,
					"sequential"	,
					"titleForm"	
			];			
			super(undefined,props);
		}   	    
	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set statusItem (value: string | null) {
    	this.setPropertyValue(value, "statusItem");    	
  	}
  	
  	public get statusItem(): string | null {
    	return this.getPropertyValue("statusItem");    	
  	}
	public set period (value: number | null) {
    	this.setPropertyValue(value, "period");    	
  	}
  	
  	public get period(): number | null {
    	return this.getPropertyValue("period");    	
  	}
	public set quote (value: number | null) {
    	this.setPropertyValue(value, "quote");    	
  	}
  	
  	public get quote(): number | null {
    	return this.getPropertyValue("quote");    	
  	}
	public set grace (value: number | null) {
    	this.setPropertyValue(value, "grace");    	
  	}
  	
  	public get grace(): number | null {
    	return this.getPropertyValue("grace");    	
  	}
	public set paid (value: number | null) {
    	this.setPropertyValue(value, "paid");    	
  	}
  	
  	public get paid(): number | null {
    	return this.getPropertyValue("paid");    	
  	}
	public set accumulated (value: number | null) {
    	this.setPropertyValue(value, "accumulated");    	
  	}
  	
  	public get accumulated(): number | null {
    	return this.getPropertyValue("accumulated");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set titleForm (value: string | null) {
    	this.setPropertyValue(value, "titleForm");    	
  	}
  	
  	public get titleForm(): string | null {
    	return this.getPropertyValue("titleForm");    	
  	}
	
}