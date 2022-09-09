
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AccountStatusTecFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"officeName"	,
					"paymentDate"	,
					"url2"	,
					"colony"	,
					"regionalPhone"	,
					"cat"	,
					"regionalAddress"	,
					"street"	,
					"operationType"	,
					"completeName"	,
					"bankRfc"	,
					"secondarySurname"	,
					"companyData1"	,
					"companyData2"	,
					"url3"	,
					"city"	,
					"surname"	,
					"loanState"	,
					"tipoCredito"	,
					"paymentToSettle"	,
					"moratoriumInterest"	,
					"beginDate"	,
					"pastDueBalance"	,
					"url1"	,
					"province"	,
					"actualQuote"	,
					"rate"	,
					"officeAddress"	,
					"minimumPayment"	,
					"clientName"	,
					"amount"	,
					"clientPhone"	,
					"outdoorNumber"	,
					"locationAddress"	,
					"officePhone"	
			];			
			super(undefined,props);
		}   	    
	}
	public set officeName (value: string | null) {
    	this.setPropertyValue(value, "officeName");    	
  	}
  	
  	public get officeName(): string | null {
    	return this.getPropertyValue("officeName");    	
  	}
	public set paymentDate (value: string | null) {
    	this.setPropertyValue(value, "paymentDate");    	
  	}
  	
  	public get paymentDate(): string | null {
    	return this.getPropertyValue("paymentDate");    	
  	}
	public set url2 (value: string | null) {
    	this.setPropertyValue(value, "url2");    	
  	}
  	
  	public get url2(): string | null {
    	return this.getPropertyValue("url2");    	
  	}
	public set colony (value: string | null) {
    	this.setPropertyValue(value, "colony");    	
  	}
  	
  	public get colony(): string | null {
    	return this.getPropertyValue("colony");    	
  	}
	public set regionalPhone (value: string | null) {
    	this.setPropertyValue(value, "regionalPhone");    	
  	}
  	
  	public get regionalPhone(): string | null {
    	return this.getPropertyValue("regionalPhone");    	
  	}
	public set cat (value: number | null) {
    	this.setPropertyValue(value, "cat");    	
  	}
  	
  	public get cat(): number | null {
    	return this.getPropertyValue("cat");    	
  	}
	public set regionalAddress (value: string | null) {
    	this.setPropertyValue(value, "regionalAddress");    	
  	}
  	
  	public get regionalAddress(): string | null {
    	return this.getPropertyValue("regionalAddress");    	
  	}
	public set street (value: string | null) {
    	this.setPropertyValue(value, "street");    	
  	}
  	
  	public get street(): string | null {
    	return this.getPropertyValue("street");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set completeName (value: string | null) {
    	this.setPropertyValue(value, "completeName");    	
  	}
  	
  	public get completeName(): string | null {
    	return this.getPropertyValue("completeName");    	
  	}
	public set bankRfc (value: string | null) {
    	this.setPropertyValue(value, "bankRfc");    	
  	}
  	
  	public get bankRfc(): string | null {
    	return this.getPropertyValue("bankRfc");    	
  	}
	public set secondarySurname (value: string | null) {
    	this.setPropertyValue(value, "secondarySurname");    	
  	}
  	
  	public get secondarySurname(): string | null {
    	return this.getPropertyValue("secondarySurname");    	
  	}
	public set companyData1 (value: string | null) {
    	this.setPropertyValue(value, "companyData1");    	
  	}
  	
  	public get companyData1(): string | null {
    	return this.getPropertyValue("companyData1");    	
  	}
	public set companyData2 (value: string | null) {
    	this.setPropertyValue(value, "companyData2");    	
  	}
  	
  	public get companyData2(): string | null {
    	return this.getPropertyValue("companyData2");    	
  	}
	public set url3 (value: string | null) {
    	this.setPropertyValue(value, "url3");    	
  	}
  	
  	public get url3(): string | null {
    	return this.getPropertyValue("url3");    	
  	}
	public set city (value: string | null) {
    	this.setPropertyValue(value, "city");    	
  	}
  	
  	public get city(): string | null {
    	return this.getPropertyValue("city");    	
  	}
	public set surname (value: string | null) {
    	this.setPropertyValue(value, "surname");    	
  	}
  	
  	public get surname(): string | null {
    	return this.getPropertyValue("surname");    	
  	}
	public set loanState (value: string | null) {
    	this.setPropertyValue(value, "loanState");    	
  	}
  	
  	public get loanState(): string | null {
    	return this.getPropertyValue("loanState");    	
  	}
	public set tipoCredito (value: string | null) {
    	this.setPropertyValue(value, "tipoCredito");    	
  	}
  	
  	public get tipoCredito(): string | null {
    	return this.getPropertyValue("tipoCredito");    	
  	}
	public set paymentToSettle (value: number | null) {
    	this.setPropertyValue(value, "paymentToSettle");    	
  	}
  	
  	public get paymentToSettle(): number | null {
    	return this.getPropertyValue("paymentToSettle");    	
  	}
	public set moratoriumInterest (value: number | null) {
    	this.setPropertyValue(value, "moratoriumInterest");    	
  	}
  	
  	public get moratoriumInterest(): number | null {
    	return this.getPropertyValue("moratoriumInterest");    	
  	}
	public set beginDate (value: string | null) {
    	this.setPropertyValue(value, "beginDate");    	
  	}
  	
  	public get beginDate(): string | null {
    	return this.getPropertyValue("beginDate");    	
  	}
	public set pastDueBalance (value: number | null) {
    	this.setPropertyValue(value, "pastDueBalance");    	
  	}
  	
  	public get pastDueBalance(): number | null {
    	return this.getPropertyValue("pastDueBalance");    	
  	}
	public set url1 (value: string | null) {
    	this.setPropertyValue(value, "url1");    	
  	}
  	
  	public get url1(): string | null {
    	return this.getPropertyValue("url1");    	
  	}
	public set province (value: string | null) {
    	this.setPropertyValue(value, "province");    	
  	}
  	
  	public get province(): string | null {
    	return this.getPropertyValue("province");    	
  	}
	public set actualQuote (value: number | null) {
    	this.setPropertyValue(value, "actualQuote");    	
  	}
  	
  	public get actualQuote(): number | null {
    	return this.getPropertyValue("actualQuote");    	
  	}
	public set rate (value: number | null) {
    	this.setPropertyValue(value, "rate");    	
  	}
  	
  	public get rate(): number | null {
    	return this.getPropertyValue("rate");    	
  	}
	public set officeAddress (value: string | null) {
    	this.setPropertyValue(value, "officeAddress");    	
  	}
  	
  	public get officeAddress(): string | null {
    	return this.getPropertyValue("officeAddress");    	
  	}
	public set minimumPayment (value: number | null) {
    	this.setPropertyValue(value, "minimumPayment");    	
  	}
  	
  	public get minimumPayment(): number | null {
    	return this.getPropertyValue("minimumPayment");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set clientPhone (value: string | null) {
    	this.setPropertyValue(value, "clientPhone");    	
  	}
  	
  	public get clientPhone(): string | null {
    	return this.getPropertyValue("clientPhone");    	
  	}
	public set outdoorNumber (value: string | null) {
    	this.setPropertyValue(value, "outdoorNumber");    	
  	}
  	
  	public get outdoorNumber(): string | null {
    	return this.getPropertyValue("outdoorNumber");    	
  	}
	public set locationAddress (value: string | null) {
    	this.setPropertyValue(value, "locationAddress");    	
  	}
  	
  	public get locationAddress(): string | null {
    	return this.getPropertyValue("locationAddress");    	
  	}
	public set officePhone (value: string | null) {
    	this.setPropertyValue(value, "officePhone");    	
  	}
  	
  	public get officePhone(): string | null {
    	return this.getPropertyValue("officePhone");    	
  	}
	
}