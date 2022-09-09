
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ProductLineDistributionList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientCod"	,
					"codCurrency"	,
					"used"	,
					"product"	,
					"clientName"	,
					"sequential"	,
					"observations"	,
					"available"	,
					"controlsAmount"	,
					"descCurrency"	,
					"amount"	,
					"opType"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientCod (value: number | null) {
    	this.setPropertyValue(value, "clientCod");    	
  	}
  	
  	public get clientCod(): number | null {
    	return this.getPropertyValue("clientCod");    	
  	}
	public set codCurrency (value: number | null) {
    	this.setPropertyValue(value, "codCurrency");    	
  	}
  	
  	public get codCurrency(): number | null {
    	return this.getPropertyValue("codCurrency");    	
  	}
	public set used (value: number | null) {
    	this.setPropertyValue(value, "used");    	
  	}
  	
  	public get used(): number | null {
    	return this.getPropertyValue("used");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set observations (value: string | null) {
    	this.setPropertyValue(value, "observations");    	
  	}
  	
  	public get observations(): string | null {
    	return this.getPropertyValue("observations");    	
  	}
	public set available (value: number | null) {
    	this.setPropertyValue(value, "available");    	
  	}
  	
  	public get available(): number | null {
    	return this.getPropertyValue("available");    	
  	}
	public set controlsAmount (value: string | null) {
    	this.setPropertyValue(value, "controlsAmount");    	
  	}
  	
  	public get controlsAmount(): string | null {
    	return this.getPropertyValue("controlsAmount");    	
  	}
	public set descCurrency (value: string | null) {
    	this.setPropertyValue(value, "descCurrency");    	
  	}
  	
  	public get descCurrency(): string | null {
    	return this.getPropertyValue("descCurrency");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set opType (value: string | null) {
    	this.setPropertyValue(value, "opType");    	
  	}
  	
  	public get opType(): string | null {
    	return this.getPropertyValue("opType");    	
  	}
	
}