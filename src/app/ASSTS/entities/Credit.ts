
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Credit  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"termDaysMor"	,
					"telephone2Institution"	,
					"termDays"	,
					"pageOffice"	,
					"termMax"	,
					"termPrevious"	,
					"customerName"	,
					"termYears"	,
					"address"	,
					"spouse"	,
					"numDays"	,
					"termConfirmation"	,
					"mailInstitution"	,
					"intRedgoods"	,
					"pageInstitution"	,
					"termAddress"	,
					"telephone1Institution"	,
					"term2Letters"	,
					"termDisclaimer"	,
					"daysLettersTerm"	,
					"termDaysFall"	,
					"termStatusAccount"	,
					"termLetters"	,
					"dataFootPage"	,
					"telephoneOffice"	,
					"mailOffice"	,
					"termConfirmationClient"	,
					"office"	,
					"termDictum"	,
					"customer"	,
					"numOperation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set termDaysMor (value: number | null) {
    	this.setPropertyValue(value, "termDaysMor");    	
  	}
  	
  	public get termDaysMor(): number | null {
    	return this.getPropertyValue("termDaysMor");    	
  	}
	public set telephone2Institution (value: string | null) {
    	this.setPropertyValue(value, "telephone2Institution");    	
  	}
  	
  	public get telephone2Institution(): string | null {
    	return this.getPropertyValue("telephone2Institution");    	
  	}
	public set termDays (value: number | null) {
    	this.setPropertyValue(value, "termDays");    	
  	}
  	
  	public get termDays(): number | null {
    	return this.getPropertyValue("termDays");    	
  	}
	public set pageOffice (value: string | null) {
    	this.setPropertyValue(value, "pageOffice");    	
  	}
  	
  	public get pageOffice(): string | null {
    	return this.getPropertyValue("pageOffice");    	
  	}
	public set termMax (value: number | null) {
    	this.setPropertyValue(value, "termMax");    	
  	}
  	
  	public get termMax(): number | null {
    	return this.getPropertyValue("termMax");    	
  	}
	public set termPrevious (value: number | null) {
    	this.setPropertyValue(value, "termPrevious");    	
  	}
  	
  	public get termPrevious(): number | null {
    	return this.getPropertyValue("termPrevious");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	public set termYears (value: number | null) {
    	this.setPropertyValue(value, "termYears");    	
  	}
  	
  	public get termYears(): number | null {
    	return this.getPropertyValue("termYears");    	
  	}
	public set address (value: string | null) {
    	this.setPropertyValue(value, "address");    	
  	}
  	
  	public get address(): string | null {
    	return this.getPropertyValue("address");    	
  	}
	public set spouse (value: string | null) {
    	this.setPropertyValue(value, "spouse");    	
  	}
  	
  	public get spouse(): string | null {
    	return this.getPropertyValue("spouse");    	
  	}
	public set numDays (value: number | null) {
    	this.setPropertyValue(value, "numDays");    	
  	}
  	
  	public get numDays(): number | null {
    	return this.getPropertyValue("numDays");    	
  	}
	public set termConfirmation (value: number | null) {
    	this.setPropertyValue(value, "termConfirmation");    	
  	}
  	
  	public get termConfirmation(): number | null {
    	return this.getPropertyValue("termConfirmation");    	
  	}
	public set mailInstitution (value: string | null) {
    	this.setPropertyValue(value, "mailInstitution");    	
  	}
  	
  	public get mailInstitution(): string | null {
    	return this.getPropertyValue("mailInstitution");    	
  	}
	public set intRedgoods (value: number | null) {
    	this.setPropertyValue(value, "intRedgoods");    	
  	}
  	
  	public get intRedgoods(): number | null {
    	return this.getPropertyValue("intRedgoods");    	
  	}
	public set pageInstitution (value: string | null) {
    	this.setPropertyValue(value, "pageInstitution");    	
  	}
  	
  	public get pageInstitution(): string | null {
    	return this.getPropertyValue("pageInstitution");    	
  	}
	public set termAddress (value: number | null) {
    	this.setPropertyValue(value, "termAddress");    	
  	}
  	
  	public get termAddress(): number | null {
    	return this.getPropertyValue("termAddress");    	
  	}
	public set telephone1Institution (value: string | null) {
    	this.setPropertyValue(value, "telephone1Institution");    	
  	}
  	
  	public get telephone1Institution(): string | null {
    	return this.getPropertyValue("telephone1Institution");    	
  	}
	public set term2Letters (value: string | null) {
    	this.setPropertyValue(value, "term2Letters");    	
  	}
  	
  	public get term2Letters(): string | null {
    	return this.getPropertyValue("term2Letters");    	
  	}
	public set termDisclaimer (value: number | null) {
    	this.setPropertyValue(value, "termDisclaimer");    	
  	}
  	
  	public get termDisclaimer(): number | null {
    	return this.getPropertyValue("termDisclaimer");    	
  	}
	public set daysLettersTerm (value: string | null) {
    	this.setPropertyValue(value, "daysLettersTerm");    	
  	}
  	
  	public get daysLettersTerm(): string | null {
    	return this.getPropertyValue("daysLettersTerm");    	
  	}
	public set termDaysFall (value: number | null) {
    	this.setPropertyValue(value, "termDaysFall");    	
  	}
  	
  	public get termDaysFall(): number | null {
    	return this.getPropertyValue("termDaysFall");    	
  	}
	public set termStatusAccount (value: number | null) {
    	this.setPropertyValue(value, "termStatusAccount");    	
  	}
  	
  	public get termStatusAccount(): number | null {
    	return this.getPropertyValue("termStatusAccount");    	
  	}
	public set termLetters (value: string | null) {
    	this.setPropertyValue(value, "termLetters");    	
  	}
  	
  	public get termLetters(): string | null {
    	return this.getPropertyValue("termLetters");    	
  	}
	public set dataFootPage (value: string | null) {
    	this.setPropertyValue(value, "dataFootPage");    	
  	}
  	
  	public get dataFootPage(): string | null {
    	return this.getPropertyValue("dataFootPage");    	
  	}
	public set telephoneOffice (value: string | null) {
    	this.setPropertyValue(value, "telephoneOffice");    	
  	}
  	
  	public get telephoneOffice(): string | null {
    	return this.getPropertyValue("telephoneOffice");    	
  	}
	public set mailOffice (value: string | null) {
    	this.setPropertyValue(value, "mailOffice");    	
  	}
  	
  	public get mailOffice(): string | null {
    	return this.getPropertyValue("mailOffice");    	
  	}
	public set termConfirmationClient (value: number | null) {
    	this.setPropertyValue(value, "termConfirmationClient");    	
  	}
  	
  	public get termConfirmationClient(): number | null {
    	return this.getPropertyValue("termConfirmationClient");    	
  	}
	public set office (value: string | null) {
    	this.setPropertyValue(value, "office");    	
  	}
  	
  	public get office(): string | null {
    	return this.getPropertyValue("office");    	
  	}
	public set termDictum (value: number | null) {
    	this.setPropertyValue(value, "termDictum");    	
  	}
  	
  	public get termDictum(): number | null {
    	return this.getPropertyValue("termDictum");    	
  	}
	public set customer (value: number | null) {
    	this.setPropertyValue(value, "customer");    	
  	}
  	
  	public get customer(): number | null {
    	return this.getPropertyValue("customer");    	
  	}
	public set numOperation (value: string | null) {
    	this.setPropertyValue(value, "numOperation");    	
  	}
  	
  	public get numOperation(): string | null {
    	return this.getPropertyValue("numOperation");    	
  	}
	
}