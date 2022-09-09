
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanItemsList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"typePoints"	,
					"grace"	,
					"priority"	,
					"bank"	,
					"associateValue"	,
					"annualRate"	,
					"paymentMethod"	,
					"maxRate"	,
					"factorReadjustment"	,
					"warrantyType"	,
					"dividendType"	,
					"limit"	,
					"insuranceType"	,
					"totalRate"	,
					"percentage"	,
					"rank"	,
					"signReadjustment"	,
					"payArrears"	,
					"otherRates"	,
					"factor"	,
					"amount"	,
					"calculationBase"	,
					"interestPeriods"	,
					"description"	,
					"referenceReadjustment"	,
					"signo"	,
					"typeItem"	,
					"warrantyAccount"	,
					"pointsReadjustment"	,
					"category"	,
					"item"	,
					"receivable"	,
					"warrantyCoverage"	,
					"financed"	,
					"negotationRate"	,
					"warrantyValue"	,
					"insurance"	,
					"points"	,
					"minRate"	,
					"associate"	,
					"cause"	,
					"reference"	
			];			
			super(undefined,props);
		}   	    
	}
	public set typePoints (value: string | null) {
    	this.setPropertyValue(value, "typePoints");    	
  	}
  	
  	public get typePoints(): string | null {
    	return this.getPropertyValue("typePoints");    	
  	}
	public set grace (value: number | null) {
    	this.setPropertyValue(value, "grace");    	
  	}
  	
  	public get grace(): number | null {
    	return this.getPropertyValue("grace");    	
  	}
	public set priority (value: number | null) {
    	this.setPropertyValue(value, "priority");    	
  	}
  	
  	public get priority(): number | null {
    	return this.getPropertyValue("priority");    	
  	}
	public set bank (value: string | null) {
    	this.setPropertyValue(value, "bank");    	
  	}
  	
  	public get bank(): string | null {
    	return this.getPropertyValue("bank");    	
  	}
	public set associateValue (value: number | null) {
    	this.setPropertyValue(value, "associateValue");    	
  	}
  	
  	public get associateValue(): number | null {
    	return this.getPropertyValue("associateValue");    	
  	}
	public set annualRate (value: number | null) {
    	this.setPropertyValue(value, "annualRate");    	
  	}
  	
  	public get annualRate(): number | null {
    	return this.getPropertyValue("annualRate");    	
  	}
	public set paymentMethod (value: string | null) {
    	this.setPropertyValue(value, "paymentMethod");    	
  	}
  	
  	public get paymentMethod(): string | null {
    	return this.getPropertyValue("paymentMethod");    	
  	}
	public set maxRate (value: number | null) {
    	this.setPropertyValue(value, "maxRate");    	
  	}
  	
  	public get maxRate(): number | null {
    	return this.getPropertyValue("maxRate");    	
  	}
	public set factorReadjustment (value: number | null) {
    	this.setPropertyValue(value, "factorReadjustment");    	
  	}
  	
  	public get factorReadjustment(): number | null {
    	return this.getPropertyValue("factorReadjustment");    	
  	}
	public set warrantyType (value: string | null) {
    	this.setPropertyValue(value, "warrantyType");    	
  	}
  	
  	public get warrantyType(): string | null {
    	return this.getPropertyValue("warrantyType");    	
  	}
	public set dividendType (value: string | null) {
    	this.setPropertyValue(value, "dividendType");    	
  	}
  	
  	public get dividendType(): string | null {
    	return this.getPropertyValue("dividendType");    	
  	}
	public set limit (value: string | null) {
    	this.setPropertyValue(value, "limit");    	
  	}
  	
  	public get limit(): string | null {
    	return this.getPropertyValue("limit");    	
  	}
	public set insuranceType (value: string | null) {
    	this.setPropertyValue(value, "insuranceType");    	
  	}
  	
  	public get insuranceType(): string | null {
    	return this.getPropertyValue("insuranceType");    	
  	}
	public set totalRate (value: number | null) {
    	this.setPropertyValue(value, "totalRate");    	
  	}
  	
  	public get totalRate(): number | null {
    	return this.getPropertyValue("totalRate");    	
  	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	public set rank (value: number | null) {
    	this.setPropertyValue(value, "rank");    	
  	}
  	
  	public get rank(): number | null {
    	return this.getPropertyValue("rank");    	
  	}
	public set signReadjustment (value: string | null) {
    	this.setPropertyValue(value, "signReadjustment");    	
  	}
  	
  	public get signReadjustment(): string | null {
    	return this.getPropertyValue("signReadjustment");    	
  	}
	public set payArrears (value: string | null) {
    	this.setPropertyValue(value, "payArrears");    	
  	}
  	
  	public get payArrears(): string | null {
    	return this.getPropertyValue("payArrears");    	
  	}
	public set otherRates (value: string | null) {
    	this.setPropertyValue(value, "otherRates");    	
  	}
  	
  	public get otherRates(): string | null {
    	return this.getPropertyValue("otherRates");    	
  	}
	public set factor (value: number | null) {
    	this.setPropertyValue(value, "factor");    	
  	}
  	
  	public get factor(): number | null {
    	return this.getPropertyValue("factor");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set calculationBase (value: number | null) {
    	this.setPropertyValue(value, "calculationBase");    	
  	}
  	
  	public get calculationBase(): number | null {
    	return this.getPropertyValue("calculationBase");    	
  	}
	public set interestPeriods (value: number | null) {
    	this.setPropertyValue(value, "interestPeriods");    	
  	}
  	
  	public get interestPeriods(): number | null {
    	return this.getPropertyValue("interestPeriods");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set referenceReadjustment (value: string | null) {
    	this.setPropertyValue(value, "referenceReadjustment");    	
  	}
  	
  	public get referenceReadjustment(): string | null {
    	return this.getPropertyValue("referenceReadjustment");    	
  	}
	public set signo (value: string | null) {
    	this.setPropertyValue(value, "signo");    	
  	}
  	
  	public get signo(): string | null {
    	return this.getPropertyValue("signo");    	
  	}
	public set typeItem (value: string | null) {
    	this.setPropertyValue(value, "typeItem");    	
  	}
  	
  	public get typeItem(): string | null {
    	return this.getPropertyValue("typeItem");    	
  	}
	public set warrantyAccount (value: string | null) {
    	this.setPropertyValue(value, "warrantyAccount");    	
  	}
  	
  	public get warrantyAccount(): string | null {
    	return this.getPropertyValue("warrantyAccount");    	
  	}
	public set pointsReadjustment (value: number | null) {
    	this.setPropertyValue(value, "pointsReadjustment");    	
  	}
  	
  	public get pointsReadjustment(): number | null {
    	return this.getPropertyValue("pointsReadjustment");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set item (value: string | null) {
    	this.setPropertyValue(value, "item");    	
  	}
  	
  	public get item(): string | null {
    	return this.getPropertyValue("item");    	
  	}
	public set receivable (value: number | null) {
    	this.setPropertyValue(value, "receivable");    	
  	}
  	
  	public get receivable(): number | null {
    	return this.getPropertyValue("receivable");    	
  	}
	public set warrantyCoverage (value: string | null) {
    	this.setPropertyValue(value, "warrantyCoverage");    	
  	}
  	
  	public get warrantyCoverage(): string | null {
    	return this.getPropertyValue("warrantyCoverage");    	
  	}
	public set financed (value: string | null) {
    	this.setPropertyValue(value, "financed");    	
  	}
  	
  	public get financed(): string | null {
    	return this.getPropertyValue("financed");    	
  	}
	public set negotationRate (value: number | null) {
    	this.setPropertyValue(value, "negotationRate");    	
  	}
  	
  	public get negotationRate(): number | null {
    	return this.getPropertyValue("negotationRate");    	
  	}
	public set warrantyValue (value: string | null) {
    	this.setPropertyValue(value, "warrantyValue");    	
  	}
  	
  	public get warrantyValue(): string | null {
    	return this.getPropertyValue("warrantyValue");    	
  	}
	public set insurance (value: string | null) {
    	this.setPropertyValue(value, "insurance");    	
  	}
  	
  	public get insurance(): string | null {
    	return this.getPropertyValue("insurance");    	
  	}
	public set points (value: number | null) {
    	this.setPropertyValue(value, "points");    	
  	}
  	
  	public get points(): number | null {
    	return this.getPropertyValue("points");    	
  	}
	public set minRate (value: number | null) {
    	this.setPropertyValue(value, "minRate");    	
  	}
  	
  	public get minRate(): number | null {
    	return this.getPropertyValue("minRate");    	
  	}
	public set associate (value: string | null) {
    	this.setPropertyValue(value, "associate");    	
  	}
  	
  	public get associate(): string | null {
    	return this.getPropertyValue("associate");    	
  	}
	public set cause (value: string | null) {
    	this.setPropertyValue(value, "cause");    	
  	}
  	
  	public get cause(): string | null {
    	return this.getPropertyValue("cause");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	
}