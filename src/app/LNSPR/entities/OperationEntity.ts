
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
					"field40"	,
					"participantS"	,
					"subsegment"	,
					"checkIRRtypeOperationValue"	,
					"authNumber"	,
					"contractNumber"	,
					"mortageDescription"	,
					"anchored"	,
					"economicSector"	,
					"previousInternalRateOfReturn"	,
					"money"	,
					"subFinancing"	,
					"visibleInternalRateOfReturn"	,
					"facilityNumber"	,
					"office"	,
					"authDate"	,
					"codOperation"	,
					"financialDestination"	,
					"codBank"	,
					"sector"	,
					"field89"	,
					"plazo"	,
					"success"	,
					"ubication"	,
					"official"	,
					"aliquota1"	,
					"plazoDescripcion"	,
					"state"	,
					"firstDueDate"	,
					"registrationNumber"	,
					"selectedParticipants"	,
					"typeOperation"	,
					"updatedInternalRateOfReturn"	,
					"aliquota2"	,
					"fullname"	,
					"creationDate"	,
					"savingAccount"	,
					"nameBank"	,
					"creditorType"	,
					"validateAccount"	,
					"groupCode"	,
					"typeConsumption"	,
					"internalRateOfReturn"	,
					"creditLine"	,
					"parish"	,
					"amountApproved"	,
					"classOperation"	,
					"expirationDate"	,
					"typeConsumption2"	,
					"finanMarket"	,
					"amount"	,
					"amountParticipants"	,
					"functionality"	,
					"typeLoan"	,
					"reference"	,
					"debtType"	,
					"descEconomicActivity"	,
					"descEconomicSector"	,
					"previousNumber"	,
					"checkGroupOperation"	,
					"migratedOperation"	,
					"mainDebtor"	,
					"typeParticipants"	,
					"formReposition"	,
					"company"	,
					"economicActivity"	,
					"processDate"	,
					"syndicated"	,
					"percentageParticipants"	,
					"segmentCredit"	,
					"doubleAliquot"	,
					"typeSyndicated"	,
					"certifiedAccount"	,
					"mail"	,
					"operation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set field40 (value: string | null) {
    	this.setPropertyValue(value, "field40");    	
  	}
  	
  	public get field40(): string | null {
    	return this.getPropertyValue("field40");    	
  	}
	public set participantS (value: string | null) {
    	this.setPropertyValue(value, "participantS");    	
  	}
  	
  	public get participantS(): string | null {
    	return this.getPropertyValue("participantS");    	
  	}
	public set subsegment (value: string | null) {
    	this.setPropertyValue(value, "subsegment");    	
  	}
  	
  	public get subsegment(): string | null {
    	return this.getPropertyValue("subsegment");    	
  	}
	public set checkIRRtypeOperationValue (value: string | null) {
    	this.setPropertyValue(value, "checkIRRtypeOperationValue");    	
  	}
  	
  	public get checkIRRtypeOperationValue(): string | null {
    	return this.getPropertyValue("checkIRRtypeOperationValue");    	
  	}
	public set authNumber (value: string | null) {
    	this.setPropertyValue(value, "authNumber");    	
  	}
  	
  	public get authNumber(): string | null {
    	return this.getPropertyValue("authNumber");    	
  	}
	public set contractNumber (value: string | null) {
    	this.setPropertyValue(value, "contractNumber");    	
  	}
  	
  	public get contractNumber(): string | null {
    	return this.getPropertyValue("contractNumber");    	
  	}
	public set mortageDescription (value: string | null) {
    	this.setPropertyValue(value, "mortageDescription");    	
  	}
  	
  	public get mortageDescription(): string | null {
    	return this.getPropertyValue("mortageDescription");    	
  	}
	public set anchored (value: number | null) {
    	this.setPropertyValue(value, "anchored");    	
  	}
  	
  	public get anchored(): number | null {
    	return this.getPropertyValue("anchored");    	
  	}
	public set economicSector (value: string | null) {
    	this.setPropertyValue(value, "economicSector");    	
  	}
  	
  	public get economicSector(): string | null {
    	return this.getPropertyValue("economicSector");    	
  	}
	public set previousInternalRateOfReturn (value: number | null) {
    	this.setPropertyValue(value, "previousInternalRateOfReturn");    	
  	}
  	
  	public get previousInternalRateOfReturn(): number | null {
    	return this.getPropertyValue("previousInternalRateOfReturn");    	
  	}
	public set money (value: string | null) {
    	this.setPropertyValue(value, "money");    	
  	}
  	
  	public get money(): string | null {
    	return this.getPropertyValue("money");    	
  	}
	public set subFinancing (value: string | null) {
    	this.setPropertyValue(value, "subFinancing");    	
  	}
  	
  	public get subFinancing(): string | null {
    	return this.getPropertyValue("subFinancing");    	
  	}
	public set visibleInternalRateOfReturn (value: boolean | null) {
    	this.setPropertyValue(value, "visibleInternalRateOfReturn");    	
  	}
  	
  	public get visibleInternalRateOfReturn(): boolean | null {
    	return this.getPropertyValue("visibleInternalRateOfReturn");    	
  	}
	public set facilityNumber (value: string | null) {
    	this.setPropertyValue(value, "facilityNumber");    	
  	}
  	
  	public get facilityNumber(): string | null {
    	return this.getPropertyValue("facilityNumber");    	
  	}
	public set office (value: string | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): string | null {
    	return this.getPropertyValue("office");    	
  	}
	public set authDate (value: Date | null) {
    	this.setPropertyValue(value, "authDate");    	
  	}
  	
  	public get authDate(): Date | null {
    	return this.getPropertyValue("authDate");    	
  	}
	public set codOperation (value: number | null) {
    	this.setPropertyValue(value, "codOperation");    	
  	}
  	
  	public get codOperation(): number | null {
    	return this.getPropertyValue("codOperation");    	
  	}
	public set financialDestination (value: string | null) {
    	this.setPropertyValue(value, "financialDestination");    	
  	}
  	
  	public get financialDestination(): string | null {
    	return this.getPropertyValue("financialDestination");    	
  	}
	public set codBank (value: number | null) {
    	this.setPropertyValue(value, "codBank");    	
  	}
  	
  	public get codBank(): number | null {
    	return this.getPropertyValue("codBank");    	
  	}
	public set sector (value: string | null) {
    	this.setPropertyValue(value, "sector");    	
  	}
  	
  	public get sector(): string | null {
    	return this.getPropertyValue("sector");    	
  	}
	public set field89 (value: string | null) {
    	this.setPropertyValue(value, "field89");    	
  	}
  	
  	public get field89(): string | null {
    	return this.getPropertyValue("field89");    	
  	}
	public set plazo (value: number | null) {
    	this.setPropertyValue(value, "plazo");    	
  	}
  	
  	public get plazo(): number | null {
    	return this.getPropertyValue("plazo");    	
  	}
	public set success (value: boolean | null) {
    	this.setPropertyValue(value, "success");    	
  	}
  	
  	public get success(): boolean | null {
    	return this.getPropertyValue("success");    	
  	}
	public set ubication (value: string | null) {
    	this.setPropertyValue(value, "ubication");    	
  	}
  	
  	public get ubication(): string | null {
    	return this.getPropertyValue("ubication");    	
  	}
	public set official (value: string | null) {
    	this.setPropertyValue(value, "official");    	
  	}
  	
  	public get official(): string | null {
    	return this.getPropertyValue("official");    	
  	}
	public set aliquota1 (value: string | null) {
    	this.setPropertyValue(value, "aliquota1");    	
  	}
  	
  	public get aliquota1(): string | null {
    	return this.getPropertyValue("aliquota1");    	
  	}
	public set plazoDescripcion (value: string | null) {
    	this.setPropertyValue(value, "plazoDescripcion");    	
  	}
  	
  	public get plazoDescripcion(): string | null {
    	return this.getPropertyValue("plazoDescripcion");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set firstDueDate (value: Date | null) {
    	this.setPropertyValue(value, "firstDueDate");    	
  	}
  	
  	public get firstDueDate(): Date | null {
    	return this.getPropertyValue("firstDueDate");    	
  	}
	public set registrationNumber (value: string | null) {
    	this.setPropertyValue(value, "registrationNumber");    	
  	}
  	
  	public get registrationNumber(): string | null {
    	return this.getPropertyValue("registrationNumber");    	
  	}
	public set selectedParticipants (value: number | null) {
    	this.setPropertyValue(value, "selectedParticipants");    	
  	}
  	
  	public get selectedParticipants(): number | null {
    	return this.getPropertyValue("selectedParticipants");    	
  	}
	public set typeOperation (value: string | null) {
    	this.setPropertyValue(value, "typeOperation");    	
  	}
  	
  	public get typeOperation(): string | null {
    	return this.getPropertyValue("typeOperation");    	
  	}
	public set updatedInternalRateOfReturn (value: boolean | null) {
    	this.setPropertyValue(value, "updatedInternalRateOfReturn");    	
  	}
  	
  	public get updatedInternalRateOfReturn(): boolean | null {
    	return this.getPropertyValue("updatedInternalRateOfReturn");    	
  	}
	public set aliquota2 (value: string | null) {
    	this.setPropertyValue(value, "aliquota2");    	
  	}
  	
  	public get aliquota2(): string | null {
    	return this.getPropertyValue("aliquota2");    	
  	}
	public set fullname (value: string | null) {
    	this.setPropertyValue(value, "fullname");    	
  	}
  	
  	public get fullname(): string | null {
    	return this.getPropertyValue("fullname");    	
  	}
	public set creationDate (value: Date | null) {
    	this.setPropertyValue(value, "creationDate");    	
  	}
  	
  	public get creationDate(): Date | null {
    	return this.getPropertyValue("creationDate");    	
  	}
	public set savingAccount (value: string | null) {
    	this.setPropertyValue(value, "savingAccount");    	
  	}
  	
  	public get savingAccount(): string | null {
    	return this.getPropertyValue("savingAccount");    	
  	}
	public set nameBank (value: string | null) {
    	this.setPropertyValue(value, "nameBank");    	
  	}
  	
  	public get nameBank(): string | null {
    	return this.getPropertyValue("nameBank");    	
  	}
	public set creditorType (value: string | null) {
    	this.setPropertyValue(value, "creditorType");    	
  	}
  	
  	public get creditorType(): string | null {
    	return this.getPropertyValue("creditorType");    	
  	}
	public set validateAccount (value: string | null) {
    	this.setPropertyValue(value, "validateAccount");    	
  	}
  	
  	public get validateAccount(): string | null {
    	return this.getPropertyValue("validateAccount");    	
  	}
	public set groupCode (value: string | null) {
    	this.setPropertyValue(value, "groupCode");    	
  	}
  	
  	public get groupCode(): string | null {
    	return this.getPropertyValue("groupCode");    	
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
	public set creditLine (value: string | null) {
    	this.setPropertyValue(value, "creditLine");    	
  	}
  	
  	public get creditLine(): string | null {
    	return this.getPropertyValue("creditLine");    	
  	}
	public set parish (value: string | null) {
    	this.setPropertyValue(value, "parish");    	
  	}
  	
  	public get parish(): string | null {
    	return this.getPropertyValue("parish");    	
  	}
	public set amountApproved (value: number | null) {
    	this.setPropertyValue(value, "amountApproved");    	
  	}
  	
  	public get amountApproved(): number | null {
    	return this.getPropertyValue("amountApproved");    	
  	}
	public set classOperation (value: string | null) {
    	this.setPropertyValue(value, "classOperation");    	
  	}
  	
  	public get classOperation(): string | null {
    	return this.getPropertyValue("classOperation");    	
  	}
	public set expirationDate (value: Date | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): Date | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set typeConsumption2 (value: string | null) {
    	this.setPropertyValue(value, "typeConsumption2");    	
  	}
  	
  	public get typeConsumption2(): string | null {
    	return this.getPropertyValue("typeConsumption2");    	
  	}
	public set finanMarket (value: string | null) {
    	this.setPropertyValue(value, "finanMarket");    	
  	}
  	
  	public get finanMarket(): string | null {
    	return this.getPropertyValue("finanMarket");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set amountParticipants (value: number | null) {
    	this.setPropertyValue(value, "amountParticipants");    	
  	}
  	
  	public get amountParticipants(): number | null {
    	return this.getPropertyValue("amountParticipants");    	
  	}
	public set functionality (value: string | null) {
    	this.setPropertyValue(value, "functionality");    	
  	}
  	
  	public get functionality(): string | null {
    	return this.getPropertyValue("functionality");    	
  	}
	public set typeLoan (value: string | null) {
    	this.setPropertyValue(value, "typeLoan");    	
  	}
  	
  	public get typeLoan(): string | null {
    	return this.getPropertyValue("typeLoan");    	
  	}
	public set reference (value: string | null) {
    	this.setPropertyValue(value, "reference");    	
  	}
  	
  	public get reference(): string | null {
    	return this.getPropertyValue("reference");    	
  	}
	public set debtType (value: string | null) {
    	this.setPropertyValue(value, "debtType");    	
  	}
  	
  	public get debtType(): string | null {
    	return this.getPropertyValue("debtType");    	
  	}
	public set descEconomicActivity (value: string | null) {
    	this.setPropertyValue(value, "descEconomicActivity");    	
  	}
  	
  	public get descEconomicActivity(): string | null {
    	return this.getPropertyValue("descEconomicActivity");    	
  	}
	public set descEconomicSector (value: string | null) {
    	this.setPropertyValue(value, "descEconomicSector");    	
  	}
  	
  	public get descEconomicSector(): string | null {
    	return this.getPropertyValue("descEconomicSector");    	
  	}
	public set previousNumber (value: string | null) {
    	this.setPropertyValue(value, "previousNumber");    	
  	}
  	
  	public get previousNumber(): string | null {
    	return this.getPropertyValue("previousNumber");    	
  	}
	public set checkGroupOperation (value: boolean | null) {
    	this.setPropertyValue(value, "checkGroupOperation");    	
  	}
  	
  	public get checkGroupOperation(): boolean | null {
    	return this.getPropertyValue("checkGroupOperation");    	
  	}
	public set migratedOperation (value: string | null) {
    	this.setPropertyValue(value, "migratedOperation");    	
  	}
  	
  	public get migratedOperation(): string | null {
    	return this.getPropertyValue("migratedOperation");    	
  	}
	public set mainDebtor (value: number | null) {
    	this.setPropertyValue(value, "mainDebtor");    	
  	}
  	
  	public get mainDebtor(): number | null {
    	return this.getPropertyValue("mainDebtor");    	
  	}
	public set typeParticipants (value: string | null) {
    	this.setPropertyValue(value, "typeParticipants");    	
  	}
  	
  	public get typeParticipants(): string | null {
    	return this.getPropertyValue("typeParticipants");    	
  	}
	public set formReposition (value: string | null) {
    	this.setPropertyValue(value, "formReposition");    	
  	}
  	
  	public get formReposition(): string | null {
    	return this.getPropertyValue("formReposition");    	
  	}
	public set company (value: number | null) {
    	this.setPropertyValue(value, "company");    	
  	}
  	
  	public get company(): number | null {
    	return this.getPropertyValue("company");    	
  	}
	public set economicActivity (value: string | null) {
    	this.setPropertyValue(value, "economicActivity");    	
  	}
  	
  	public get economicActivity(): string | null {
    	return this.getPropertyValue("economicActivity");    	
  	}
	public set processDate (value: string | null) {
    	this.setPropertyValue(value, "processDate");    	
  	}
  	
  	public get processDate(): string | null {
    	return this.getPropertyValue("processDate");    	
  	}
	public set syndicated (value: boolean | null) {
    	this.setPropertyValue(value, "syndicated");    	
  	}
  	
  	public get syndicated(): boolean | null {
    	return this.getPropertyValue("syndicated");    	
  	}
	public set percentageParticipants (value: number | null) {
    	this.setPropertyValue(value, "percentageParticipants");    	
  	}
  	
  	public get percentageParticipants(): number | null {
    	return this.getPropertyValue("percentageParticipants");    	
  	}
	public set segmentCredit (value: string | null) {
    	this.setPropertyValue(value, "segmentCredit");    	
  	}
  	
  	public get segmentCredit(): string | null {
    	return this.getPropertyValue("segmentCredit");    	
  	}
	public set doubleAliquot (value: string | null) {
    	this.setPropertyValue(value, "doubleAliquot");    	
  	}
  	
  	public get doubleAliquot(): string | null {
    	return this.getPropertyValue("doubleAliquot");    	
  	}
	public set typeSyndicated (value: string | null) {
    	this.setPropertyValue(value, "typeSyndicated");    	
  	}
  	
  	public get typeSyndicated(): string | null {
    	return this.getPropertyValue("typeSyndicated");    	
  	}
	public set certifiedAccount (value: string | null) {
    	this.setPropertyValue(value, "certifiedAccount");    	
  	}
  	
  	public get certifiedAccount(): string | null {
    	return this.getPropertyValue("certifiedAccount");    	
  	}
	public set mail (value: string | null) {
    	this.setPropertyValue(value, "mail");    	
  	}
  	
  	public get mail(): string | null {
    	return this.getPropertyValue("mail");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	
}