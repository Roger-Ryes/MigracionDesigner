
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OperationEntity  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"amount"	,
					"certifiedAccount"	,
					"creditLine"	,
					"descEconomicActivity"	,
					"updatedInternalOfReturn"	,
					"validateAccount"	,
					"success"	,
					"typeOperation"	,
					"aliquota2"	,
					"state"	,
					"money"	,
					"mainDebtor"	,
					"migratedOperation"	,
					"typeConsumption2"	,
					"doubleAliquot"	,
					"savingAccount"	,
					"parish"	,
					"economicActivity"	,
					"previousNumber"	,
					"subsegment"	,
					"classOperation"	,
					"creationDate"	,
					"typeConsumption"	,
					"internalRateOfReturn"	,
					"economicSector"	,
					"company"	,
					"groupCode"	,
					"office"	,
					"fullname"	,
					"operation"	,
					"expirationDate"	,
					"field40"	,
					"field89"	,
					"mortageDescription"	,
					"processDate"	,
					"official"	,
					"ubication"	,
					"previousInternalOfReturn"	,
					"checkIRRtypeOperationValue"	,
					"isGroup"	,
					"amountApproved"	,
					"checkGroupOperation"	,
					"financialDestination"	,
					"desEconomicSector"	,
					"functionality"	,
					"sector"	,
					"aliquota1"	,
					"typeLoan"	,
					"visibleInternalOfReturn"	,
					"segmentCredit"	,
					"reference"	
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
	public set certifiedAccount (value: string | null) {
    	this.setPropertyValue(value, "certifiedAccount");    	
  	}
  	
  	public get certifiedAccount(): string | null {
    	return this.getPropertyValue("certifiedAccount");    	
  	}
	public set creditLine (value: string | null) {
    	this.setPropertyValue(value, "creditLine");    	
  	}
  	
  	public get creditLine(): string | null {
    	return this.getPropertyValue("creditLine");    	
  	}
	public set descEconomicActivity (value: string | null) {
    	this.setPropertyValue(value, "descEconomicActivity");    	
  	}
  	
  	public get descEconomicActivity(): string | null {
    	return this.getPropertyValue("descEconomicActivity");    	
  	}
	public set updatedInternalOfReturn (value: boolean | null) {
    	this.setPropertyValue(value, "updatedInternalOfReturn");    	
  	}
  	
  	public get updatedInternalOfReturn(): boolean | null {
    	return this.getPropertyValue("updatedInternalOfReturn");    	
  	}
	public set validateAccount (value: string | null) {
    	this.setPropertyValue(value, "validateAccount");    	
  	}
  	
  	public get validateAccount(): string | null {
    	return this.getPropertyValue("validateAccount");    	
  	}
	public set success (value: boolean | null) {
    	this.setPropertyValue(value, "success");    	
  	}
  	
  	public get success(): boolean | null {
    	return this.getPropertyValue("success");    	
  	}
	public set typeOperation (value: string | null) {
    	this.setPropertyValue(value, "typeOperation");    	
  	}
  	
  	public get typeOperation(): string | null {
    	return this.getPropertyValue("typeOperation");    	
  	}
	public set aliquota2 (value: string | null) {
    	this.setPropertyValue(value, "aliquota2");    	
  	}
  	
  	public get aliquota2(): string | null {
    	return this.getPropertyValue("aliquota2");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set money (value: string | null) {
    	this.setPropertyValue(value, "money");    	
  	}
  	
  	public get money(): string | null {
    	return this.getPropertyValue("money");    	
  	}
	public set mainDebtor (value: number | null) {
    	this.setPropertyValue(value, "mainDebtor");    	
  	}
  	
  	public get mainDebtor(): number | null {
    	return this.getPropertyValue("mainDebtor");    	
  	}
	public set migratedOperation (value: string | null) {
    	this.setPropertyValue(value, "migratedOperation");    	
  	}
  	
  	public get migratedOperation(): string | null {
    	return this.getPropertyValue("migratedOperation");    	
  	}
	public set typeConsumption2 (value: string | null) {
    	this.setPropertyValue(value, "typeConsumption2");    	
  	}
  	
  	public get typeConsumption2(): string | null {
    	return this.getPropertyValue("typeConsumption2");    	
  	}
	public set doubleAliquot (value: string | null) {
    	this.setPropertyValue(value, "doubleAliquot");    	
  	}
  	
  	public get doubleAliquot(): string | null {
    	return this.getPropertyValue("doubleAliquot");    	
  	}
	public set savingAccount (value: string | null) {
    	this.setPropertyValue(value, "savingAccount");    	
  	}
  	
  	public get savingAccount(): string | null {
    	return this.getPropertyValue("savingAccount");    	
  	}
	public set parish (value: string | null) {
    	this.setPropertyValue(value, "parish");    	
  	}
  	
  	public get parish(): string | null {
    	return this.getPropertyValue("parish");    	
  	}
	public set economicActivity (value: string | null) {
    	this.setPropertyValue(value, "economicActivity");    	
  	}
  	
  	public get economicActivity(): string | null {
    	return this.getPropertyValue("economicActivity");    	
  	}
	public set previousNumber (value: string | null) {
    	this.setPropertyValue(value, "previousNumber");    	
  	}
  	
  	public get previousNumber(): string | null {
    	return this.getPropertyValue("previousNumber");    	
  	}
	public set subsegment (value: string | null) {
    	this.setPropertyValue(value, "subsegment");    	
  	}
  	
  	public get subsegment(): string | null {
    	return this.getPropertyValue("subsegment");    	
  	}
	public set classOperation (value: string | null) {
    	this.setPropertyValue(value, "classOperation");    	
  	}
  	
  	public get classOperation(): string | null {
    	return this.getPropertyValue("classOperation");    	
  	}
	public set creationDate (value: Date | null) {
    	this.setPropertyValue(value, "creationDate");    	
  	}
  	
  	public get creationDate(): Date | null {
    	return this.getPropertyValue("creationDate");    	
  	}
	public set typeConsumption (value: string | null) {
    	this.setPropertyValue(value, "typeConsumption");    	
  	}
  	
  	public get typeConsumption(): string | null {
    	return this.getPropertyValue("typeConsumption");    	
  	}
	public set internalRateOfReturn (value: number | null) {
    	this.setPropertyValue(value, "internalRateOfReturn");    	
  	}
  	
  	public get internalRateOfReturn(): number | null {
    	return this.getPropertyValue("internalRateOfReturn");    	
  	}
	public set economicSector (value: string | null) {
    	this.setPropertyValue(value, "economicSector");    	
  	}
  	
  	public get economicSector(): string | null {
    	return this.getPropertyValue("economicSector");    	
  	}
	public set company (value: number | null) {
    	this.setPropertyValue(value, "company");    	
  	}
  	
  	public get company(): number | null {
    	return this.getPropertyValue("company");    	
  	}
	public set groupCode (value: string | null) {
    	this.setPropertyValue(value, "groupCode");    	
  	}
  	
  	public get groupCode(): string | null {
    	return this.getPropertyValue("groupCode");    	
  	}
	public set office (value: string | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): string | null {
    	return this.getPropertyValue("office");    	
  	}
	public set fullname (value: string | null) {
    	this.setPropertyValue(value, "fullname");    	
  	}
  	
  	public get fullname(): string | null {
    	return this.getPropertyValue("fullname");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set field40 (value: string | null) {
    	this.setPropertyValue(value, "field40");    	
  	}
  	
  	public get field40(): string | null {
    	return this.getPropertyValue("field40");    	
  	}
	public set field89 (value: string | null) {
    	this.setPropertyValue(value, "field89");    	
  	}
  	
  	public get field89(): string | null {
    	return this.getPropertyValue("field89");    	
  	}
	public set mortageDescription (value: string | null) {
    	this.setPropertyValue(value, "mortageDescription");    	
  	}
  	
  	public get mortageDescription(): string | null {
    	return this.getPropertyValue("mortageDescription");    	
  	}
	public set processDate (value: string | null) {
    	this.setPropertyValue(value, "processDate");    	
  	}
  	
  	public get processDate(): string | null {
    	return this.getPropertyValue("processDate");    	
  	}
	public set official (value: string | null) {
    	this.setPropertyValue(value, "official");    	
  	}
  	
  	public get official(): string | null {
    	return this.getPropertyValue("official");    	
  	}
	public set ubication (value: string | null) {
    	this.setPropertyValue(value, "ubication");    	
  	}
  	
  	public get ubication(): string | null {
    	return this.getPropertyValue("ubication");    	
  	}
	public set previousInternalOfReturn (value: number | null) {
    	this.setPropertyValue(value, "previousInternalOfReturn");    	
  	}
  	
  	public get previousInternalOfReturn(): number | null {
    	return this.getPropertyValue("previousInternalOfReturn");    	
  	}
	public set checkIRRtypeOperationValue (value: string | null) {
    	this.setPropertyValue(value, "checkIRRtypeOperationValue");    	
  	}
  	
  	public get checkIRRtypeOperationValue(): string | null {
    	return this.getPropertyValue("checkIRRtypeOperationValue");    	
  	}
	public set isGroup (value: string | null) {
    	this.setPropertyValue(value, "isGroup");    	
  	}
  	
  	public get isGroup(): string | null {
    	return this.getPropertyValue("isGroup");    	
  	}
	public set amountApproved (value: number | null) {
    	this.setPropertyValue(value, "amountApproved");    	
  	}
  	
  	public get amountApproved(): number | null {
    	return this.getPropertyValue("amountApproved");    	
  	}
	public set checkGroupOperation (value: boolean | null) {
    	this.setPropertyValue(value, "checkGroupOperation");    	
  	}
  	
  	public get checkGroupOperation(): boolean | null {
    	return this.getPropertyValue("checkGroupOperation");    	
  	}
	public set financialDestination (value: string | null) {
    	this.setPropertyValue(value, "financialDestination");    	
  	}
  	
  	public get financialDestination(): string | null {
    	return this.getPropertyValue("financialDestination");    	
  	}
	public set desEconomicSector (value: string | null) {
    	this.setPropertyValue(value, "desEconomicSector");    	
  	}
  	
  	public get desEconomicSector(): string | null {
    	return this.getPropertyValue("desEconomicSector");    	
  	}
	public set functionality (value: string | null) {
    	this.setPropertyValue(value, "functionality");    	
  	}
  	
  	public get functionality(): string | null {
    	return this.getPropertyValue("functionality");    	
  	}
	public set sector (value: string | null) {
    	this.setPropertyValue(value, "sector");    	
  	}
  	
  	public get sector(): string | null {
    	return this.getPropertyValue("sector");    	
  	}
	public set aliquota1 (value: string | null) {
    	this.setPropertyValue(value, "aliquota1");    	
  	}
  	
  	public get aliquota1(): string | null {
    	return this.getPropertyValue("aliquota1");    	
  	}
	public set typeLoan (value: string | null) {
    	this.setPropertyValue(value, "typeLoan");    	
  	}
  	
  	public get typeLoan(): string | null {
    	return this.getPropertyValue("typeLoan");    	
  	}
	public set visibleInternalOfReturn (value: boolean | null) {
    	this.setPropertyValue(value, "visibleInternalOfReturn");    	
  	}
  	
  	public get visibleInternalOfReturn(): boolean | null {
    	return this.getPropertyValue("visibleInternalOfReturn");    	
  	}
	public set segmentCredit (value: string | null) {
    	this.setPropertyValue(value, "segmentCredit");    	
  	}
  	
  	public get segmentCredit(): string | null {
    	return this.getPropertyValue("segmentCredit");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	
}