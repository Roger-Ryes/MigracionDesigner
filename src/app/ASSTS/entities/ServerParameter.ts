
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ServerParameter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"loanBankID"	,
					"selectedRow"	,
					"amount"	,
					"condonationPercentage"	,
					"flag"	,
					"refresGridFlag"	,
					"refresGrid2Flag"	
			];			
			super(undefined,props);
		}   	    
	}
	public set loanBankID (value: string | null) {
    	this.setPropertyValue(value, "loanBankID");    	
  	}
  	
  	public get loanBankID(): string | null {
    	return this.getPropertyValue("loanBankID");    	
  	}
	public set selectedRow (value: number | null) {
    	this.setPropertyValue(value, "selectedRow");    	
  	}
  	
  	public get selectedRow(): number | null {
    	return this.getPropertyValue("selectedRow");    	
  	}
	public set amount (value: number | null) {
    	this.setPropertyValue(value, "amount");    	
  	}
  	
  	public get amount(): number | null {
    	return this.getPropertyValue("amount");    	
  	}
	public set condonationPercentage (value: number | null) {
    	this.setPropertyValue(value, "condonationPercentage");    	
  	}
  	
  	public get condonationPercentage(): number | null {
    	return this.getPropertyValue("condonationPercentage");    	
  	}
	public set flag (value: boolean | null) {
    	this.setPropertyValue(value, "flag");    	
  	}
  	
  	public get flag(): boolean | null {
    	return this.getPropertyValue("flag");    	
  	}
	public set refresGridFlag (value: boolean | null) {
    	this.setPropertyValue(value, "refresGridFlag");    	
  	}
  	
  	public get refresGridFlag(): boolean | null {
    	return this.getPropertyValue("refresGridFlag");    	
  	}
	public set refresGrid2Flag (value: boolean | null) {
    	this.setPropertyValue(value, "refresGrid2Flag");    	
  	}
  	
  	public get refresGrid2Flag(): boolean | null {
    	return this.getPropertyValue("refresGrid2Flag");    	
  	}
	
}