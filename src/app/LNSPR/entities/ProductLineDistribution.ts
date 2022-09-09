
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ProductLineDistribution  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"editionMode"	,
					"sequential"	,
					"opTypeAc"	,
					"observations"	,
					"opTypePas"	,
					"product"	,
					"clientName"	,
					"used"	,
					"available"	,
					"nature"	,
					"codLine"	,
					"currency"	,
					"controlsAmount"	,
					"clientCod"	,
					"amount"	
			];			
			super(undefined,props);
		}   	    
	}
	public set editionMode (value: number | null) {
    	this.setPropertyValue(value, "editionMode");    	
  	}
  	
  	public get editionMode(): number | null {
    	return this.getPropertyValue("editionMode");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set opTypeAc (value: string | null) {
    	this.setPropertyValue(value, "opTypeAc");    	
  	}
  	
  	public get opTypeAc(): string | null {
    	return this.getPropertyValue("opTypeAc");    	
  	}
	public set observations (value: string | null) {
    	this.setPropertyValue(value, "observations");    	
  	}
  	
  	public get observations(): string | null {
    	return this.getPropertyValue("observations");    	
  	}
	public set opTypePas (value: string | null) {
    	this.setPropertyValue(value, "opTypePas");    	
  	}
  	
  	public get opTypePas(): string | null {
    	return this.getPropertyValue("opTypePas");    	
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
	public set nature (value: string | null) {
    	this.setPropertyValue(value, "nature");    	
  	}
  	
  	public get nature(): string | null {
    	return this.getPropertyValue("nature");    	
  	}
	public set codLine (value: string | null) {
    	this.setPropertyValue(value, "codLine");    	
  	}
  	
  	public get codLine(): string | null {
    	return this.getPropertyValue("codLine");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set controlsAmount (value: boolean | null) {
    	this.setPropertyValue(value, "controlsAmount");    	
  	}
  	
  	public get controlsAmount(): boolean | null {
    	return this.getPropertyValue("controlsAmount");    	
  	}
	public set clientCod (value: number | null) {
    	this.setPropertyValue(value, "clientCod");    	
  	}
  	
  	public get clientCod(): number | null {
    	return this.getPropertyValue("clientCod");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	
}