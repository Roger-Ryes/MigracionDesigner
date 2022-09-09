
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class AnexDataHolder  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"porcAhorro"	,
					"originRfc"	,
					"clientSecondSurname"	,
					"clientCurp"	,
					"moratoryInterest"	,
					"clientGender"	,
					"expectedAverageBalance"	,
					"expectedMovements"	,
					"clientRfc"	,
					"operationType"	,
					"clientSurname"	,
					"regionalAddress"	,
					"openingDate"	,
					"worksOn"	,
					"officeName"	,
					"paymentFrequency"	,
					"clientEmail"	,
					"foreignerNumber"	,
					"clientBirthDate"	,
					"groupName"	,
					"reca"	,
					"tipoCredito"	,
					"groupNum"	,
					"clientPhone"	,
					"profession"	,
					"corporateAddress"	,
					"originationExpense"	,
					"requestedAmount"	,
					"clientNumber"	,
					"solidaryName2"	,
					"migratoryForm"	,
					"clientName"	,
					"accountManagement"	,
					"creditNumber"	,
					"clientCompleteName"	,
					"officeAddress"	,
					"solidaryName1"	,
					"originAddress"	,
					"clientAddress"	,
					"clientNationality"	
			];			
			super(undefined,props);
		}   	    
	}
	public set porcAhorro (value: string | null) {
    	this.setPropertyValue(value, "porcAhorro");    	
  	}
  	
  	public get porcAhorro(): string | null {
    	return this.getPropertyValue("porcAhorro");    	
  	}
	public set originRfc (value: string | null) {
    	this.setPropertyValue(value, "originRfc");    	
  	}
  	
  	public get originRfc(): string | null {
    	return this.getPropertyValue("originRfc");    	
  	}
	public set clientSecondSurname (value: string | null) {
    	this.setPropertyValue(value, "clientSecondSurname");    	
  	}
  	
  	public get clientSecondSurname(): string | null {
    	return this.getPropertyValue("clientSecondSurname");    	
  	}
	public set clientCurp (value: string | null) {
    	this.setPropertyValue(value, "clientCurp");    	
  	}
  	
  	public get clientCurp(): string | null {
    	return this.getPropertyValue("clientCurp");    	
  	}
	public set moratoryInterest (value: number | null) {
    	this.setPropertyValue(value, "moratoryInterest");    	
  	}
  	
  	public get moratoryInterest(): number | null {
    	return this.getPropertyValue("moratoryInterest");    	
  	}
	public set clientGender (value: string | null) {
    	this.setPropertyValue(value, "clientGender");    	
  	}
  	
  	public get clientGender(): string | null {
    	return this.getPropertyValue("clientGender");    	
  	}
	public set expectedAverageBalance (value: number | null) {
    	this.setPropertyValue(value, "expectedAverageBalance");    	
  	}
  	
  	public get expectedAverageBalance(): number | null {
    	return this.getPropertyValue("expectedAverageBalance");    	
  	}
	public set expectedMovements (value: number | null) {
    	this.setPropertyValue(value, "expectedMovements");    	
  	}
  	
  	public get expectedMovements(): number | null {
    	return this.getPropertyValue("expectedMovements");    	
  	}
	public set clientRfc (value: string | null) {
    	this.setPropertyValue(value, "clientRfc");    	
  	}
  	
  	public get clientRfc(): string | null {
    	return this.getPropertyValue("clientRfc");    	
  	}
	public set operationType (value: string | null) {
    	this.setPropertyValue(value, "operationType");    	
  	}
  	
  	public get operationType(): string | null {
    	return this.getPropertyValue("operationType");    	
  	}
	public set clientSurname (value: string | null) {
    	this.setPropertyValue(value, "clientSurname");    	
  	}
  	
  	public get clientSurname(): string | null {
    	return this.getPropertyValue("clientSurname");    	
  	}
	public set regionalAddress (value: string | null) {
    	this.setPropertyValue(value, "regionalAddress");    	
  	}
  	
  	public get regionalAddress(): string | null {
    	return this.getPropertyValue("regionalAddress");    	
  	}
	public set openingDate (value: string | null) {
    	this.setPropertyValue(value, "openingDate");    	
  	}
  	
  	public get openingDate(): string | null {
    	return this.getPropertyValue("openingDate");    	
  	}
	public set worksOn (value: string | null) {
    	this.setPropertyValue(value, "worksOn");    	
  	}
  	
  	public get worksOn(): string | null {
    	return this.getPropertyValue("worksOn");    	
  	}
	public set officeName (value: string | null) {
    	this.setPropertyValue(value, "officeName");    	
  	}
  	
  	public get officeName(): string | null {
    	return this.getPropertyValue("officeName");    	
  	}
	public set paymentFrequency (value: string | null) {
    	this.setPropertyValue(value, "paymentFrequency");    	
  	}
  	
  	public get paymentFrequency(): string | null {
    	return this.getPropertyValue("paymentFrequency");    	
  	}
	public set clientEmail (value: string | null) {
    	this.setPropertyValue(value, "clientEmail");    	
  	}
  	
  	public get clientEmail(): string | null {
    	return this.getPropertyValue("clientEmail");    	
  	}
	public set foreignerNumber (value: string | null) {
    	this.setPropertyValue(value, "foreignerNumber");    	
  	}
  	
  	public get foreignerNumber(): string | null {
    	return this.getPropertyValue("foreignerNumber");    	
  	}
	public set clientBirthDate (value: string | null) {
    	this.setPropertyValue(value, "clientBirthDate");    	
  	}
  	
  	public get clientBirthDate(): string | null {
    	return this.getPropertyValue("clientBirthDate");    	
  	}
	public set groupName (value: string | null) {
    	this.setPropertyValue(value, "groupName");    	
  	}
  	
  	public get groupName(): string | null {
    	return this.getPropertyValue("groupName");    	
  	}
	public set reca (value: string | null) {
    	this.setPropertyValue(value, "reca");    	
  	}
  	
  	public get reca(): string | null {
    	return this.getPropertyValue("reca");    	
  	}
	public set tipoCredito (value: string | null) {
    	this.setPropertyValue(value, "tipoCredito");    	
  	}
  	
  	public get tipoCredito(): string | null {
    	return this.getPropertyValue("tipoCredito");    	
  	}
	public set groupNum (value: number | null) {
    	this.setPropertyValue(value, "groupNum");    	
  	}
  	
  	public get groupNum(): number | null {
    	return this.getPropertyValue("groupNum");    	
  	}
	public set clientPhone (value: string | null) {
    	this.setPropertyValue(value, "clientPhone");    	
  	}
  	
  	public get clientPhone(): string | null {
    	return this.getPropertyValue("clientPhone");    	
  	}
	public set profession (value: string | null) {
    	this.setPropertyValue(value, "profession");    	
  	}
  	
  	public get profession(): string | null {
    	return this.getPropertyValue("profession");    	
  	}
	public set corporateAddress (value: string | null) {
    	this.setPropertyValue(value, "corporateAddress");    	
  	}
  	
  	public get corporateAddress(): string | null {
    	return this.getPropertyValue("corporateAddress");    	
  	}
	public set originationExpense (value: number | null) {
    	this.setPropertyValue(value, "originationExpense");    	
  	}
  	
  	public get originationExpense(): number | null {
    	return this.getPropertyValue("originationExpense");    	
  	}
	public set requestedAmount (value: number | null) {
    	this.setPropertyValue(value, "requestedAmount");    	
  	}
  	
  	public get requestedAmount(): number | null {
    	return this.getPropertyValue("requestedAmount");    	
  	}
	public set clientNumber (value: number | null) {
    	this.setPropertyValue(value, "clientNumber");    	
  	}
  	
  	public get clientNumber(): number | null {
    	return this.getPropertyValue("clientNumber");    	
  	}
	public set solidaryName2 (value: string | null) {
    	this.setPropertyValue(value, "solidaryName2");    	
  	}
  	
  	public get solidaryName2(): string | null {
    	return this.getPropertyValue("solidaryName2");    	
  	}
	public set migratoryForm (value: string | null) {
    	this.setPropertyValue(value, "migratoryForm");    	
  	}
  	
  	public get migratoryForm(): string | null {
    	return this.getPropertyValue("migratoryForm");    	
  	}
	public set clientName (value: string | null) {
    	this.setPropertyValue(value, "clientName");    	
  	}
  	
  	public get clientName(): string | null {
    	return this.getPropertyValue("clientName");    	
  	}
	public set accountManagement (value: number | null) {
    	this.setPropertyValue(value, "accountManagement");    	
  	}
  	
  	public get accountManagement(): number | null {
    	return this.getPropertyValue("accountManagement");    	
  	}
	public set creditNumber (value: string | null) {
    	this.setPropertyValue(value, "creditNumber");    	
  	}
  	
  	public get creditNumber(): string | null {
    	return this.getPropertyValue("creditNumber");    	
  	}
	public set clientCompleteName (value: string | null) {
    	this.setPropertyValue(value, "clientCompleteName");    	
  	}
  	
  	public get clientCompleteName(): string | null {
    	return this.getPropertyValue("clientCompleteName");    	
  	}
	public set officeAddress (value: string | null) {
    	this.setPropertyValue(value, "officeAddress");    	
  	}
  	
  	public get officeAddress(): string | null {
    	return this.getPropertyValue("officeAddress");    	
  	}
	public set solidaryName1 (value: string | null) {
    	this.setPropertyValue(value, "solidaryName1");    	
  	}
  	
  	public get solidaryName1(): string | null {
    	return this.getPropertyValue("solidaryName1");    	
  	}
	public set originAddress (value: string | null) {
    	this.setPropertyValue(value, "originAddress");    	
  	}
  	
  	public get originAddress(): string | null {
    	return this.getPropertyValue("originAddress");    	
  	}
	public set clientAddress (value: string | null) {
    	this.setPropertyValue(value, "clientAddress");    	
  	}
  	
  	public get clientAddress(): string | null {
    	return this.getPropertyValue("clientAddress");    	
  	}
	public set clientNationality (value: string | null) {
    	this.setPropertyValue(value, "clientNationality");    	
  	}
  	
  	public get clientNationality(): string | null {
    	return this.getPropertyValue("clientNationality");    	
  	}
	
}