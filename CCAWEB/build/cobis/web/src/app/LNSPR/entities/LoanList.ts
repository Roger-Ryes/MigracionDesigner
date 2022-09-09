
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"numProcedure"	,
					"answerOut"	,
					"descriptionMistake"	,
					"seleccion"	,
					"process"	,
					"client"	,
					"oficial"	,
					"credit"	,
					"isDisbursment"	,
					"lastProcessDate"	,
					"product"	,
					"concessionDate"	,
					"untilDate"	,
					"loanBankID"	,
					"specialAdjust"	,
					"previousOption"	,
					"amount"	,
					"clientCode"	,
					"desOperationType"	,
					"expirationDate"	,
					"seqGrid"	,
					"group"	,
					"lote"	,
					"numIdentification"	,
					"condition"	,
					"creditLine"	,
					"categoryGroup"	,
					"currencyName"	,
					"currency"	,
					"pastDueBalance"	,
					"disbursementDate"	,
					"sequential"	,
					"typeClass"	,
					"historical"	,
					"operation"	,
					"type"	,
					"answList"	,
					"state"	,
					"migratedOperation"	,
					"daysPastDue"	,
					"balanceOperation"	,
					"office"	,
					"officer"	
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
	public set answerOut (value: string | null) {
    	this.setPropertyValue(value, "answerOut");    	
  	}
  	
  	public get answerOut(): string | null {
    	return this.getPropertyValue("answerOut");    	
  	}
	public set descriptionMistake (value: string | null) {
    	this.setPropertyValue(value, "descriptionMistake");    	
  	}
  	
  	public get descriptionMistake(): string | null {
    	return this.getPropertyValue("descriptionMistake");    	
  	}
	public set seleccion (value: boolean | null) {
    	this.setPropertyValue(value, "seleccion");    	
  	}
  	
  	public get seleccion(): boolean | null {
    	return this.getPropertyValue("seleccion");    	
  	}
	public set process (value: string | null) {
    	this.setPropertyValue(value, "process");    	
  	}
  	
  	public get process(): string | null {
    	return this.getPropertyValue("process");    	
  	}
	public set client (value: string | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): string | null {
    	return this.getPropertyValue("client");    	
  	}
	public set oficial (value: string | null) {
    	this.setPropertyValue(value, "oficial");    	
  	}
  	
  	public get oficial(): string | null {
    	return this.getPropertyValue("oficial");    	
  	}
	public set credit (value: string | null) {
    	this.setPropertyValue(value, "credit");    	
  	}
  	
  	public get credit(): string | null {
    	return this.getPropertyValue("credit");    	
  	}
	public set isDisbursment (value: string | null) {
    	this.setPropertyValue(value, "isDisbursment");    	
  	}
  	
  	public get isDisbursment(): string | null {
    	return this.getPropertyValue("isDisbursment");    	
  	}
	public set lastProcessDate (value: string | null) {
    	this.setPropertyValue(value, "lastProcessDate");    	
  	}
  	
  	public get lastProcessDate(): string | null {
    	return this.getPropertyValue("lastProcessDate");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
  	}
	public set concessionDate (value: string | null) {
    	this.setPropertyValue(value, "concessionDate");    	
  	}
  	
  	public get concessionDate(): string | null {
    	return this.getPropertyValue("concessionDate");    	
  	}
	public set untilDate (value: Date | null) {
    	this.setPropertyValue(value, "untilDate");    	
  	}
  	
  	public get untilDate(): Date | null {
    	return this.getPropertyValue("untilDate");    	
  	}
	public set loanBankID (value: string | null) {
    	this.setPropertyValue(value, "loanBankID");    	
  	}
  	
  	public get loanBankID(): string | null {
    	return this.getPropertyValue("loanBankID");    	
  	}
	public set specialAdjust (value: string | null) {
    	this.setPropertyValue(value, "specialAdjust");    	
  	}
  	
  	public get specialAdjust(): string | null {
    	return this.getPropertyValue("specialAdjust");    	
  	}
	public set previousOption (value: string | null) {
    	this.setPropertyValue(value, "previousOption");    	
  	}
  	
  	public get previousOption(): string | null {
    	return this.getPropertyValue("previousOption");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set clientCode (value: number | null) {
    	this.setPropertyValue(value, "clientCode");    	
  	}
  	
  	public get clientCode(): number | null {
    	return this.getPropertyValue("clientCode");    	
  	}
	public set desOperationType (value: string | null) {
    	this.setPropertyValue(value, "desOperationType");    	
  	}
  	
  	public get desOperationType(): string | null {
    	return this.getPropertyValue("desOperationType");    	
  	}
	public set expirationDate (value: string | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): string | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set seqGrid (value: number | null) {
    	this.setPropertyValue(value, "seqGrid");    	
  	}
  	
  	public get seqGrid(): number | null {
    	return this.getPropertyValue("seqGrid");    	
  	}
	public set group (value: string | null) {
    	this.setPropertyValue(value, "group");    	
  	}
  	
  	public get group(): string | null {
    	return this.getPropertyValue("group");    	
  	}
	public set lote (value: number | null) {
    	this.setPropertyValue(value, "lote");    	
  	}
  	
  	public get lote(): number | null {
    	return this.getPropertyValue("lote");    	
  	}
	public set numIdentification (value: string | null) {
    	this.setPropertyValue(value, "numIdentification");    	
  	}
  	
  	public get numIdentification(): string | null {
    	return this.getPropertyValue("numIdentification");    	
  	}
	public set condition (value: string | null) {
    	this.setPropertyValue(value, "condition");    	
  	}
  	
  	public get condition(): string | null {
    	return this.getPropertyValue("condition");    	
  	}
	public set creditLine (value: string | null) {
    	this.setPropertyValue(value, "creditLine");    	
  	}
  	
  	public get creditLine(): string | null {
    	return this.getPropertyValue("creditLine");    	
  	}
	public set categoryGroup (value: string | null) {
    	this.setPropertyValue(value, "categoryGroup");    	
  	}
  	
  	public get categoryGroup(): string | null {
    	return this.getPropertyValue("categoryGroup");    	
  	}
	public set currencyName (value: string | null) {
    	this.setPropertyValue(value, "currencyName");    	
  	}
  	
  	public get currencyName(): string | null {
    	return this.getPropertyValue("currencyName");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	public set pastDueBalance (value: number | null) {
    	this.setPropertyValue(value, "pastDueBalance");    	
  	}
  	
  	public get pastDueBalance(): number | null {
    	return this.getPropertyValue("pastDueBalance");    	
  	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set typeClass (value: string | null) {
    	this.setPropertyValue(value, "typeClass");    	
  	}
  	
  	public get typeClass(): string | null {
    	return this.getPropertyValue("typeClass");    	
  	}
	public set historical (value: string | null) {
    	this.setPropertyValue(value, "historical");    	
  	}
  	
  	public get historical(): string | null {
    	return this.getPropertyValue("historical");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set answList (value: string | null) {
    	this.setPropertyValue(value, "answList");    	
  	}
  	
  	public get answList(): string | null {
    	return this.getPropertyValue("answList");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set migratedOperation (value: string | null) {
    	this.setPropertyValue(value, "migratedOperation");    	
  	}
  	
  	public get migratedOperation(): string | null {
    	return this.getPropertyValue("migratedOperation");    	
  	}
	public set daysPastDue (value: number | null) {
    	this.setPropertyValue(value, "daysPastDue");    	
  	}
  	
  	public get daysPastDue(): number | null {
    	return this.getPropertyValue("daysPastDue");    	
  	}
	public set balanceOperation (value: number | null) {
    	this.setPropertyValue(value, "balanceOperation");    	
  	}
  	
  	public get balanceOperation(): number | null {
    	return this.getPropertyValue("balanceOperation");    	
  	}
	public set office (value: number | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): number | null {
    	return this.getPropertyValue("office");    	
  	}
	public set officer (value: number | null) {
    	this.setPropertyValue(value, "officer");    	
  	}
  	
  	public get officer(): number | null {
    	return this.getPropertyValue("officer");    	
  	}
	
}