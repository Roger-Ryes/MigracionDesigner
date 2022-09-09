
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationTableFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientNum"	,
					"operationType"	,
					"rate"	,
					"monthyInterestRate"	,
					"actualDate"	,
					"beginDateMonth"	,
					"creditNum"	,
					"clientName"	,
					"cashRecieved"	,
					"reca"	,
					"city"	,
					"regionalAddress"	,
					"beginDateYear"	,
					"beginDateDay"	,
					"monthlyInterestRateText"	,
					"delegation"	,
					"period"	,
					"colony"	,
					"creditAmount"	,
					"state"	,
					"clientAddress"	,
					"totalAmount"	,
					"totalAmountText"	,
					"subsidiary"	,
					"officeState"	,
					"originationExpense"	,
					"address"	,
					"frequency"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientNum (value: number | null) {
    	this.setPropertyValue(value, "clientNum");    	
  	}
  	
  	public get clientNum(): number | null {
    	return this.getPropertyValue("clientNum");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set rate (value: number | null) {
    	this.setPropertyValue(value, "rate");    	
  	}
  	
  	public get rate(): number | null {
    	return this.getPropertyValue("rate");    	
  	}
	public set monthyInterestRate (value: number | null) {
    	this.setPropertyValue(value, "monthyInterestRate");    	
  	}
  	
  	public get monthyInterestRate(): number | null {
    	return this.getPropertyValue("monthyInterestRate");    	
  	}
	public set actualDate (value: Date | null) {
    	this.setPropertyValue(value, "actualDate");    	
  	}
  	
  	public get actualDate(): Date | null {
    	return this.getPropertyValue("actualDate");    	
  	}
	public set beginDateMonth (value: number | null) {
    	this.setPropertyValue(value, "beginDateMonth");    	
  	}
  	
  	public get beginDateMonth(): number | null {
    	return this.getPropertyValue("beginDateMonth");    	
  	}
	public set creditNum (value: string | null) {
    	this.setPropertyValue(value, "creditNum");    	
  	}
  	
  	public get creditNum(): string | null {
    	return this.getPropertyValue("creditNum");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set cashRecieved (value: number | null) {
    	this.setPropertyValue(value, "cashRecieved");    	
  	}
  	
  	public get cashRecieved(): number | null {
    	return this.getPropertyValue("cashRecieved");    	
  	}
	public set reca (value: string | null) {
    	this.setPropertyValue(value, "reca");    	
  	}
  	
  	public get reca(): string | null {
    	return this.getPropertyValue("reca");    	
  	}
	public set city (value: string | null) {
    	this.setPropertyValue(value, "city");    	
  	}
  	
  	public get city(): string | null {
    	return this.getPropertyValue("city");    	
  	}
	public set regionalAddress (value: string | null) {
    	this.setPropertyValue(value, "regionalAddress");    	
  	}
  	
  	public get regionalAddress(): string | null {
    	return this.getPropertyValue("regionalAddress");    	
  	}
	public set beginDateYear (value: number | null) {
    	this.setPropertyValue(value, "beginDateYear");    	
  	}
  	
  	public get beginDateYear(): number | null {
    	return this.getPropertyValue("beginDateYear");    	
  	}
	public set beginDateDay (value: number | null) {
    	this.setPropertyValue(value, "beginDateDay");    	
  	}
  	
  	public get beginDateDay(): number | null {
    	return this.getPropertyValue("beginDateDay");    	
  	}
	public set monthlyInterestRateText (value: string | null) {
    	this.setPropertyValue(value, "monthlyInterestRateText");    	
  	}
  	
  	public get monthlyInterestRateText(): string | null {
    	return this.getPropertyValue("monthlyInterestRateText");    	
  	}
	public set delegation (value: string | null) {
    	this.setPropertyValue(value, "delegation");    	
  	}
  	
  	public get delegation(): string | null {
    	return this.getPropertyValue("delegation");    	
  	}
	public set period (value: string | null) {
    	this.setPropertyValue(value, "period");    	
  	}
  	
  	public get period(): string | null {
    	return this.getPropertyValue("period");    	
  	}
	public set colony (value: string | null) {
    	this.setPropertyValue(value, "colony");    	
  	}
  	
  	public get colony(): string | null {
    	return this.getPropertyValue("colony");    	
  	}
	public set creditAmount (value: number | null) {
    	this.setPropertyValue(value, "creditAmount");    	
  	}
  	
  	public get creditAmount(): number | null {
    	return this.getPropertyValue("creditAmount");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set clientAddress (value: string | null) {
    	this.setPropertyValue(value, "clientAddress");    	
  	}
  	
  	public get clientAddress(): string | null {
    	return this.getPropertyValue("clientAddress");    	
  	}
	public set totalAmount (value: number | null) {
    	this.setPropertyValue(value, "totalAmount");    	
  	}
  	
  	public get totalAmount(): number | null {
    	return this.getPropertyValue("totalAmount");    	
  	}
	public set totalAmountText (value: string | null) {
    	this.setPropertyValue(value, "totalAmountText");    	
  	}
  	
  	public get totalAmountText(): string | null {
    	return this.getPropertyValue("totalAmountText");    	
  	}
	public set subsidiary (value: number | null) {
    	this.setPropertyValue(value, "subsidiary");    	
  	}
  	
  	public get subsidiary(): number | null {
    	return this.getPropertyValue("subsidiary");    	
  	}
	public set officeState (value: string | null) {
    	this.setPropertyValue(value, "officeState");    	
  	}
  	
  	public get officeState(): string | null {
    	return this.getPropertyValue("officeState");    	
  	}
	public set originationExpense (value: number | null) {
    	this.setPropertyValue(value, "originationExpense");    	
  	}
  	
  	public get originationExpense(): number | null {
    	return this.getPropertyValue("originationExpense");    	
  	}
	public set address (value: string | null) {
    	this.setPropertyValue(value, "address");    	
  	}
  	
  	public get address(): string | null {
    	return this.getPropertyValue("address");    	
  	}
	public set frequency (value: number | null) {
    	this.setPropertyValue(value, "frequency");    	
  	}
  	
  	public get frequency(): number | null {
    	return this.getPropertyValue("frequency");    	
  	}
	
}