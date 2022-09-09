
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ReadjustmenMList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"referencial"	,
					"percentage"	,
					"previousOption"	,
					"oficial"	,
					"specialAdjust"	,
					"typeClass"	,
					"creditLine"	,
					"pastDueBalance"	,
					"credit"	,
					"nextReadjDate"	,
					"numProcedure"	,
					"office"	,
					"sequential"	,
					"balanceOperation"	,
					"answList"	,
					"migratedOperation"	,
					"daysPastDue"	,
					"concessionDate"	,
					"numIdentification"	,
					"special"	,
					"factor"	,
					"process"	,
					"amount"	,
					"type"	,
					"sign"	,
					"lastProcessDate"	,
					"condition"	,
					"product"	,
					"historical"	,
					"operation"	,
					"state"	,
					"readjDate"	,
					"unitlDate"	,
					"disbursementDate"	,
					"categoryGroup"	,
					"client"	,
					"seleccion"	,
					"clientCode"	,
					"seqGrid"	,
					"officer"	,
					"answerOut"	,
					"expirationDate"	,
					"currency"	
			];			
			super(undefined,props);
		}   	    
	}
	public set referencial (value: string | null) {
    	this.setPropertyValue(value, "referencial");    	
  	}
  	
  	public get referencial(): string | null {
    	return this.getPropertyValue("referencial");    	
  	}
	public set percentage (value: number | null) {
    	this.setPropertyValue(value, "percentage");    	
  	}
  	
  	public get percentage(): number | null {
    	return this.getPropertyValue("percentage");    	
  	}
	public set previousOption (value: string | null) {
    	this.setPropertyValue(value, "previousOption");    	
  	}
  	
  	public get previousOption(): string | null {
    	return this.getPropertyValue("previousOption");    	
  	}
	public set oficial (value: string | null) {
    	this.setPropertyValue(value, "oficial");    	
  	}
  	
  	public get oficial(): string | null {
    	return this.getPropertyValue("oficial");    	
  	}
	public set specialAdjust (value: string | null) {
    	this.setPropertyValue(value, "specialAdjust");    	
  	}
  	
  	public get specialAdjust(): string | null {
    	return this.getPropertyValue("specialAdjust");    	
  	}
	public set typeClass (value: string | null) {
    	this.setPropertyValue(value, "typeClass");    	
  	}
  	
  	public get typeClass(): string | null {
    	return this.getPropertyValue("typeClass");    	
  	}
	public set creditLine (value: string | null) {
    	this.setPropertyValue(value, "creditLine");    	
  	}
  	
  	public get creditLine(): string | null {
    	return this.getPropertyValue("creditLine");    	
  	}
	public set pastDueBalance (value: number | null) {
    	this.setPropertyValue(value, "pastDueBalance");    	
  	}
  	
  	public get pastDueBalance(): number | null {
    	return this.getPropertyValue("pastDueBalance");    	
  	}
	public set credit (value: string | null) {
    	this.setPropertyValue(value, "credit");    	
  	}
  	
  	public get credit(): string | null {
    	return this.getPropertyValue("credit");    	
  	}
	public set nextReadjDate (value: Date | null) {
    	this.setPropertyValue(value, "nextReadjDate");    	
  	}
  	
  	public get nextReadjDate(): Date | null {
    	return this.getPropertyValue("nextReadjDate");    	
  	}
	public set numProcedure (value: string | null) {
    	this.setPropertyValue(value, "numProcedure");    	
  	}
  	
  	public get numProcedure(): string | null {
    	return this.getPropertyValue("numProcedure");    	
  	}
	public set office (value: number | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): number | null {
    	return this.getPropertyValue("office");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set balanceOperation (value: number | null) {
    	this.setPropertyValue(value, "balanceOperation");    	
  	}
  	
  	public get balanceOperation(): number | null {
    	return this.getPropertyValue("balanceOperation");    	
  	}
	public set answList (value: string | null) {
    	this.setPropertyValue(value, "answList");    	
  	}
  	
  	public get answList(): string | null {
    	return this.getPropertyValue("answList");    	
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
	public set concessionDate (value: string | null) {
    	this.setPropertyValue(value, "concessionDate");    	
  	}
  	
  	public get concessionDate(): string | null {
    	return this.getPropertyValue("concessionDate");    	
  	}
	public set numIdentification (value: string | null) {
    	this.setPropertyValue(value, "numIdentification");    	
  	}
  	
  	public get numIdentification(): string | null {
    	return this.getPropertyValue("numIdentification");    	
  	}
	public set special (value: number | null) {
    	this.setPropertyValue(value, "special");    	
  	}
  	
  	public get special(): number | null {
    	return this.getPropertyValue("special");    	
  	}
	public set factor (value: number | null) {
    	this.setPropertyValue(value, "factor");    	
  	}
  	
  	public get factor(): number | null {
    	return this.getPropertyValue("factor");    	
  	}
	public set process (value: string | null) {
    	this.setPropertyValue(value, "process");    	
  	}
  	
  	public get process(): string | null {
    	return this.getPropertyValue("process");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set sign (value: string | null) {
    	this.setPropertyValue(value, "sign");    	
  	}
  	
  	public get sign(): string | null {
    	return this.getPropertyValue("sign");    	
  	}
	public set lastProcessDate (value: string | null) {
    	this.setPropertyValue(value, "lastProcessDate");    	
  	}
  	
  	public get lastProcessDate(): string | null {
    	return this.getPropertyValue("lastProcessDate");    	
  	}
	public set condition (value: string | null) {
    	this.setPropertyValue(value, "condition");    	
  	}
  	
  	public get condition(): string | null {
    	return this.getPropertyValue("condition");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
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
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set readjDate (value: Date | null) {
    	this.setPropertyValue(value, "readjDate");    	
  	}
  	
  	public get readjDate(): Date | null {
    	return this.getPropertyValue("readjDate");    	
  	}
	public set unitlDate (value: Date | null) {
    	this.setPropertyValue(value, "unitlDate");    	
  	}
  	
  	public get unitlDate(): Date | null {
    	return this.getPropertyValue("unitlDate");    	
  	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set categoryGroup (value: string | null) {
    	this.setPropertyValue(value, "categoryGroup");    	
  	}
  	
  	public get categoryGroup(): string | null {
    	return this.getPropertyValue("categoryGroup");    	
  	}
	public set client (value: string | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): string | null {
    	return this.getPropertyValue("client");    	
  	}
	public set seleccion (value: boolean | null) {
    	this.setPropertyValue(value, "seleccion");    	
  	}
  	
  	public get seleccion(): boolean | null {
    	return this.getPropertyValue("seleccion");    	
  	}
	public set clientCode (value: number | null) {
    	this.setPropertyValue(value, "clientCode");    	
  	}
  	
  	public get clientCode(): number | null {
    	return this.getPropertyValue("clientCode");    	
  	}
	public set seqGrid (value: number | null) {
    	this.setPropertyValue(value, "seqGrid");    	
  	}
  	
  	public get seqGrid(): number | null {
    	return this.getPropertyValue("seqGrid");    	
  	}
	public set officer (value: number | null) {
    	this.setPropertyValue(value, "officer");    	
  	}
  	
  	public get officer(): number | null {
    	return this.getPropertyValue("officer");    	
  	}
	public set answerOut (value: string | null) {
    	this.setPropertyValue(value, "answerOut");    	
  	}
  	
  	public get answerOut(): string | null {
    	return this.getPropertyValue("answerOut");    	
  	}
	public set expirationDate (value: string | null) {
    	this.setPropertyValue(value, "expirationDate");    	
  	}
  	
  	public get expirationDate(): string | null {
    	return this.getPropertyValue("expirationDate");    	
  	}
	public set currency (value: number | null) {
    	this.setPropertyValue(value, "currency");    	
  	}
  	
  	public get currency(): number | null {
    	return this.getPropertyValue("currency");    	
  	}
	
}