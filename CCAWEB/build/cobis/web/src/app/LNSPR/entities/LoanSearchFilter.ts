
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanSearchFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"condition"	,
					"lastProcessDate"	,
					"next"	,
					"archivoSubido"	,
					"mode"	,
					"numIdentification"	,
					"sequential"	,
					"codClient"	,
					"credit"	,
					"type"	,
					"group"	,
					"archivo"	,
					"product"	,
					"disbursementDate"	,
					"isGroup"	,
					"category"	,
					"avanceSearch"	,
					"classLoan"	,
					"seleccionarTodo"	,
					"codCurrency"	,
					"migratedOperation"	,
					"daysPastDue"	,
					"numProcedures"	,
					"untilDate"	,
					"isDisbursment"	,
					"readjDate"	,
					"office"	,
					"operation"	,
					"oficial"	,
					"nextReadjDate"	,
					"state"	,
					"status"	,
					"historical"	
			];			
			super(undefined,props);
		}   	    
	}
	public set condition (value: string | null) {
    	this.setPropertyValue(value, "condition");    	
  	}
  	
  	public get condition(): string | null {
    	return this.getPropertyValue("condition");    	
  	}
	public set lastProcessDate (value: string | null) {
    	this.setPropertyValue(value, "lastProcessDate");    	
  	}
  	
  	public get lastProcessDate(): string | null {
    	return this.getPropertyValue("lastProcessDate");    	
  	}
	public set next (value: boolean | null) {
    	this.setPropertyValue(value, "next");    	
  	}
  	
  	public get next(): boolean | null {
    	return this.getPropertyValue("next");    	
  	}
	public set archivoSubido (value: boolean | null) {
    	this.setPropertyValue(value, "archivoSubido");    	
  	}
  	
  	public get archivoSubido(): boolean | null {
    	return this.getPropertyValue("archivoSubido");    	
  	}
	public set mode (value: string | null) {
    	this.setPropertyValue(value, "mode");    	
  	}
  	
  	public get mode(): string | null {
    	return this.getPropertyValue("mode");    	
  	}
	public set numIdentification (value: string | null) {
    	this.setPropertyValue(value, "numIdentification");    	
  	}
  	
  	public get numIdentification(): string | null {
    	return this.getPropertyValue("numIdentification");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set codClient (value: number | null) {
    	this.setPropertyValue(value, "codClient");    	
  	}
  	
  	public get codClient(): number | null {
    	return this.getPropertyValue("codClient");    	
  	}
	public set credit (value: string | null) {
    	this.setPropertyValue(value, "credit");    	
  	}
  	
  	public get credit(): string | null {
    	return this.getPropertyValue("credit");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set group (value: string | null) {
    	this.setPropertyValue(value, "group");    	
  	}
  	
  	public get group(): string | null {
    	return this.getPropertyValue("group");    	
  	}
	public set archivo (value: string | null) {
    	this.setPropertyValue(value, "archivo");    	
  	}
  	
  	public get archivo(): string | null {
    	return this.getPropertyValue("archivo");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
  	}
	public set disbursementDate (value: Date | null) {
    	this.setPropertyValue(value, "disbursementDate");    	
  	}
  	
  	public get disbursementDate(): Date | null {
    	return this.getPropertyValue("disbursementDate");    	
  	}
	public set isGroup (value: boolean | null) {
    	this.setPropertyValue(value, "isGroup");    	
  	}
  	
  	public get isGroup(): boolean | null {
    	return this.getPropertyValue("isGroup");    	
  	}
	public set category (value: number | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): number | null {
    	return this.getPropertyValue("category");    	
  	}
	public set avanceSearch (value: boolean | null) {
    	this.setPropertyValue(value, "avanceSearch");    	
  	}
  	
  	public get avanceSearch(): boolean | null {
    	return this.getPropertyValue("avanceSearch");    	
  	}
	public set classLoan (value: string | null) {
    	this.setPropertyValue(value, "classLoan");    	
  	}
  	
  	public get classLoan(): string | null {
    	return this.getPropertyValue("classLoan");    	
  	}
	public set seleccionarTodo (value: boolean | null) {
    	this.setPropertyValue(value, "seleccionarTodo");    	
  	}
  	
  	public get seleccionarTodo(): boolean | null {
    	return this.getPropertyValue("seleccionarTodo");    	
  	}
	public set codCurrency (value: number | null) {
    	this.setPropertyValue(value, "codCurrency");    	
  	}
  	
  	public get codCurrency(): number | null {
    	return this.getPropertyValue("codCurrency");    	
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
	public set numProcedures (value: string | null) {
    	this.setPropertyValue(value, "numProcedures");    	
  	}
  	
  	public get numProcedures(): string | null {
    	return this.getPropertyValue("numProcedures");    	
  	}
	public set untilDate (value: Date | null) {
    	this.setPropertyValue(value, "untilDate");    	
  	}
  	
  	public get untilDate(): Date | null {
    	return this.getPropertyValue("untilDate");    	
  	}
	public set isDisbursment (value: string | null) {
    	this.setPropertyValue(value, "isDisbursment");    	
  	}
  	
  	public get isDisbursment(): string | null {
    	return this.getPropertyValue("isDisbursment");    	
  	}
	public set readjDate (value: Date | null) {
    	this.setPropertyValue(value, "readjDate");    	
  	}
  	
  	public get readjDate(): Date | null {
    	return this.getPropertyValue("readjDate");    	
  	}
	public set office (value: number | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): number | null {
    	return this.getPropertyValue("office");    	
  	}
	public set operation (value: string | null) {
    	this.setPropertyValue(value, "operation");    	
  	}
  	
  	public get operation(): string | null {
    	return this.getPropertyValue("operation");    	
  	}
	public set oficial (value: string | null) {
    	this.setPropertyValue(value, "oficial");    	
  	}
  	
  	public get oficial(): string | null {
    	return this.getPropertyValue("oficial");    	
  	}
	public set nextReadjDate (value: Date | null) {
    	this.setPropertyValue(value, "nextReadjDate");    	
  	}
  	
  	public get nextReadjDate(): Date | null {
    	return this.getPropertyValue("nextReadjDate");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set status (value: string | null) {
    	this.setPropertyValue(value, "status");    	
  	}
  	
  	public get status(): string | null {
    	return this.getPropertyValue("status");    	
  	}
	public set historical (value: string | null) {
    	this.setPropertyValue(value, "historical");    	
  	}
  	
  	public get historical(): string | null {
    	return this.getPropertyValue("historical");    	
  	}
	
}