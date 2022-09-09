
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AmortizationTableBC  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"cityDesc"	,
					"term"	,
					"period"	,
					"addressDesc"	,
					"totToPay"	,
					"fullname"	,
					"presidentName"	,
					"paytel"	,
					"secretaryName"	,
					"rate"	,
					"grossAmount"	,
					"walmart"	,
					"initialData"	,
					"openingExpenses"	,
					"bankOperationId"	,
					"creditAmount"	,
					"colonyDesc"	,
					"currencySymbol"	,
					"recaNumber"	,
					"totToDeposit"	,
					"clientId"	,
					"municipalityDesc"	,
					"statusDesc"	,
					"money"	,
					"treasurerName"	,
					"operationType"	
			];			
			super(undefined,props);
		}   	    
	}
	public set cityDesc (value: string | null) {
    	this.setPropertyValue(value, "cityDesc");    	
  	}
  	
  	public get cityDesc(): string | null {
    	return this.getPropertyValue("cityDesc");    	
  	}
	public set term (value: number | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): number | null {
    	return this.getPropertyValue("term");    	
  	}
	public set period (value: string | null) {
    	this.setPropertyValue(value, "period");    	
  	}
  	
  	public get period(): string | null {
    	return this.getPropertyValue("period");    	
  	}
	public set addressDesc (value: string | null) {
    	this.setPropertyValue(value, "addressDesc");    	
  	}
  	
  	public get addressDesc(): string | null {
    	return this.getPropertyValue("addressDesc");    	
  	}
	public set totToPay (value: number | null) {
    	this.setPropertyValue(value, "totToPay");    	
  	}
  	
  	public get totToPay(): number | null {
    	return this.getPropertyValue("totToPay");    	
  	}
	public set fullname (value: string | null) {
    	this.setPropertyValue(value, "fullname");    	
  	}
  	
  	public get fullname(): string | null {
    	return this.getPropertyValue("fullname");    	
  	}
	public set presidentName (value: string | null) {
    	this.setPropertyValue(value, "presidentName");    	
  	}
  	
  	public get presidentName(): string | null {
    	return this.getPropertyValue("presidentName");    	
  	}
	public set paytel (value: number | null) {
    	this.setPropertyValue(value, "paytel");    	
  	}
  	
  	public get paytel(): number | null {
    	return this.getPropertyValue("paytel");    	
  	}
	public set secretaryName (value: string | null) {
    	this.setPropertyValue(value, "secretaryName");    	
  	}
  	
  	public get secretaryName(): string | null {
    	return this.getPropertyValue("secretaryName");    	
  	}
	public set rate (value: number | null) {
    	this.setPropertyValue(value, "rate");    	
  	}
  	
  	public get rate(): number | null {
    	return this.getPropertyValue("rate");    	
  	}
	public set grossAmount (value: number | null) {
    	this.setPropertyValue(value, "grossAmount");    	
  	}
  	
  	public get grossAmount(): number | null {
    	return this.getPropertyValue("grossAmount");    	
  	}
	public set walmart (value: number | null) {
    	this.setPropertyValue(value, "walmart");    	
  	}
  	
  	public get walmart(): number | null {
    	return this.getPropertyValue("walmart");    	
  	}
	public set initialData (value: string | null) {
    	this.setPropertyValue(value, "initialData");    	
  	}
  	
  	public get initialData(): string | null {
    	return this.getPropertyValue("initialData");    	
  	}
	public set openingExpenses (value: number | null) {
    	this.setPropertyValue(value, "openingExpenses");    	
  	}
  	
  	public get openingExpenses(): number | null {
    	return this.getPropertyValue("openingExpenses");    	
  	}
	public set bankOperationId (value: string | null) {
    	this.setPropertyValue(value, "bankOperationId");    	
  	}
  	
  	public get bankOperationId(): string | null {
    	return this.getPropertyValue("bankOperationId");    	
  	}
	public set creditAmount (value: number | null) {
    	this.setPropertyValue(value, "creditAmount");    	
  	}
  	
  	public get creditAmount(): number | null {
    	return this.getPropertyValue("creditAmount");    	
  	}
	public set colonyDesc (value: string | null) {
    	this.setPropertyValue(value, "colonyDesc");    	
  	}
  	
  	public get colonyDesc(): string | null {
    	return this.getPropertyValue("colonyDesc");    	
  	}
	public set currencySymbol (value: string | null) {
    	this.setPropertyValue(value, "currencySymbol");    	
  	}
  	
  	public get currencySymbol(): string | null {
    	return this.getPropertyValue("currencySymbol");    	
  	}
	public set recaNumber (value: string | null) {
    	this.setPropertyValue(value, "recaNumber");    	
  	}
  	
  	public get recaNumber(): string | null {
    	return this.getPropertyValue("recaNumber");    	
  	}
	public set totToDeposit (value: number | null) {
    	this.setPropertyValue(value, "totToDeposit");    	
  	}
  	
  	public get totToDeposit(): number | null {
    	return this.getPropertyValue("totToDeposit");    	
  	}
	public set clientId (value: number | null) {
    	this.setPropertyValue(value, "clientId");    	
  	}
  	
  	public get clientId(): number | null {
    	return this.getPropertyValue("clientId");    	
  	}
	public set municipalityDesc (value: string | null) {
    	this.setPropertyValue(value, "municipalityDesc");    	
  	}
  	
  	public get municipalityDesc(): string | null {
    	return this.getPropertyValue("municipalityDesc");    	
  	}
	public set statusDesc (value: string | null) {
    	this.setPropertyValue(value, "statusDesc");    	
  	}
  	
  	public get statusDesc(): string | null {
    	return this.getPropertyValue("statusDesc");    	
  	}
	public set money (value: number | null) {
    	this.setPropertyValue(value, "money");    	
  	}
  	
  	public get money(): number | null {
    	return this.getPropertyValue("money");    	
  	}
	public set treasurerName (value: string | null) {
    	this.setPropertyValue(value, "treasurerName");    	
  	}
  	
  	public get treasurerName(): string | null {
    	return this.getPropertyValue("treasurerName");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	
}