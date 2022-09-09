
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class PaymentMethod  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"cobisProduct"	,
					"description"	,
					"retention"	,
					"category"	,
					"product"	
			];			
			super(undefined,props);
		}   	    
	}
	public set cobisProduct (value: string | null) {
    	this.setPropertyValue(value, "cobisProduct");    	
  	}
  	
  	public get cobisProduct(): string | null {
    	return this.getPropertyValue("cobisProduct");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set retention (value: number | null) {
    	this.setPropertyValue(value, "retention");    	
  	}
  	
  	public get retention(): number | null {
    	return this.getPropertyValue("retention");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
  	}
	
}