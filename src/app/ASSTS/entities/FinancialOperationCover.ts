
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class FinancialOperationCover  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"codOperationType"	,
					"firm"	,
					"cat"	,
					"solidary2"	,
					"creditNum"	,
					"clientNum"	,
					"clarificationsPhone"	,
					"creditFrequency"	,
					"clarificationsAddress"	,
					"operationType"	,
					"totalAmount"	,
					"ordinaryRate"	,
					"solidary1"	,
					"paymentDate"	,
					"email"	,
					"internetPage"	,
					"reca"	,
					"creditAmount"	,
					"subsidiary"	,
					"clientName"	,
					"moratoriumRate"	
			];			
			super(undefined,props);
		}   	    
	}
	public set codOperationType (value: string | null) {
    	this.setPropertyValue(value, "codOperationType");    	
  	}
  	
  	public get codOperationType(): string | null {
    	return this.getPropertyValue("codOperationType");    	
  	}
	public set firm (value: string | null) {
    	this.setPropertyValue(value, "firm");    	
  	}
  	
  	public get firm(): string | null {
    	return this.getPropertyValue("firm");    	
  	}
	public set cat (value: number | null) {
    	this.setPropertyValue(value, "cat");    	
  	}
  	
  	public get cat(): number | null {
    	return this.getPropertyValue("cat");    	
  	}
	public set solidary2 (value: string | null) {
    	this.setPropertyValue(value, "solidary2");    	
  	}
  	
  	public get solidary2(): string | null {
    	return this.getPropertyValue("solidary2");    	
  	}
	public set creditNum (value: string | null) {
    	this.setPropertyValue(value, "creditNum");    	
  	}
  	
  	public get creditNum(): string | null {
    	return this.getPropertyValue("creditNum");    	
  	}
	public set clientNum (value: number | null) {
    	this.setPropertyValue(value, "clientNum");    	
  	}
  	
  	public get clientNum(): number | null {
    	return this.getPropertyValue("clientNum");    	
  	}
	public set clarificationsPhone (value: string | null) {
    	this.setPropertyValue(value, "clarificationsPhone");    	
  	}
  	
  	public get clarificationsPhone(): string | null {
    	return this.getPropertyValue("clarificationsPhone");    	
  	}
	public set creditFrequency (value: string | null) {
    	this.setPropertyValue(value, "creditFrequency");    	
  	}
  	
  	public get creditFrequency(): string | null {
    	return this.getPropertyValue("creditFrequency");    	
  	}
	public set clarificationsAddress (value: string | null) {
    	this.setPropertyValue(value, "clarificationsAddress");    	
  	}
  	
  	public get clarificationsAddress(): string | null {
    	return this.getPropertyValue("clarificationsAddress");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set totalAmount (value: number | null) {
    	this.setPropertyValue(value, "totalAmount");    	
  	}
  	
  	public get totalAmount(): number | null {
    	return this.getPropertyValue("totalAmount");    	
  	}
	public set ordinaryRate (value: number | null) {
    	this.setPropertyValue(value, "ordinaryRate");    	
  	}
  	
  	public get ordinaryRate(): number | null {
    	return this.getPropertyValue("ordinaryRate");    	
  	}
	public set solidary1 (value: string | null) {
    	this.setPropertyValue(value, "solidary1");    	
  	}
  	
  	public get solidary1(): string | null {
    	return this.getPropertyValue("solidary1");    	
  	}
	public set paymentDate (value: string | null) {
    	this.setPropertyValue(value, "paymentDate");    	
  	}
  	
  	public get paymentDate(): string | null {
    	return this.getPropertyValue("paymentDate");    	
  	}
	public set email (value: string | null) {
    	this.setPropertyValue(value, "email");    	
  	}
  	
  	public get email(): string | null {
    	return this.getPropertyValue("email");    	
  	}
	public set internetPage (value: string | null) {
    	this.setPropertyValue(value, "internetPage");    	
  	}
  	
  	public get internetPage(): string | null {
    	return this.getPropertyValue("internetPage");    	
  	}
	public set reca (value: string | null) {
    	this.setPropertyValue(value, "reca");    	
  	}
  	
  	public get reca(): string | null {
    	return this.getPropertyValue("reca");    	
  	}
	public set creditAmount (value: number | null) {
    	this.setPropertyValue(value, "creditAmount");    	
  	}
  	
  	public get creditAmount(): number | null {
    	return this.getPropertyValue("creditAmount");    	
  	}
	public set subsidiary (value: number | null) {
    	this.setPropertyValue(value, "subsidiary");    	
  	}
  	
  	public get subsidiary(): number | null {
    	return this.getPropertyValue("subsidiary");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set moratoriumRate (value: number | null) {
    	this.setPropertyValue(value, "moratoriumRate");    	
  	}
  	
  	public get moratoriumRate(): number | null {
    	return this.getPropertyValue("moratoriumRate");    	
  	}
	
}