
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class Deposit  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"phone2Condusef"	,
					"customer"	,
					"daysClaimChange"	,
					"notComplain"	,
					"cashDelivery"	,
					"termHome"	,
					"dataFootPage"	,
					"inactivityDays"	,
					"daysAnswerComplain"	,
					"daysRevComplain"	,
					"numDays"	,
					"daysAnswerComplainInt"	,
					"webBank"	,
					"homeBank"	,
					"inactivityAccount"	,
					"provinceBank"	,
					"phone1Condusef"	,
					"webCondusef"	,
					"accountStatus"	,
					"daysEarlyCancellation"	,
					"mailConduset"	,
					"customerName"	,
					"daysComplain"	,
					"numDaysFall"	,
					"numOperation"	,
					"daysNotChange"	,
					"protectionBackground"	
			];			
			super(undefined,props);
		}   	    
	}
	public set phone2Condusef (value: string | null) {
    	this.setPropertyValue(value, "phone2Condusef");    	
  	}
  	
  	public get phone2Condusef(): string | null {
    	return this.getPropertyValue("phone2Condusef");    	
  	}
	public set customer (value: number | null) {
    	this.setPropertyValue(value, "customer");    	
  	}
  	
  	public get customer(): number | null {
    	return this.getPropertyValue("customer");    	
  	}
	public set daysClaimChange (value: number | null) {
    	this.setPropertyValue(value, "daysClaimChange");    	
  	}
  	
  	public get daysClaimChange(): number | null {
    	return this.getPropertyValue("daysClaimChange");    	
  	}
	public set notComplain (value: string | null) {
    	this.setPropertyValue(value, "notComplain");    	
  	}
  	
  	public get notComplain(): string | null {
    	return this.getPropertyValue("notComplain");    	
  	}
	public set cashDelivery (value: number | null) {
    	this.setPropertyValue(value, "cashDelivery");    	
  	}
  	
  	public get cashDelivery(): number | null {
    	return this.getPropertyValue("cashDelivery");    	
  	}
	public set termHome (value: number | null) {
    	this.setPropertyValue(value, "termHome");    	
  	}
  	
  	public get termHome(): number | null {
    	return this.getPropertyValue("termHome");    	
  	}
	public set dataFootPage (value: string | null) {
    	this.setPropertyValue(value, "dataFootPage");    	
  	}
  	
  	public get dataFootPage(): string | null {
    	return this.getPropertyValue("dataFootPage");    	
  	}
	public set inactivityDays (value: number | null) {
    	this.setPropertyValue(value, "inactivityDays");    	
  	}
  	
  	public get inactivityDays(): number | null {
    	return this.getPropertyValue("inactivityDays");    	
  	}
	public set daysAnswerComplain (value: number | null) {
    	this.setPropertyValue(value, "daysAnswerComplain");    	
  	}
  	
  	public get daysAnswerComplain(): number | null {
    	return this.getPropertyValue("daysAnswerComplain");    	
  	}
	public set daysRevComplain (value: number | null) {
    	this.setPropertyValue(value, "daysRevComplain");    	
  	}
  	
  	public get daysRevComplain(): number | null {
    	return this.getPropertyValue("daysRevComplain");    	
  	}
	public set numDays (value: number | null) {
    	this.setPropertyValue(value, "numDays");    	
  	}
  	
  	public get numDays(): number | null {
    	return this.getPropertyValue("numDays");    	
  	}
	public set daysAnswerComplainInt (value: number | null) {
    	this.setPropertyValue(value, "daysAnswerComplainInt");    	
  	}
  	
  	public get daysAnswerComplainInt(): number | null {
    	return this.getPropertyValue("daysAnswerComplainInt");    	
  	}
	public set webBank (value: string | null) {
    	this.setPropertyValue(value, "webBank");    	
  	}
  	
  	public get webBank(): string | null {
    	return this.getPropertyValue("webBank");    	
  	}
	public set homeBank (value: string | null) {
    	this.setPropertyValue(value, "homeBank");    	
  	}
  	
  	public get homeBank(): string | null {
    	return this.getPropertyValue("homeBank");    	
  	}
	public set inactivityAccount (value: number | null) {
    	this.setPropertyValue(value, "inactivityAccount");    	
  	}
  	
  	public get inactivityAccount(): number | null {
    	return this.getPropertyValue("inactivityAccount");    	
  	}
	public set provinceBank (value: string | null) {
    	this.setPropertyValue(value, "provinceBank");    	
  	}
  	
  	public get provinceBank(): string | null {
    	return this.getPropertyValue("provinceBank");    	
  	}
	public set phone1Condusef (value: string | null) {
    	this.setPropertyValue(value, "phone1Condusef");    	
  	}
  	
  	public get phone1Condusef(): string | null {
    	return this.getPropertyValue("phone1Condusef");    	
  	}
	public set webCondusef (value: string | null) {
    	this.setPropertyValue(value, "webCondusef");    	
  	}
  	
  	public get webCondusef(): string | null {
    	return this.getPropertyValue("webCondusef");    	
  	}
	public set accountStatus (value: string | null) {
    	this.setPropertyValue(value, "accountStatus");    	
  	}
  	
  	public get accountStatus(): string | null {
    	return this.getPropertyValue("accountStatus");    	
  	}
	public set daysEarlyCancellation (value: number | null) {
    	this.setPropertyValue(value, "daysEarlyCancellation");    	
  	}
  	
  	public get daysEarlyCancellation(): number | null {
    	return this.getPropertyValue("daysEarlyCancellation");    	
  	}
	public set mailConduset (value: string | null) {
    	this.setPropertyValue(value, "mailConduset");    	
  	}
  	
  	public get mailConduset(): string | null {
    	return this.getPropertyValue("mailConduset");    	
  	}
	public set customerName (value: string | null) {
    	this.setPropertyValue(value, "customerName");    	
  	}
  	
  	public get customerName(): string | null {
    	return this.getPropertyValue("customerName");    	
  	}
	public set daysComplain (value: number | null) {
    	this.setPropertyValue(value, "daysComplain");    	
  	}
  	
  	public get daysComplain(): number | null {
    	return this.getPropertyValue("daysComplain");    	
  	}
	public set numDaysFall (value: number | null) {
    	this.setPropertyValue(value, "numDaysFall");    	
  	}
  	
  	public get numDaysFall(): number | null {
    	return this.getPropertyValue("numDaysFall");    	
  	}
	public set numOperation (value: string | null) {
    	this.setPropertyValue(value, "numOperation");    	
  	}
  	
  	public get numOperation(): string | null {
    	return this.getPropertyValue("numOperation");    	
  	}
	public set daysNotChange (value: number | null) {
    	this.setPropertyValue(value, "daysNotChange");    	
  	}
  	
  	public get daysNotChange(): number | null {
    	return this.getPropertyValue("daysNotChange");    	
  	}
	public set protectionBackground (value: string | null) {
    	this.setPropertyValue(value, "protectionBackground");    	
  	}
  	
  	public get protectionBackground(): string | null {
    	return this.getPropertyValue("protectionBackground");    	
  	}
	
}