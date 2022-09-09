
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ItemsLoan  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"concept"	,
					"description"	,
					"itemType"	,
					"paymentMethod"	,
					"value"	,
					"priority"	,
					"latePayment"	,
					"cause"	,
					"reference"	,
					"sign"	,
					"pointsValue"	,
					"pointsType"	,
					"valueTotalRate"	,
					"negotiatedRate"	,
					"annualEfecRate"	,
					"reajustmenSign"	,
					"reajustmentValuePoints"	,
					"reajustmentReference"	,
					"gain"	,
					"baseCalculation"	,
					"chargeForRinging"	,
					"warrantyType"	,
					"warrantyNumber"	,
					"coveragePercentage"	,
					"warrantyValue"	,
					"dividendType"	,
					"interestPeriod"	,
					"tableOtherRate"	
			];			
			super(undefined,props);
		}   	    
	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set itemType (value: string | null) {
    	this.setPropertyValue(value, "itemType");    	
  	}
  	
  	public get itemType(): string | null {
    	return this.getPropertyValue("itemType");    	
  	}
	public set paymentMethod (value: string | null) {
    	this.setPropertyValue(value, "paymentMethod");    	
  	}
  	
  	public get paymentMethod(): string | null {
    	return this.getPropertyValue("paymentMethod");    	
  	}
	public set value (value: number | null) {
    	this.setPropertyValue(value, "value");    	
  	}
  	
  	public get value(): number | null {
    	return this.getPropertyValue("value");    	
  	}
	public set priority (value: number | null) {
    	this.setPropertyValue(value, "priority");    	
  	}
  	
  	public get priority(): number | null {
    	return this.getPropertyValue("priority");    	
  	}
	public set latePayment (value: string | null) {
    	this.setPropertyValue(value, "latePayment");    	
  	}
  	
  	public get latePayment(): string | null {
    	return this.getPropertyValue("latePayment");    	
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
	public set sign (value: string | null) {
    	this.setPropertyValue(value, "sign");    	
  	}
  	
  	public get sign(): string | null {
    	return this.getPropertyValue("sign");    	
  	}
	public set pointsValue (value: number | null) {
    	this.setPropertyValue(value, "pointsValue");    	
  	}
  	
  	public get pointsValue(): number | null {
    	return this.getPropertyValue("pointsValue");    	
  	}
	public set pointsType (value: string | null) {
    	this.setPropertyValue(value, "pointsType");    	
  	}
  	
  	public get pointsType(): string | null {
    	return this.getPropertyValue("pointsType");    	
  	}
	public set valueTotalRate (value: number | null) {
    	this.setPropertyValue(value, "valueTotalRate");    	
  	}
  	
  	public get valueTotalRate(): number | null {
    	return this.getPropertyValue("valueTotalRate");    	
  	}
	public set negotiatedRate (value: number | null) {
    	this.setPropertyValue(value, "negotiatedRate");    	
  	}
  	
  	public get negotiatedRate(): number | null {
    	return this.getPropertyValue("negotiatedRate");    	
  	}
	public set annualEfecRate (value: number | null) {
    	this.setPropertyValue(value, "annualEfecRate");    	
  	}
  	
  	public get annualEfecRate(): number | null {
    	return this.getPropertyValue("annualEfecRate");    	
  	}
	public set reajustmenSign (value: string | null) {
    	this.setPropertyValue(value, "reajustmenSign");    	
  	}
  	
  	public get reajustmenSign(): string | null {
    	return this.getPropertyValue("reajustmenSign");    	
  	}
	public set reajustmentValuePoints (value: number | null) {
    	this.setPropertyValue(value, "reajustmentValuePoints");    	
  	}
  	
  	public get reajustmentValuePoints(): number | null {
    	return this.getPropertyValue("reajustmentValuePoints");    	
  	}
	public set reajustmentReference (value: string | null) {
    	this.setPropertyValue(value, "reajustmentReference");    	
  	}
  	
  	public get reajustmentReference(): string | null {
    	return this.getPropertyValue("reajustmentReference");    	
  	}
	public set gain (value: number | null) {
    	this.setPropertyValue(value, "gain");    	
  	}
  	
  	public get gain(): number | null {
    	return this.getPropertyValue("gain");    	
  	}
	public set baseCalculation (value: number | null) {
    	this.setPropertyValue(value, "baseCalculation");    	
  	}
  	
  	public get baseCalculation(): number | null {
    	return this.getPropertyValue("baseCalculation");    	
  	}
	public set chargeForRinging (value: number | null) {
    	this.setPropertyValue(value, "chargeForRinging");    	
  	}
  	
  	public get chargeForRinging(): number | null {
    	return this.getPropertyValue("chargeForRinging");    	
  	}
	public set warrantyType (value: string | null) {
    	this.setPropertyValue(value, "warrantyType");    	
  	}
  	
  	public get warrantyType(): string | null {
    	return this.getPropertyValue("warrantyType");    	
  	}
	public set warrantyNumber (value: string | null) {
    	this.setPropertyValue(value, "warrantyNumber");    	
  	}
  	
  	public get warrantyNumber(): string | null {
    	return this.getPropertyValue("warrantyNumber");    	
  	}
	public set coveragePercentage (value: string | null) {
    	this.setPropertyValue(value, "coveragePercentage");    	
  	}
  	
  	public get coveragePercentage(): string | null {
    	return this.getPropertyValue("coveragePercentage");    	
  	}
	public set warrantyValue (value: string | null) {
    	this.setPropertyValue(value, "warrantyValue");    	
  	}
  	
  	public get warrantyValue(): string | null {
    	return this.getPropertyValue("warrantyValue");    	
  	}
	public set dividendType (value: string | null) {
    	this.setPropertyValue(value, "dividendType");    	
  	}
  	
  	public get dividendType(): string | null {
    	return this.getPropertyValue("dividendType");    	
  	}
	public set interestPeriod (value: number | null) {
    	this.setPropertyValue(value, "interestPeriod");    	
  	}
  	
  	public get interestPeriod(): number | null {
    	return this.getPropertyValue("interestPeriod");    	
  	}
	public set tableOtherRate (value: string | null) {
    	this.setPropertyValue(value, "tableOtherRate");    	
  	}
  	
  	public get tableOtherRate(): string | null {
    	return this.getPropertyValue("tableOtherRate");    	
  	}
	
}