
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Payment  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amount"	,
					"referencedAccount"	,
					"amountPayAux"	,
					"typeQuotationTr"	,
					"retention"	,
					"customerID"	,
					"typeQuotationOp"	,
					"reductionType"	,
					"user"	,
					"paymentType"	,
					"category"	,
					"date"	,
					"collectionType"	,
					"amountPayment"	,
					"entireFee"	,
					"quotationValue"	,
					"payQuotationValue"	,
					"reference"	,
					"currencyType"	,
					"numCheck"	,
					"continuePayment"	,
					"finePrepayment"	,
					"operationTypeId"	,
					"operationCurrencyType"	,
					"value"	,
					"datePay"	,
					"querySequential"	,
					"prePaymentAux"	,
					"advance"	,
					"quotation"	,
					"sequential"	,
					"customer"	,
					"amountPrepayment"	,
					"negotiated"	,
					"bank"	,
					"amountPay"	,
					"onLine"	,
					"unappliedPayments"	,
					"sequentialPay"	,
					"status"	,
					"processDate"	,
					"regional"	,
					"billTo"	,
					"unappliedAmount"	,
					"note"	,
					"prepayRate"	
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
	public set referencedAccount (value: string | null) {
    	this.setPropertyValue(value, "referencedAccount");    	
  	}
  	
  	public get referencedAccount(): string | null {
    	return this.getPropertyValue("referencedAccount");    	
  	}
	public set amountPayAux (value: number | null) {
    	this.setPropertyValue(value, "amountPayAux");    	
  	}
  	
  	public get amountPayAux(): number | null {
    	return this.getPropertyValue("amountPayAux");    	
  	}
	public set typeQuotationTr (value: string | null) {
    	this.setPropertyValue(value, "typeQuotationTr");    	
  	}
  	
  	public get typeQuotationTr(): string | null {
    	return this.getPropertyValue("typeQuotationTr");    	
  	}
	public set retention (value: number | null) {
    	this.setPropertyValue(value, "retention");    	
  	}
  	
  	public get retention(): number | null {
    	return this.getPropertyValue("retention");    	
  	}
	public set customerID (value: number | null) {
    	this.setPropertyValue(value, "customerID");    	
  	}
  	
  	public get customerID(): number | null {
    	return this.getPropertyValue("customerID");    	
  	}
	public set typeQuotationOp (value: string | null) {
    	this.setPropertyValue(value, "typeQuotationOp");    	
  	}
  	
  	public get typeQuotationOp(): string | null {
    	return this.getPropertyValue("typeQuotationOp");    	
  	}
	public set reductionType (value: string | null) {
    	this.setPropertyValue(value, "reductionType");    	
  	}
  	
  	public get reductionType(): string | null {
    	return this.getPropertyValue("reductionType");    	
  	}
	public set user (value: string | null) {
    	this.setPropertyValue(value, "user");    	
  	}
  	
  	public get user(): string | null {
    	return this.getPropertyValue("user");    	
  	}
	public set paymentType (value: string | null) {
    	this.setPropertyValue(value, "paymentType");    	
  	}
  	
  	public get paymentType(): string | null {
    	return this.getPropertyValue("paymentType");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set date (value: Date | null) {
    	this.setPropertyValue(value, "date");    	
  	}
  	
  	public get date(): Date | null {
    	return this.getPropertyValue("date");    	
  	}
	public set collectionType (value: string | null) {
    	this.setPropertyValue(value, "collectionType");    	
  	}
  	
  	public get collectionType(): string | null {
    	return this.getPropertyValue("collectionType");    	
  	}
	public set amountPayment (value: number | null) {
    	this.setPropertyValue(value, "amountPayment");    	
  	}
  	
  	public get amountPayment(): number | null {
    	return this.getPropertyValue("amountPayment");    	
  	}
	public set entireFee (value: string | null) {
    	this.setPropertyValue(value, "entireFee");    	
  	}
  	
  	public get entireFee(): string | null {
    	return this.getPropertyValue("entireFee");    	
  	}
	public set quotationValue (value: number | null) {
    	this.setPropertyValue(value, "quotationValue");    	
  	}
  	
  	public get quotationValue(): number | null {
    	return this.getPropertyValue("quotationValue");    	
  	}
	public set payQuotationValue (value: number | null) {
    	this.setPropertyValue(value, "payQuotationValue");    	
  	}
  	
  	public get payQuotationValue(): number | null {
    	return this.getPropertyValue("payQuotationValue");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set currencyType (value: number | null) {
    	this.setPropertyValue(value, "currencyType");    	
  	}
  	
  	public get currencyType(): number | null {
    	return this.getPropertyValue("currencyType");    	
  	}
	public set numCheck (value: string | null) {
    	this.setPropertyValue(value, "numCheck");    	
  	}
  	
  	public get numCheck(): string | null {
    	return this.getPropertyValue("numCheck");    	
  	}
	public set continuePayment (value: string | null) {
    	this.setPropertyValue(value, "continuePayment");    	
  	}
  	
  	public get continuePayment(): string | null {
    	return this.getPropertyValue("continuePayment");    	
  	}
	public set finePrepayment (value: number | null) {
    	this.setPropertyValue(value, "finePrepayment");    	
  	}
  	
  	public get finePrepayment(): number | null {
    	return this.getPropertyValue("finePrepayment");    	
  	}
	public set operationTypeId (value: string | null) {
    	this.setPropertyValue(value, "operationTypeId");    	
  	}
  	
  	public get operationTypeId(): string | null {
    	return this.getPropertyValue("operationTypeId");    	
  	}
	public set operationCurrencyType (value: number | null) {
    	this.setPropertyValue(value, "operationCurrencyType");    	
  	}
  	
  	public get operationCurrencyType(): number | null {
    	return this.getPropertyValue("operationCurrencyType");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set datePay (value: Date | null) {
    	this.setPropertyValue(value, "datePay");    	
  	}
  	
  	public get datePay(): Date | null {
    	return this.getPropertyValue("datePay");    	
  	}
	public set querySequential (value: number | null) {
    	this.setPropertyValue(value, "querySequential");    	
  	}
  	
  	public get querySequential(): number | null {
    	return this.getPropertyValue("querySequential");    	
  	}
	public set prePaymentAux (value: number | null) {
    	this.setPropertyValue(value, "prePaymentAux");    	
  	}
  	
  	public get prePaymentAux(): number | null {
    	return this.getPropertyValue("prePaymentAux");    	
  	}
	public set advance (value: string | null) {
    	this.setPropertyValue(value, "advance");    	
  	}
  	
  	public get advance(): string | null {
    	return this.getPropertyValue("advance");    	
  	}
	public set quotation (value: number | null) {
    	this.setPropertyValue(value, "quotation");    	
  	}
  	
  	public get quotation(): number | null {
    	return this.getPropertyValue("quotation");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set customer (value: string | null) {
    	this.setPropertyValue(value, "customer");    	
  	}
  	
  	public get customer(): string | null {
    	return this.getPropertyValue("customer");    	
  	}
	public set amountPrepayment (value: number | null) {
    	this.setPropertyValue(value, "amountPrepayment");    	
  	}
  	
  	public get amountPrepayment(): number | null {
    	return this.getPropertyValue("amountPrepayment");    	
  	}
	public set negotiated (value: string | null) {
    	this.setPropertyValue(value, "negotiated");    	
  	}
  	
  	public get negotiated(): string | null {
    	return this.getPropertyValue("negotiated");    	
  	}
	public set bank (value: string | null) {
    	this.setPropertyValue(value, "bank");    	
  	}
  	
  	public get bank(): string | null {
    	return this.getPropertyValue("bank");    	
  	}
	public set amountPay (value: number | null) {
    	this.setPropertyValue(value, "amountPay");    	
  	}
  	
  	public get amountPay(): number | null {
    	return this.getPropertyValue("amountPay");    	
  	}
	public set onLine (value: boolean | null) {
    	this.setPropertyValue(value, "onLine");    	
  	}
  	
  	public get onLine(): boolean | null {
    	return this.getPropertyValue("onLine");    	
  	}
	public set unappliedPayments (value: number | null) {
    	this.setPropertyValue(value, "unappliedPayments");    	
  	}
  	
  	public get unappliedPayments(): number | null {
    	return this.getPropertyValue("unappliedPayments");    	
  	}
	public set sequentialPay (value: number | null) {
    	this.setPropertyValue(value, "sequentialPay");    	
  	}
  	
  	public get sequentialPay(): number | null {
    	return this.getPropertyValue("sequentialPay");    	
  	}
	public set status (value: string | null) {
    	this.setPropertyValue(value, "status");    	
  	}
  	
  	public get status(): string | null {
    	return this.getPropertyValue("status");    	
  	}
	public set processDate (value: string | null) {
    	this.setPropertyValue(value, "processDate");    	
  	}
  	
  	public get processDate(): string | null {
    	return this.getPropertyValue("processDate");    	
  	}
	public set regional (value: number | null) {
    	this.setPropertyValue(value, "regional");    	
  	}
  	
  	public get regional(): number | null {
    	return this.getPropertyValue("regional");    	
  	}
	public set billTo (value: string | null) {
    	this.setPropertyValue(value, "billTo");    	
  	}
  	
  	public get billTo(): string | null {
    	return this.getPropertyValue("billTo");    	
  	}
	public set unappliedAmount (value: number | null) {
    	this.setPropertyValue(value, "unappliedAmount");    	
  	}
  	
  	public get unappliedAmount(): number | null {
    	return this.getPropertyValue("unappliedAmount");    	
  	}
	public set note (value: string | null) {
    	this.setPropertyValue(value, "note");    	
  	}
  	
  	public get note(): string | null {
    	return this.getPropertyValue("note");    	
  	}
	public set prepayRate (value: number | null) {
    	this.setPropertyValue(value, "prepayRate");    	
  	}
  	
  	public get prepayRate(): number | null {
    	return this.getPropertyValue("prepayRate");    	
  	}
	
}