
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class MassivePayments  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"valuePay"	,
					"numberAccount"	,
					"endLotePM"	,
					"currencyPayment"	,
					"filePM"	,
					"customerName"	,
					"formPayment"	,
					"sequentialPM"	,
					"errorPM"	,
					"description"	,
					"lotePM"	,
					"datePayment"	,
					"numberBank"	
			];			
			super(undefined,props);
		}   	    
	}
	public set valuePay (value: string | null) {
    	this.setPropertyValue(value, "valuePay");    	
  	}
  	
  	public get valuePay(): string | null {
    	return this.getPropertyValue("valuePay");    	
  	}
	public set numberAccount (value: string | null) {
    	this.setPropertyValue(value, "numberAccount");    	
  	}
  	
  	public get numberAccount(): string | null {
    	return this.getPropertyValue("numberAccount");    	
  	}
	public set endLotePM (value: string | null) {
    	this.setPropertyValue(value, "endLotePM");    	
  	}
  	
  	public get endLotePM(): string | null {
    	return this.getPropertyValue("endLotePM");    	
  	}
	public set currencyPayment (value: number | null) {
    	this.setPropertyValue(value, "currencyPayment");    	
  	}
  	
  	public get currencyPayment(): number | null {
    	return this.getPropertyValue("currencyPayment");    	
  	}
	public set filePM (value: string | null) {
    	this.setPropertyValue(value, "filePM");    	
  	}
  	
  	public get filePM(): string | null {
    	return this.getPropertyValue("filePM");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	public set formPayment (value: string | null) {
    	this.setPropertyValue(value, "formPayment");    	
  	}
  	
  	public get formPayment(): string | null {
    	return this.getPropertyValue("formPayment");    	
  	}
	public set sequentialPM (value: number | null) {
    	this.setPropertyValue(value, "sequentialPM");    	
  	}
  	
  	public get sequentialPM(): number | null {
    	return this.getPropertyValue("sequentialPM");    	
  	}
	public set errorPM (value: string | null) {
    	this.setPropertyValue(value, "errorPM");    	
  	}
  	
  	public get errorPM(): string | null {
    	return this.getPropertyValue("errorPM");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set lotePM (value: number | null) {
    	this.setPropertyValue(value, "lotePM");    	
  	}
  	
  	public get lotePM(): number | null {
    	return this.getPropertyValue("lotePM");    	
  	}
	public set datePayment (value: Date | null) {
    	this.setPropertyValue(value, "datePayment");    	
  	}
  	
  	public get datePayment(): Date | null {
    	return this.getPropertyValue("datePayment");    	
  	}
	public set numberBank (value: string | null) {
    	this.setPropertyValue(value, "numberBank");    	
  	}
  	
  	public get numberBank(): string | null {
    	return this.getPropertyValue("numberBank");    	
  	}
	
}