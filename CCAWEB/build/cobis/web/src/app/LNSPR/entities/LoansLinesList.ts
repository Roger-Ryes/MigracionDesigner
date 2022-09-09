
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoansLinesList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amount"	,
					"nature"	,
					"sequential"	,
					"nameClient"	,
					"nameGroup"	,
					"officeCod"	,
					"lineCod"	,
					"coinDesc"	
			];			
			super(undefined,props);
		}   	    
	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set nature (value: string | null) {
    	this.setPropertyValue(value, "nature");    	
  	}
  	
  	public get nature(): string | null {
    	return this.getPropertyValue("nature");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set nameClient (value: string | null) {
    	this.setPropertyValue(value, "nameClient");    	
  	}
  	
  	public get nameClient(): string | null {
    	return this.getPropertyValue("nameClient");    	
  	}
	public set nameGroup (value: string | null) {
    	this.setPropertyValue(value, "nameGroup");    	
  	}
  	
  	public get nameGroup(): string | null {
    	return this.getPropertyValue("nameGroup");    	
  	}
	public set officeCod (value: number | null) {
    	this.setPropertyValue(value, "officeCod");    	
  	}
  	
  	public get officeCod(): number | null {
    	return this.getPropertyValue("officeCod");    	
  	}
	public set lineCod (value: string | null) {
    	this.setPropertyValue(value, "lineCod");    	
  	}
  	
  	public get lineCod(): string | null {
    	return this.getPropertyValue("lineCod");    	
  	}
	public set coinDesc (value: string | null) {
    	this.setPropertyValue(value, "coinDesc");    	
  	}
  	
  	public get coinDesc(): string | null {
    	return this.getPropertyValue("coinDesc");    	
  	}
	
}