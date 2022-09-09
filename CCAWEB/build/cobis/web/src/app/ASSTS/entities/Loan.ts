
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Loan  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"numProcedure"	,
					"quotaCredit"	,
					"statusID"	,
					"maxDateProrogation"	,
					"lastProcessDate"	,
					"balanceDue"	,
					"category"	,
					"operationTypeID"	,
					"codCurrency"	,
					"newStatusID"	,
					"isDisbursment"	,
					"mnemonic"	,
					"natureOp"	,
					"migratedOper"	,
					"amortizationType"	,
					"loanID"	,
					"officeID"	,
					"amountApproved"	,
					"currencyName"	,
					"startDate"	,
					"loanBankID"	,
					"statusCopy"	,
					"idType"	,
					"endDate"	,
					"fondeadorLS"	,
					"identityCardNumber"	,
					"desOperationType"	,
					"redesCont"	,
					"newStatus"	,
					"group"	,
					"tipo"	,
					"previousOper"	,
					"categoryGroup"	,
					"status"	,
					"clientID"	,
					"operationType"	,
					"clientName"	,
					"disbursementDate"	,
					"expirationDate"	,
					"officer"	,
					"sector"	,
					"nextPayment"	,
					"effectiveAnualRate"	,
					"amount"	,
					"adjustment"	,
					"officerID"	,
					"office"	,
					"feeEndDate"	
			];			
			super(undefined,props);
		}   	    
	}
	public set numProcedure (value: string | null) {
    	this.setPropertyValue(value, "numProcedure");    	
  	}
  	
  	public get numProcedure(): string | null {
    	return this.getPropertyValue("numProcedure");    	
  	}
	public set quotaCredit (value: string | null) {
    	this.setPropertyValue(value, "quotaCredit");    	
  	}
  	
  	public get quotaCredit(): string | null {
    	return this.getPropertyValue("quotaCredit");    	
  	}
	public set statusID (value: number | null) {
    	this.setPropertyValue(value, "statusID");    	
  	}
  	
  	public get statusID(): number | null {
    	return this.getPropertyValue("statusID");    	
  	}
	public set maxDateProrogation (value: Date | null) {
    	this.setPropertyValue(value, "maxDateProrogation");    	
  	}
  	
  	public get maxDateProrogation(): Date | null {
    	return this.getPropertyValue("maxDateProrogation");    	
  	}
	public set lastProcessDate (value: Date | null) {
    	this.setPropertyValue(value, "lastProcessDate");    	
  	}
  	
  	public get lastProcessDate(): Date | null {
    	return this.getPropertyValue("lastProcessDate");    	
  	}
	public set balanceDue (value: number | null) {
    	this.setPropertyValue(value, "balanceDue");    	
  	}
  	
  	public get balanceDue(): number | null {
    	return this.getPropertyValue("balanceDue");    	
  	}
	public set category (value: number | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): number | null {
    	return this.getPropertyValue("category");    	
  	}
	public set operationTypeID (value: string | null) {
    	this.setPropertyValue(value, "operationTypeID");    	
  	}
  	
  	public get operationTypeID(): string | null {
    	return this.getPropertyValue("operationTypeID");    	
  	}
	public set codCurrency (value: number | null) {
    	this.setPropertyValue(value, "codCurrency");    	
  	}
  	
  	public get codCurrency(): number | null {
    	return this.getPropertyValue("codCurrency");    	
  	}
	public set newStatusID (value: number | null) {
    	this.setPropertyValue(value, "newStatusID");    	
  	}
  	
  	public get newStatusID(): number | null {
    	return this.getPropertyValue("newStatusID");    	
  	}
	public set isDisbursment (value: string | null) {
    	this.setPropertyValue(value, "isDisbursment");    	
  	}
  	
  	public get isDisbursment(): string | null {
    	return this.getPropertyValue("isDisbursment");    	
  	}
	public set mnemonic (value: string | null) {
    	this.setPropertyValue(value, "mnemonic");    	
  	}
  	
  	public get mnemonic(): string | null {
    	return this.getPropertyValue("mnemonic");    	
  	}
	public set natureOp (value: string | null) {
    	this.setPropertyValue(value, "natureOp");    	
  	}
  	
  	public get natureOp(): string | null {
    	return this.getPropertyValue("natureOp");    	
  	}
	public set migratedOper (value: string | null) {
    	this.setPropertyValue(value, "migratedOper");    	
  	}
  	
  	public get migratedOper(): string | null {
    	return this.getPropertyValue("migratedOper");    	
  	}
	public set amortizationType (value: string | null) {
    	this.setPropertyValue(value, "amortizationType");    	
  	}
  	
  	public get amortizationType(): string | null {
    	return this.getPropertyValue("amortizationType");    	
  	}
	public set loanID (value: number | null) {
    	this.setPropertyValue(value, "loanID");    	
  	}
  	
  	public get loanID(): number | null {
    	return this.getPropertyValue("loanID");    	
  	}
	public set officeID (value: number | null) {
    	this.setPropertyValue(value, "officeID");    	
  	}
  	
  	public get officeID(): number | null {
    	return this.getPropertyValue("officeID");    	
  	}
	public set amountApproved (value: number | null) {
    	this.setPropertyValue(value, "amountApproved");    	
  	}
  	
  	public get amountApproved(): number | null {
    	return this.getPropertyValue("amountApproved");    	
  	}
	public set currencyName (value: string | null) {
    	this.setPropertyValue(value, "currencyName");    	
  	}
  	
  	public get currencyName(): string | null {
    	return this.getPropertyValue("currencyName");    	
  	}
	public set startDate (value: Date | null) {
    	this.setPropertyValue(value, "startDate");    	
  	}
  	
  	public get startDate(): Date | null {
    	return this.getPropertyValue("startDate");    	
  	}
	public set loanBankID (value: string | null) {
    	this.setPropertyValue(value, "loanBankID");    	
  	}
  	
  	public get loanBankID(): string | null {
    	return this.getPropertyValue("loanBankID");    	
  	}
	public set statusCopy (value: string | null) {
    	this.setPropertyValue(value, "statusCopy");    	
  	}
  	
  	public get statusCopy(): string | null {
    	return this.getPropertyValue("statusCopy");    	
  	}
	public set idType (value: string | null) {
    	this.setPropertyValue(value, "idType");    	
  	}
  	
  	public get idType(): string | null {
    	return this.getPropertyValue("idType");    	
  	}
	public set endDate (value: Date | null) {
    	this.setPropertyValue(value, "endDate");    	
  	}
  	
  	public get endDate(): Date | null {
    	return this.getPropertyValue("endDate");    	
  	}
	public set fondeadorLS (value: number | null) {
    	this.setPropertyValue(value, "fondeadorLS");    	
  	}
  	
  	public get fondeadorLS(): number | null {
    	return this.getPropertyValue("fondeadorLS");    	
  	}
	public set identityCardNumber (value: string | null) {
    	this.setPropertyValue(value, "identityCardNumber");    	
  	}
  	
  	public get identityCardNumber(): string | null {
    	return this.getPropertyValue("identityCardNumber");    	
  	}
	public set desOperationType (value: string | null) {
    	this.setPropertyValue(value, "desOperationType");    	
  	}
  	
  	public get desOperationType(): string | null {
    	return this.getPropertyValue("desOperationType");    	
  	}
	public set redesCont (value: string | null) {
    	this.setPropertyValue(value, "redesCont");    	
  	}
  	
  	public get redesCont(): string | null {
    	return this.getPropertyValue("redesCont");    	
  	}
	public set newStatus (value: string | null) {
    	this.setPropertyValue(value, "newStatus");    	
  	}
  	
  	public get newStatus(): string | null {
    	return this.getPropertyValue("newStatus");    	
  	}
	public set group (value: number | null) {
    	this.setPropertyValue(value, "group");    	
  	}
  	
  	public get group(): number | null {
    	return this.getPropertyValue("group");    	
  	}
	public set tipo (value: string | null) {
    	this.setPropertyValue(value, "tipo");    	
  	}
  	
  	public get tipo(): string | null {
    	return this.getPropertyValue("tipo");    	
  	}
	public set previousOper (value: string | null) {
    	this.setPropertyValue(value, "previousOper");    	
  	}
  	
  	public get previousOper(): string | null {
    	return this.getPropertyValue("previousOper");    	
  	}
	public set categoryGroup (value: string | null) {
    	this.setPropertyValue(value, "categoryGroup");    	
  	}
  	
  	public get categoryGroup(): string | null {
    	return this.getPropertyValue("categoryGroup");    	
  	}
	public set status (value: string | null) {
    	this.setPropertyValue(value, "status");    	
  	}
  	
  	public get status(): string | null {
    	return this.getPropertyValue("status");    	
  	}
	public set clientID (value: number | null) {
    	this.setPropertyValue(value, "clientID");    	
  	}
  	
  	public get clientID(): number | null {
    	return this.getPropertyValue("clientID");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set officer (value: string | null) {
    	this.setPropertyValue(value, "officer");    	
  	}
  	
  	public get officer(): string | null {
    	return this.getPropertyValue("officer");    	
  	}
	public set sector (value: string | null) {
    	this.setPropertyValue(value, "sector");    	
  	}
  	
  	public get sector(): string | null {
    	return this.getPropertyValue("sector");    	
  	}
	public set nextPayment (value: number | null) {
    	this.setPropertyValue(value, "nextPayment");    	
  	}
  	
  	public get nextPayment(): number | null {
    	return this.getPropertyValue("nextPayment");    	
  	}
	public set effectiveAnualRate (value: number | null) {
    	this.setPropertyValue(value, "effectiveAnualRate");    	
  	}
  	
  	public get effectiveAnualRate(): number | null {
    	return this.getPropertyValue("effectiveAnualRate");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set adjustment (value: string | null) {
    	this.setPropertyValue(value, "adjustment");    	
  	}
  	
  	public get adjustment(): string | null {
    	return this.getPropertyValue("adjustment");    	
  	}
	public set officerID (value: number | null) {
    	this.setPropertyValue(value, "officerID");    	
  	}
  	
  	public get officerID(): number | null {
    	return this.getPropertyValue("officerID");    	
  	}
	public set office (value: string | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): string | null {
    	return this.getPropertyValue("office");    	
  	}
	public set feeEndDate (value: Date | null) {
    	this.setPropertyValue(value, "feeEndDate");    	
  	}
  	
  	public get feeEndDate(): Date | null {
    	return this.getPropertyValue("feeEndDate");    	
  	}
	
}