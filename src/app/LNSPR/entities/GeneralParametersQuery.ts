
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class GeneralParametersQuery  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"benefitInterestRate"	,
					"safeTerm"	,
					"termGraceCapital"	,
					"avoidHolidays"	,
					"equalDues"	,
					"iva"	,
					"extendedPaymentDate"	,
					"account"	,
					"restructuring"	,
					"paymentDay"	,
					"allowsPrecancel"	,
					"kindPayment"	,
					"readjustable"	,
					"monthGrace"	,
					"amount"	,
					"typeDividend"	,
					"paymentAccount"	,
					"term"	,
					"aggregate"	,
					"graceDividend"	,
					"typeFee"	,
					"benefitBaseRate"	,
					"interest"	,
					"termCapital"	,
					"payFullFee"	,
					"paymentMethod"	,
					"paymentCategory"	,
					"periodicity"	,
					"termType"	,
					"typeAmortization"	,
					"tirFee"	,
					"operationCode"	,
					"sector"	,
					"allowsRenewal"	,
					"interestPayment"	,
					"fee"	,
					"amountApproved"	,
					"typeLock"	,
					"calculatesNetRate"	,
					"acceptAdditionalPayment"	,
					"fixedPayementDay"	,
					"specialReadjustment"	,
					"termGraceInterest"	,
					"balloomFee"	,
					"typePayment"	,
					"cashPayments"	,
					"wayPayment"	,
					"typeGrace"	,
					"baseInterestCalculation"	,
					"typeUnlock"	,
					"valueDate"	,
					"daysGraceDefault"	,
					"value1"	,
					"termInterest"	
			];			
			super(undefined,props);
		}   	    
	}
	public set benefitInterestRate (value: string | null) {
    	this.setPropertyValue(value, "benefitInterestRate");    	
  	}
  	
  	public get benefitInterestRate(): string | null {
    	return this.getPropertyValue("benefitInterestRate");    	
  	}
	public set safeTerm (value: number | null) {
    	this.setPropertyValue(value, "safeTerm");    	
  	}
  	
  	public get safeTerm(): number | null {
    	return this.getPropertyValue("safeTerm");    	
  	}
	public set termGraceCapital (value: number | null) {
    	this.setPropertyValue(value, "termGraceCapital");    	
  	}
  	
  	public get termGraceCapital(): number | null {
    	return this.getPropertyValue("termGraceCapital");    	
  	}
	public set avoidHolidays (value: string | null) {
    	this.setPropertyValue(value, "avoidHolidays");    	
  	}
  	
  	public get avoidHolidays(): string | null {
    	return this.getPropertyValue("avoidHolidays");    	
  	}
	public set equalDues (value: string | null) {
    	this.setPropertyValue(value, "equalDues");    	
  	}
  	
  	public get equalDues(): string | null {
    	return this.getPropertyValue("equalDues");    	
  	}
	public set iva (value: number | null) {
    	this.setPropertyValue(value, "iva");    	
  	}
  	
  	public get iva(): number | null {
    	return this.getPropertyValue("iva");    	
  	}
	public set extendedPaymentDate (value: Date | null) {
    	this.setPropertyValue(value, "extendedPaymentDate");    	
  	}
  	
  	public get extendedPaymentDate(): Date | null {
    	return this.getPropertyValue("extendedPaymentDate");    	
  	}
	public set account (value: string | null) {
    	this.setPropertyValue(value, "account");    	
  	}
  	
  	public get account(): string | null {
    	return this.getPropertyValue("account");    	
  	}
	public set restructuring (value: string | null) {
    	this.setPropertyValue(value, "restructuring");    	
  	}
  	
  	public get restructuring(): string | null {
    	return this.getPropertyValue("restructuring");    	
  	}
	public set paymentDay (value: number | null) {
    	this.setPropertyValue(value, "paymentDay");    	
  	}
  	
  	public get paymentDay(): number | null {
    	return this.getPropertyValue("paymentDay");    	
  	}
	public set allowsPrecancel (value: string | null) {
    	this.setPropertyValue(value, "allowsPrecancel");    	
  	}
  	
  	public get allowsPrecancel(): string | null {
    	return this.getPropertyValue("allowsPrecancel");    	
  	}
	public set kindPayment (value: string | null) {
    	this.setPropertyValue(value, "kindPayment");    	
  	}
  	
  	public get kindPayment(): string | null {
    	return this.getPropertyValue("kindPayment");    	
  	}
	public set readjustable (value: string | null) {
    	this.setPropertyValue(value, "readjustable");    	
  	}
  	
  	public get readjustable(): string | null {
    	return this.getPropertyValue("readjustable");    	
  	}
	public set monthGrace (value: number | null) {
    	this.setPropertyValue(value, "monthGrace");    	
  	}
  	
  	public get monthGrace(): number | null {
    	return this.getPropertyValue("monthGrace");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set typeDividend (value: string | null) {
    	this.setPropertyValue(value, "typeDividend");    	
  	}
  	
  	public get typeDividend(): string | null {
    	return this.getPropertyValue("typeDividend");    	
  	}
	public set paymentAccount (value: string | null) {
    	this.setPropertyValue(value, "paymentAccount");    	
  	}
  	
  	public get paymentAccount(): string | null {
    	return this.getPropertyValue("paymentAccount");    	
  	}
	public set term (value: number | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): number | null {
    	return this.getPropertyValue("term");    	
  	}
	public set aggregate (value: string | null) {
    	this.setPropertyValue(value, "aggregate");    	
  	}
  	
  	public get aggregate(): string | null {
    	return this.getPropertyValue("aggregate");    	
  	}
	public set graceDividend (value: number | null) {
    	this.setPropertyValue(value, "graceDividend");    	
  	}
  	
  	public get graceDividend(): number | null {
    	return this.getPropertyValue("graceDividend");    	
  	}
	public set typeFee (value: string | null) {
    	this.setPropertyValue(value, "typeFee");    	
  	}
  	
  	public get typeFee(): string | null {
    	return this.getPropertyValue("typeFee");    	
  	}
	public set benefitBaseRate (value: string | null) {
    	this.setPropertyValue(value, "benefitBaseRate");    	
  	}
  	
  	public get benefitBaseRate(): string | null {
    	return this.getPropertyValue("benefitBaseRate");    	
  	}
	public set interest (value: number | null) {
    	this.setPropertyValue(value, "interest");    	
  	}
  	
  	public get interest(): number | null {
    	return this.getPropertyValue("interest");    	
  	}
	public set termCapital (value: number | null) {
    	this.setPropertyValue(value, "termCapital");    	
  	}
  	
  	public get termCapital(): number | null {
    	return this.getPropertyValue("termCapital");    	
  	}
	public set payFullFee (value: string | null) {
    	this.setPropertyValue(value, "payFullFee");    	
  	}
  	
  	public get payFullFee(): string | null {
    	return this.getPropertyValue("payFullFee");    	
  	}
	public set paymentMethod (value: string | null) {
    	this.setPropertyValue(value, "paymentMethod");    	
  	}
  	
  	public get paymentMethod(): string | null {
    	return this.getPropertyValue("paymentMethod");    	
  	}
	public set paymentCategory (value: string | null) {
    	this.setPropertyValue(value, "paymentCategory");    	
  	}
  	
  	public get paymentCategory(): string | null {
    	return this.getPropertyValue("paymentCategory");    	
  	}
	public set periodicity (value: number | null) {
    	this.setPropertyValue(value, "periodicity");    	
  	}
  	
  	public get periodicity(): number | null {
    	return this.getPropertyValue("periodicity");    	
  	}
	public set termType (value: string | null) {
    	this.setPropertyValue(value, "termType");    	
  	}
  	
  	public get termType(): string | null {
    	return this.getPropertyValue("termType");    	
  	}
	public set typeAmortization (value: string | null) {
    	this.setPropertyValue(value, "typeAmortization");    	
  	}
  	
  	public get typeAmortization(): string | null {
    	return this.getPropertyValue("typeAmortization");    	
  	}
	public set tirFee (value: number | null) {
    	this.setPropertyValue(value, "tirFee");    	
  	}
  	
  	public get tirFee(): number | null {
    	return this.getPropertyValue("tirFee");    	
  	}
	public set operationCode (value: number | null) {
    	this.setPropertyValue(value, "operationCode");    	
  	}
  	
  	public get operationCode(): number | null {
    	return this.getPropertyValue("operationCode");    	
  	}
	public set sector (value: string | null) {
    	this.setPropertyValue(value, "sector");    	
  	}
  	
  	public get sector(): string | null {
    	return this.getPropertyValue("sector");    	
  	}
	public set allowsRenewal (value: string | null) {
    	this.setPropertyValue(value, "allowsRenewal");    	
  	}
  	
  	public get allowsRenewal(): string | null {
    	return this.getPropertyValue("allowsRenewal");    	
  	}
	public set interestPayment (value: string | null) {
    	this.setPropertyValue(value, "interestPayment");    	
  	}
  	
  	public get interestPayment(): string | null {
    	return this.getPropertyValue("interestPayment");    	
  	}
	public set fee (value: number | null) {
    	this.setPropertyValue(value, "fee");    	
  	}
  	
  	public get fee(): number | null {
    	return this.getPropertyValue("fee");    	
  	}
	public set amountApproved (value: number | null) {
    	this.setPropertyValue(value, "amountApproved");    	
  	}
  	
  	public get amountApproved(): number | null {
    	return this.getPropertyValue("amountApproved");    	
  	}
	public set typeLock (value: string | null) {
    	this.setPropertyValue(value, "typeLock");    	
  	}
  	
  	public get typeLock(): string | null {
    	return this.getPropertyValue("typeLock");    	
  	}
	public set calculatesNetRate (value: string | null) {
    	this.setPropertyValue(value, "calculatesNetRate");    	
  	}
  	
  	public get calculatesNetRate(): string | null {
    	return this.getPropertyValue("calculatesNetRate");    	
  	}
	public set acceptAdditionalPayment (value: string | null) {
    	this.setPropertyValue(value, "acceptAdditionalPayment");    	
  	}
  	
  	public get acceptAdditionalPayment(): string | null {
    	return this.getPropertyValue("acceptAdditionalPayment");    	
  	}
	public set fixedPayementDay (value: string | null) {
    	this.setPropertyValue(value, "fixedPayementDay");    	
  	}
  	
  	public get fixedPayementDay(): string | null {
    	return this.getPropertyValue("fixedPayementDay");    	
  	}
	public set specialReadjustment (value: string | null) {
    	this.setPropertyValue(value, "specialReadjustment");    	
  	}
  	
  	public get specialReadjustment(): string | null {
    	return this.getPropertyValue("specialReadjustment");    	
  	}
	public set termGraceInterest (value: number | null) {
    	this.setPropertyValue(value, "termGraceInterest");    	
  	}
  	
  	public get termGraceInterest(): number | null {
    	return this.getPropertyValue("termGraceInterest");    	
  	}
	public set balloomFee (value: string | null) {
    	this.setPropertyValue(value, "balloomFee");    	
  	}
  	
  	public get balloomFee(): string | null {
    	return this.getPropertyValue("balloomFee");    	
  	}
	public set typePayment (value: string | null) {
    	this.setPropertyValue(value, "typePayment");    	
  	}
  	
  	public get typePayment(): string | null {
    	return this.getPropertyValue("typePayment");    	
  	}
	public set cashPayments (value: string | null) {
    	this.setPropertyValue(value, "cashPayments");    	
  	}
  	
  	public get cashPayments(): string | null {
    	return this.getPropertyValue("cashPayments");    	
  	}
	public set wayPayment (value: string | null) {
    	this.setPropertyValue(value, "wayPayment");    	
  	}
  	
  	public get wayPayment(): string | null {
    	return this.getPropertyValue("wayPayment");    	
  	}
	public set typeGrace (value: string | null) {
    	this.setPropertyValue(value, "typeGrace");    	
  	}
  	
  	public get typeGrace(): string | null {
    	return this.getPropertyValue("typeGrace");    	
  	}
	public set baseInterestCalculation (value: string | null) {
    	this.setPropertyValue(value, "baseInterestCalculation");    	
  	}
  	
  	public get baseInterestCalculation(): string | null {
    	return this.getPropertyValue("baseInterestCalculation");    	
  	}
	public set typeUnlock (value: string | null) {
    	this.setPropertyValue(value, "typeUnlock");    	
  	}
  	
  	public get typeUnlock(): string | null {
    	return this.getPropertyValue("typeUnlock");    	
  	}
	public set valueDate (value: Date | null) {
    	this.setPropertyValue(value, "valueDate");    	
  	}
  	
  	public get valueDate(): Date | null {
    	return this.getPropertyValue("valueDate");    	
  	}
	public set daysGraceDefault (value: number | null) {
    	this.setPropertyValue(value, "daysGraceDefault");    	
  	}
  	
  	public get daysGraceDefault(): number | null {
    	return this.getPropertyValue("daysGraceDefault");    	
  	}
	public set value1 (value: string | null) {
    	this.setPropertyValue(value, "value1");    	
  	}
  	
  	public get value1(): string | null {
    	return this.getPropertyValue("value1");    	
  	}
	public set termInterest (value: number | null) {
    	this.setPropertyValue(value, "termInterest");    	
  	}
  	
  	public get termInterest(): number | null {
    	return this.getPropertyValue("termInterest");    	
  	}
	
}