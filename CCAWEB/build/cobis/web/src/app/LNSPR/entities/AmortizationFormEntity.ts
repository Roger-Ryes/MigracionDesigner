
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationFormEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"baseInterestCalculation"	,
					"monthGrace"	,
					"solidarity"	,
					"typeGrace"	,
					"generateInsurance"	,
					"ballonFee"	,
					"amount"	,
					"termGraceCapital"	,
					"avoidHolidays"	,
					"initialInterestRest"	,
					"operationType"	,
					"fee"	,
					"fixedPayementDay"	,
					"safeTerm"	,
					"graceDividend"	,
					"iva"	,
					"daysGraceDefault"	,
					"tirFee"	,
					"valueDate"	,
					"numOperation"	,
					"firstDueDate"	,
					"randomGrace"	,
					"calculatesNetRate"	,
					"extendedPaymentDate"	,
					"termGraceInterest"	,
					"interest"	,
					"operationCode"	,
					"equalDues"	,
					"typeAmortization"	,
					"rediscountDate"	,
					"capital"	,
					"termCapital"	,
					"chargeIn"	,
					"typeFee"	,
					"threeYear"	,
					"termType"	,
					"paymentDay"	,
					"termInterest"	,
					"term"	
			];			
			super(undefined,props);
		}   	    
	}
	public set baseInterestCalculation (value: string | null) {
    	this.setPropertyValue(value, "baseInterestCalculation");    	
  	}
  	
  	public get baseInterestCalculation(): string | null {
    	return this.getPropertyValue("baseInterestCalculation");    	
  	}
	public set monthGrace (value: number | null) {
    	this.setPropertyValue(value, "monthGrace");    	
  	}
  	
  	public get monthGrace(): number | null {
    	return this.getPropertyValue("monthGrace");    	
  	}
	public set solidarity (value: boolean | null) {
    	this.setPropertyValue(value, "solidarity");    	
  	}
  	
  	public get solidarity(): boolean | null {
    	return this.getPropertyValue("solidarity");    	
  	}
	public set typeGrace (value: string | null) {
    	this.setPropertyValue(value, "typeGrace");    	
  	}
  	
  	public get typeGrace(): string | null {
    	return this.getPropertyValue("typeGrace");    	
  	}
	public set generateInsurance (value: boolean | null) {
    	this.setPropertyValue(value, "generateInsurance");    	
  	}
  	
  	public get generateInsurance(): boolean | null {
    	return this.getPropertyValue("generateInsurance");    	
  	}
	public set ballonFee (value: string | null) {
    	this.setPropertyValue(value, "ballonFee");    	
  	}
  	
  	public get ballonFee(): string | null {
    	return this.getPropertyValue("ballonFee");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
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
	public set initialInterestRest (value: number | null) {
    	this.setPropertyValue(value, "initialInterestRest");    	
  	}
  	
  	public get initialInterestRest(): number | null {
    	return this.getPropertyValue("initialInterestRest");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set fee (value: number | null) {
    	this.setPropertyValue(value, "fee");    	
  	}
  	
  	public get fee(): number | null {
    	return this.getPropertyValue("fee");    	
  	}
	public set fixedPayementDay (value: boolean | null) {
    	this.setPropertyValue(value, "fixedPayementDay");    	
  	}
  	
  	public get fixedPayementDay(): boolean | null {
    	return this.getPropertyValue("fixedPayementDay");    	
  	}
	public set safeTerm (value: number | null) {
    	this.setPropertyValue(value, "safeTerm");    	
  	}
  	
  	public get safeTerm(): number | null {
    	return this.getPropertyValue("safeTerm");    	
  	}
	public set graceDividend (value: number | null) {
    	this.setPropertyValue(value, "graceDividend");    	
  	}
  	
  	public get graceDividend(): number | null {
    	return this.getPropertyValue("graceDividend");    	
  	}
	public set iva (value: number | null) {
    	this.setPropertyValue(value, "iva");    	
  	}
  	
  	public get iva(): number | null {
    	return this.getPropertyValue("iva");    	
  	}
	public set daysGraceDefault (value: number | null) {
    	this.setPropertyValue(value, "daysGraceDefault");    	
  	}
  	
  	public get daysGraceDefault(): number | null {
    	return this.getPropertyValue("daysGraceDefault");    	
  	}
	public set tirFee (value: string | null) {
    	this.setPropertyValue(value, "tirFee");    	
  	}
  	
  	public get tirFee(): string | null {
    	return this.getPropertyValue("tirFee");    	
  	}
	public set valueDate (value: Date | null) {
    	this.setPropertyValue(value, "valueDate");    	
  	}
  	
  	public get valueDate(): Date | null {
    	return this.getPropertyValue("valueDate");    	
  	}
	public set numOperation (value: string | null) {
    	this.setPropertyValue(value, "numOperation");    	
  	}
  	
  	public get numOperation(): string | null {
    	return this.getPropertyValue("numOperation");    	
  	}
	public set firstDueDate (value: Date | null) {
    	this.setPropertyValue(value, "firstDueDate");    	
  	}
  	
  	public get firstDueDate(): Date | null {
    	return this.getPropertyValue("firstDueDate");    	
  	}
	public set randomGrace (value: string | null) {
    	this.setPropertyValue(value, "randomGrace");    	
  	}
  	
  	public get randomGrace(): string | null {
    	return this.getPropertyValue("randomGrace");    	
  	}
	public set calculatesNetRate (value: boolean | null) {
    	this.setPropertyValue(value, "calculatesNetRate");    	
  	}
  	
  	public get calculatesNetRate(): boolean | null {
    	return this.getPropertyValue("calculatesNetRate");    	
  	}
	public set extendedPaymentDate (value: Date | null) {
    	this.setPropertyValue(value, "extendedPaymentDate");    	
  	}
  	
  	public get extendedPaymentDate(): Date | null {
    	return this.getPropertyValue("extendedPaymentDate");    	
  	}
	public set termGraceInterest (value: number | null) {
    	this.setPropertyValue(value, "termGraceInterest");    	
  	}
  	
  	public get termGraceInterest(): number | null {
    	return this.getPropertyValue("termGraceInterest");    	
  	}
	public set interest (value: number | null) {
    	this.setPropertyValue(value, "interest");    	
  	}
  	
  	public get interest(): number | null {
    	return this.getPropertyValue("interest");    	
  	}
	public set operationCode (value: number | null) {
    	this.setPropertyValue(value, "operationCode");    	
  	}
  	
  	public get operationCode(): number | null {
    	return this.getPropertyValue("operationCode");    	
  	}
	public set equalDues (value: boolean | null) {
    	this.setPropertyValue(value, "equalDues");    	
  	}
  	
  	public get equalDues(): boolean | null {
    	return this.getPropertyValue("equalDues");    	
  	}
	public set typeAmortization (value: string | null) {
    	this.setPropertyValue(value, "typeAmortization");    	
  	}
  	
  	public get typeAmortization(): string | null {
    	return this.getPropertyValue("typeAmortization");    	
  	}
	public set rediscountDate (value: string | null) {
    	this.setPropertyValue(value, "rediscountDate");    	
  	}
  	
  	public get rediscountDate(): string | null {
    	return this.getPropertyValue("rediscountDate");    	
  	}
	public set capital (value: number | null) {
    	this.setPropertyValue(value, "capital");    	
  	}
  	
  	public get capital(): number | null {
    	return this.getPropertyValue("capital");    	
  	}
	public set termCapital (value: number | null) {
    	this.setPropertyValue(value, "termCapital");    	
  	}
  	
  	public get termCapital(): number | null {
    	return this.getPropertyValue("termCapital");    	
  	}
	public set chargeIn (value: string | null) {
    	this.setPropertyValue(value, "chargeIn");    	
  	}
  	
  	public get chargeIn(): string | null {
    	return this.getPropertyValue("chargeIn");    	
  	}
	public set typeFee (value: string | null) {
    	this.setPropertyValue(value, "typeFee");    	
  	}
  	
  	public get typeFee(): string | null {
    	return this.getPropertyValue("typeFee");    	
  	}
	public set threeYear (value: string | null) {
    	this.setPropertyValue(value, "threeYear");    	
  	}
  	
  	public get threeYear(): string | null {
    	return this.getPropertyValue("threeYear");    	
  	}
	public set termType (value: string | null) {
    	this.setPropertyValue(value, "termType");    	
  	}
  	
  	public get termType(): string | null {
    	return this.getPropertyValue("termType");    	
  	}
	public set paymentDay (value: number | null) {
    	this.setPropertyValue(value, "paymentDay");    	
  	}
  	
  	public get paymentDay(): number | null {
    	return this.getPropertyValue("paymentDay");    	
  	}
	public set termInterest (value: number | null) {
    	this.setPropertyValue(value, "termInterest");    	
  	}
  	
  	public get termInterest(): number | null {
    	return this.getPropertyValue("termInterest");    	
  	}
	public set term (value: number | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): number | null {
    	return this.getPropertyValue("term");    	
  	}
	
}