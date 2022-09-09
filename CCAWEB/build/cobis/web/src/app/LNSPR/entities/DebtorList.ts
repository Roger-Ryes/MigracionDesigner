
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DebtorList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientName"	,
					"clientMain"	,
					"operation"	,
					"clientId"	,
					"clientMainId"	,
					"centralRisk"	,
					"sysSession"	,
					"sequential"	,
					"clientRol"	,
					"sysUser"	,
					"clientMainName"	,
					"client"	,
					"clientOperation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set clientMain (value: number | null) {
    	this.setPropertyValue(value, "clientMain");    	
  	}
  	
  	public get clientMain(): number | null {
    	return this.getPropertyValue("clientMain");    	
  	}
	public set operation (value: number | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): number | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set clientId (value: string | null) {
    	this.setPropertyValue(value, "clientId");    	
  	}
  	
  	public get clientId(): string | null {
    	return this.getPropertyValue("clientId");    	
  	}
	public set clientMainId (value: string | null) {
    	this.setPropertyValue(value, "clientMainId");    	
  	}
  	
  	public get clientMainId(): string | null {
    	return this.getPropertyValue("clientMainId");    	
  	}
	public set centralRisk (value: string | null) {
    	this.setPropertyValue(value, "centralRisk");    	
  	}
  	
  	public get centralRisk(): string | null {
    	return this.getPropertyValue("centralRisk");    	
  	}
	public set sysSession (value: number | null) {
    	this.setPropertyValue(value, "sysSession");    	
  	}
  	
  	public get sysSession(): number | null {
    	return this.getPropertyValue("sysSession");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set clientRol (value: string | null) {
    	this.setPropertyValue(value, "clientRol");    	
  	}
  	
  	public get clientRol(): string | null {
    	return this.getPropertyValue("clientRol");    	
  	}
	public set sysUser (value: string | null) {
    	this.setPropertyValue(value, "sysUser");    	
  	}
  	
  	public get sysUser(): string | null {
    	return this.getPropertyValue("sysUser");    	
  	}
	public set clientMainName (value: string | null) {
    	this.setPropertyValue(value, "clientMainName");    	
  	}
  	
  	public get clientMainName(): string | null {
    	return this.getPropertyValue("clientMainName");    	
  	}
	public set client (value: number | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): number | null {
    	return this.getPropertyValue("client");    	
  	}
	public set clientOperation (value: string | null) {
    	this.setPropertyValue(value, "clientOperation");    	
  	}
  	
  	public get clientOperation(): string | null {
    	return this.getPropertyValue("clientOperation");    	
  	}
	
}