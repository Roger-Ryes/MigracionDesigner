
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanDebtor  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"customerID"	,
					"identityCard"	,
					"role"	,
					"customerName"	,
					"phone"	,
					"address"	,
					"centralCollection"	
			];			
			super(undefined,props);
		}   	    
	}
	public set customerID (value: number | null) {
    	this.setPropertyValue(value, "customerID");    	
  	}
  	
  	public get customerID(): number | null {
    	return this.getPropertyValue("customerID");    	
  	}
	public set identityCard (value: string | null) {
    	this.setPropertyValue(value, "identityCard");    	
  	}
  	
  	public get identityCard(): string | null {
    	return this.getPropertyValue("identityCard");    	
  	}
	public set role (value: string | null) {
    	this.setPropertyValue(value, "role");    	
  	}
  	
  	public get role(): string | null {
    	return this.getPropertyValue("role");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	public set phone (value: string | null) {
    	this.setPropertyValue(value, "phone");    	
  	}
  	
  	public get phone(): string | null {
    	return this.getPropertyValue("phone");    	
  	}
	public set address (value: string | null) {
    	this.setPropertyValue(value, "address");    	
  	}
  	
  	public get address(): string | null {
    	return this.getPropertyValue("address");    	
  	}
	public set centralCollection (value: string | null) {
    	this.setPropertyValue(value, "centralCollection");    	
  	}
  	
  	public get centralCollection(): string | null {
    	return this.getPropertyValue("centralCollection");    	
  	}
	
}