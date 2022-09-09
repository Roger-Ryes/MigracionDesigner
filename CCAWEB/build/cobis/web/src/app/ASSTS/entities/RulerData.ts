
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RulerData  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"sequentialTrn"	,
					"nameRuler"	,
					"safeAmout"	,
					"frequency"	,
					"sheet"	,
					"startDate"	,
					"category"	,
					"term"	,
					"optionRuler"	,
					"endDate"	,
					"idOperation"	,
					"idProcedure"	,
					"idCustomer"	,
					"dateFormat"	,
					"variableRuler"	,
					"separator"	
			];			
			super(undefined,props);
		}   	    
	}
	public set sequentialTrn (value: number | null) {
    	this.setPropertyValue(value, "sequentialTrn");    	
  	}
  	
  	public get sequentialTrn(): number | null {
    	return this.getPropertyValue("sequentialTrn");    	
  	}
	public set nameRuler (value: string | null) {
    	this.setPropertyValue(value, "nameRuler");    	
  	}
  	
  	public get nameRuler(): string | null {
    	return this.getPropertyValue("nameRuler");    	
  	}
	public set safeAmout (value: number | null) {
    	this.setPropertyValue(value, "safeAmout");    	
  	}
  	
  	public get safeAmout(): number | null {
    	return this.getPropertyValue("safeAmout");    	
  	}
	public set frequency (value: string | null) {
    	this.setPropertyValue(value, "frequency");    	
  	}
  	
  	public get frequency(): string | null {
    	return this.getPropertyValue("frequency");    	
  	}
	public set sheet (value: string | null) {
    	this.setPropertyValue(value, "sheet");    	
  	}
  	
  	public get sheet(): string | null {
    	return this.getPropertyValue("sheet");    	
  	}
	public set startDate (value: Date | null) {
    	this.setPropertyValue(value, "startDate");    	
  	}
  	
  	public get startDate(): Date | null {
    	return this.getPropertyValue("startDate");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set term (value: number | null) {
    	this.setPropertyValue(value, "term");    	
  	}
  	
  	public get term(): number | null {
    	return this.getPropertyValue("term");    	
  	}
	public set optionRuler (value: string | null) {
    	this.setPropertyValue(value, "optionRuler");    	
  	}
  	
  	public get optionRuler(): string | null {
    	return this.getPropertyValue("optionRuler");    	
  	}
	public set endDate (value: Date | null) {
    	this.setPropertyValue(value, "endDate");    	
  	}
  	
  	public get endDate(): Date | null {
    	return this.getPropertyValue("endDate");    	
  	}
	public set idOperation (value: number | null) {
    	this.setPropertyValue(value, "idOperation");    	
  	}
  	
  	public get idOperation(): number | null {
    	return this.getPropertyValue("idOperation");    	
  	}
	public set idProcedure (value: number | null) {
    	this.setPropertyValue(value, "idProcedure");    	
  	}
  	
  	public get idProcedure(): number | null {
    	return this.getPropertyValue("idProcedure");    	
  	}
	public set idCustomer (value: number | null) {
    	this.setPropertyValue(value, "idCustomer");    	
  	}
  	
  	public get idCustomer(): number | null {
    	return this.getPropertyValue("idCustomer");    	
  	}
	public set dateFormat (value: number | null) {
    	this.setPropertyValue(value, "dateFormat");    	
  	}
  	
  	public get dateFormat(): number | null {
    	return this.getPropertyValue("dateFormat");    	
  	}
	public set variableRuler (value: string | null) {
    	this.setPropertyValue(value, "variableRuler");    	
  	}
  	
  	public get variableRuler(): string | null {
    	return this.getPropertyValue("variableRuler");    	
  	}
	public set separator (value: string | null) {
    	this.setPropertyValue(value, "separator");    	
  	}
  	
  	public get separator(): string | null {
    	return this.getPropertyValue("separator");    	
  	}
	
}