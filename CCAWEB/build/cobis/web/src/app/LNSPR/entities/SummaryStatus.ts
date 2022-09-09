
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class SummaryStatus  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"available"	,
					"currencyQuote"	,
					"codMoney"	,
					"descMoney"	,
					"approved"	,
					"product"	,
					"used"	
			];			
			super(undefined,props);
		}   	    
	}
	public set available (value: number | null) {
    	this.setPropertyValue(value, "available");    	
  	}
  	
  	public get available(): number | null {
    	return this.getPropertyValue("available");    	
  	}
	public set currencyQuote (value: number | null) {
    	this.setPropertyValue(value, "currencyQuote");    	
  	}
  	
  	public get currencyQuote(): number | null {
    	return this.getPropertyValue("currencyQuote");    	
  	}
	public set codMoney (value: number | null) {
    	this.setPropertyValue(value, "codMoney");    	
  	}
  	
  	public get codMoney(): number | null {
    	return this.getPropertyValue("codMoney");    	
  	}
	public set descMoney (value: string | null) {
    	this.setPropertyValue(value, "descMoney");    	
  	}
  	
  	public get descMoney(): string | null {
    	return this.getPropertyValue("descMoney");    	
  	}
	public set approved (value: number | null) {
    	this.setPropertyValue(value, "approved");    	
  	}
  	
  	public get approved(): number | null {
    	return this.getPropertyValue("approved");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
  	}
	public set used (value: number | null) {
    	this.setPropertyValue(value, "used");    	
  	}
  	
  	public get used(): number | null {
    	return this.getPropertyValue("used");    	
  	}
	
}