
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RefinanceLoanFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"addicionalPayMethod"	,
					"currencyTypeAux"	,
					"interestBalance"	,
					"arrearsBalance"	,
					"additionalValue"	,
					"clientName"	,
					"refreshData"	,
					"paymentDay"	,
					"typeFee"	,
					"operation"	,
					"termInterest"	,
					"currencyType"	,
					"periodicity"	,
					"totalRefinance"	,
					"bankOperation"	,
					"capitalBalanceNew"	,
					"aditionalBalanceLocal"	,
					"totalToRenew"	,
					"account"	,
					"newLoanCurrency"	,
					"payMethodCurrency"	,
					"capitalBalance"	,
					"graceDividend"	,
					"otherBalanceLocal"	,
					"preventionProgram"	,
					"termGraceInt"	,
					"valuePay"	,
					"newLoanLabel"	,
					"accountList"	,
					"interestBalanceLocal"	,
					"typeRenovation"	,
					"otherBalance"	,
					"capitalizeBalance"	,
					"termGraceCap"	,
					"fixedPayDay"	,
					"typeGrace"	,
					"basicInsurance"	,
					"interestBalanceNew"	,
					"overDue"	,
					"capitalBalanceLocal"	,
					"operationType"	,
					"aditionalBalance"	,
					"otherBalanceNew"	,
					"newLoanTerm"	,
					"aditionalBalanceNew"	,
					"clientID"	,
					"termCapital"	
			];			
			super(undefined,props);
		}   	    
	}
	public set addicionalPayMethod (value: string | null) {
    	this.setPropertyValue(value, "addicionalPayMethod");    	
  	}
  	
  	public get addicionalPayMethod(): string | null {
    	return this.getPropertyValue("addicionalPayMethod");    	
  	}
	public set currencyTypeAux (value: number | null) {
    	this.setPropertyValue(value, "currencyTypeAux");    	
  	}
  	
  	public get currencyTypeAux(): number | null {
    	return this.getPropertyValue("currencyTypeAux");    	
  	}
	public set interestBalance (value: number | null) {
    	this.setPropertyValue(value, "interestBalance");    	
  	}
  	
  	public get interestBalance(): number | null {
    	return this.getPropertyValue("interestBalance");    	
  	}
	public set arrearsBalance (value: number | null) {
    	this.setPropertyValue(value, "arrearsBalance");    	
  	}
  	
  	public get arrearsBalance(): number | null {
    	return this.getPropertyValue("arrearsBalance");    	
  	}
	public set additionalValue (value: number | null) {
    	this.setPropertyValue(value, "additionalValue");    	
  	}
  	
  	public get additionalValue(): number | null {
    	return this.getPropertyValue("additionalValue");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set refreshData (value: boolean | null) {
    	this.setPropertyValue(value, "refreshData");    	
  	}
  	
  	public get refreshData(): boolean | null {
    	return this.getPropertyValue("refreshData");    	
  	}
	public set paymentDay (value: number | null) {
    	this.setPropertyValue(value, "paymentDay");    	
  	}
  	
  	public get paymentDay(): number | null {
    	return this.getPropertyValue("paymentDay");    	
  	}
	public set typeFee (value: string | null) {
    	this.setPropertyValue(value, "typeFee");    	
  	}
  	
  	public get typeFee(): string | null {
    	return this.getPropertyValue("typeFee");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set termInterest (value: number | null) {
    	this.setPropertyValue(value, "termInterest");    	
  	}
  	
  	public get termInterest(): number | null {
    	return this.getPropertyValue("termInterest");    	
  	}
	public set currencyType (value: number | null) {
    	this.setPropertyValue(value, "currencyType");    	
  	}
  	
  	public get currencyType(): number | null {
    	return this.getPropertyValue("currencyType");    	
  	}
	public set periodicity (value: string | null) {
    	this.setPropertyValue(value, "periodicity");    	
  	}
  	
  	public get periodicity(): string | null {
    	return this.getPropertyValue("periodicity");    	
  	}
	public set totalRefinance (value: number | null) {
    	this.setPropertyValue(value, "totalRefinance");    	
  	}
  	
  	public get totalRefinance(): number | null {
    	return this.getPropertyValue("totalRefinance");    	
  	}
	public set bankOperation (value: string | null) {
    	this.setPropertyValue(value, "bankOperation");    	
  	}
  	
  	public get bankOperation(): string | null {
    	return this.getPropertyValue("bankOperation");    	
  	}
	public set capitalBalanceNew (value: number | null) {
    	this.setPropertyValue(value, "capitalBalanceNew");    	
  	}
  	
  	public get capitalBalanceNew(): number | null {
    	return this.getPropertyValue("capitalBalanceNew");    	
  	}
	public set aditionalBalanceLocal (value: number | null) {
    	this.setPropertyValue(value, "aditionalBalanceLocal");    	
  	}
  	
  	public get aditionalBalanceLocal(): number | null {
    	return this.getPropertyValue("aditionalBalanceLocal");    	
  	}
	public set totalToRenew (value: number | null) {
    	this.setPropertyValue(value, "totalToRenew");    	
  	}
  	
  	public get totalToRenew(): number | null {
    	return this.getPropertyValue("totalToRenew");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set newLoanCurrency (value: number | null) {
    	this.setPropertyValue(value, "newLoanCurrency");    	
  	}
  	
  	public get newLoanCurrency(): number | null {
    	return this.getPropertyValue("newLoanCurrency");    	
  	}
	public set payMethodCurrency (value: number | null) {
    	this.setPropertyValue(value, "payMethodCurrency");    	
  	}
  	
  	public get payMethodCurrency(): number | null {
    	return this.getPropertyValue("payMethodCurrency");    	
  	}
	public set capitalBalance (value: number | null) {
    	this.setPropertyValue(value, "capitalBalance");    	
  	}
  	
  	public get capitalBalance(): number | null {
    	return this.getPropertyValue("capitalBalance");    	
  	}
	public set graceDividend (value: number | null) {
    	this.setPropertyValue(value, "graceDividend");    	
  	}
  	
  	public get graceDividend(): number | null {
    	return this.getPropertyValue("graceDividend");    	
  	}
	public set otherBalanceLocal (value: number | null) {
    	this.setPropertyValue(value, "otherBalanceLocal");    	
  	}
  	
  	public get otherBalanceLocal(): number | null {
    	return this.getPropertyValue("otherBalanceLocal");    	
  	}
	public set preventionProgram (value: string | null) {
    	this.setPropertyValue(value, "preventionProgram");    	
  	}
  	
  	public get preventionProgram(): string | null {
    	return this.getPropertyValue("preventionProgram");    	
  	}
	public set termGraceInt (value: number | null) {
    	this.setPropertyValue(value, "termGraceInt");    	
  	}
  	
  	public get termGraceInt(): number | null {
    	return this.getPropertyValue("termGraceInt");    	
  	}
	public set valuePay (value: number | null) {
    	this.setPropertyValue(value, "valuePay");    	
  	}
  	
  	public get valuePay(): number | null {
    	return this.getPropertyValue("valuePay");    	
  	}
	public set newLoanLabel (value: string | null) {
    	this.setPropertyValue(value, "newLoanLabel");    	
  	}
  	
  	public get newLoanLabel(): string | null {
    	return this.getPropertyValue("newLoanLabel");    	
  	}
	public set accountList (value: string | null) {
    	this.setPropertyValue(value, "accountList");    	
  	}
  	
  	public get accountList(): string | null {
    	return this.getPropertyValue("accountList");    	
  	}
	public set interestBalanceLocal (value: number | null) {
    	this.setPropertyValue(value, "interestBalanceLocal");    	
  	}
  	
  	public get interestBalanceLocal(): number | null {
    	return this.getPropertyValue("interestBalanceLocal");    	
  	}
	public set typeRenovation (value: string | null) {
    	this.setPropertyValue(value, "typeRenovation");    	
  	}
  	
  	public get typeRenovation(): string | null {
    	return this.getPropertyValue("typeRenovation");    	
  	}
	public set otherBalance (value: number | null) {
    	this.setPropertyValue(value, "otherBalance");    	
  	}
  	
  	public get otherBalance(): number | null {
    	return this.getPropertyValue("otherBalance");    	
  	}
	public set capitalizeBalance (value: string | null) {
    	this.setPropertyValue(value, "capitalizeBalance");    	
  	}
  	
  	public get capitalizeBalance(): string | null {
    	return this.getPropertyValue("capitalizeBalance");    	
  	}
	public set termGraceCap (value: number | null) {
    	this.setPropertyValue(value, "termGraceCap");    	
  	}
  	
  	public get termGraceCap(): number | null {
    	return this.getPropertyValue("termGraceCap");    	
  	}
	public set fixedPayDay (value: boolean | null) {
    	this.setPropertyValue(value, "fixedPayDay");    	
  	}
  	
  	public get fixedPayDay(): boolean | null {
    	return this.getPropertyValue("fixedPayDay");    	
  	}
	public set typeGrace (value: string | null) {
    	this.setPropertyValue(value, "typeGrace");    	
  	}
  	
  	public get typeGrace(): string | null {
    	return this.getPropertyValue("typeGrace");    	
  	}
	public set basicInsurance (value: boolean | null) {
    	this.setPropertyValue(value, "basicInsurance");    	
  	}
  	
  	public get basicInsurance(): boolean | null {
    	return this.getPropertyValue("basicInsurance");    	
  	}
	public set interestBalanceNew (value: number | null) {
    	this.setPropertyValue(value, "interestBalanceNew");    	
  	}
  	
  	public get interestBalanceNew(): number | null {
    	return this.getPropertyValue("interestBalanceNew");    	
  	}
	public set overDue (value: string | null) {
    	this.setPropertyValue(value, "overDue");    	
  	}
  	
  	public get overDue(): string | null {
    	return this.getPropertyValue("overDue");    	
  	}
	public set capitalBalanceLocal (value: number | null) {
    	this.setPropertyValue(value, "capitalBalanceLocal");    	
  	}
  	
  	public get capitalBalanceLocal(): number | null {
    	return this.getPropertyValue("capitalBalanceLocal");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set aditionalBalance (value: number | null) {
    	this.setPropertyValue(value, "aditionalBalance");    	
  	}
  	
  	public get aditionalBalance(): number | null {
    	return this.getPropertyValue("aditionalBalance");    	
  	}
	public set otherBalanceNew (value: number | null) {
    	this.setPropertyValue(value, "otherBalanceNew");    	
  	}
  	
  	public get otherBalanceNew(): number | null {
    	return this.getPropertyValue("otherBalanceNew");    	
  	}
	public set newLoanTerm (value: number | null) {
    	this.setPropertyValue(value, "newLoanTerm");    	
  	}
  	
  	public get newLoanTerm(): number | null {
    	return this.getPropertyValue("newLoanTerm");    	
  	}
	public set aditionalBalanceNew (value: number | null) {
    	this.setPropertyValue(value, "aditionalBalanceNew");    	
  	}
  	
  	public get aditionalBalanceNew(): number | null {
    	return this.getPropertyValue("aditionalBalanceNew");    	
  	}
	public set clientID (value: number | null) {
    	this.setPropertyValue(value, "clientID");    	
  	}
  	
  	public get clientID(): number | null {
    	return this.getPropertyValue("clientID");    	
  	}
	public set termCapital (value: number | null) {
    	this.setPropertyValue(value, "termCapital");    	
  	}
  	
  	public get termCapital(): number | null {
    	return this.getPropertyValue("termCapital");    	
  	}
	
}