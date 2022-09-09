
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanSyndicatedList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"codParticipantsL"	,
					"mailParticipantsL"	,
					"percentageParticipantsL"	,
					"amountParticipantsL"	,
					"nameParticipantsL"	,
					"roleParticipantsL"	
			];			
			super(undefined,props);
		}   	    
	}
	public set codParticipantsL (value: number | null) {
    	this.setPropertyValue(value, "codParticipantsL");    	
  	}
  	
  	public get codParticipantsL(): number | null {
    	return this.getPropertyValue("codParticipantsL");    	
  	}
	public set mailParticipantsL (value: string | null) {
    	this.setPropertyValue(value, "mailParticipantsL");    	
  	}
  	
  	public get mailParticipantsL(): string | null {
    	return this.getPropertyValue("mailParticipantsL");    	
  	}
	public set percentageParticipantsL (value: number | null) {
    	this.setPropertyValue(value, "percentageParticipantsL");    	
  	}
  	
  	public get percentageParticipantsL(): number | null {
    	return this.getPropertyValue("percentageParticipantsL");    	
  	}
	public set amountParticipantsL (value: number | null) {
    	this.setPropertyValue(value, "amountParticipantsL");    	
  	}
  	
  	public get amountParticipantsL(): number | null {
    	return this.getPropertyValue("amountParticipantsL");    	
  	}
	public set nameParticipantsL (value: string | null) {
    	this.setPropertyValue(value, "nameParticipantsL");    	
  	}
  	
  	public get nameParticipantsL(): string | null {
    	return this.getPropertyValue("nameParticipantsL");    	
  	}
	public set roleParticipantsL (value: string | null) {
    	this.setPropertyValue(value, "roleParticipantsL");    	
  	}
  	
  	public get roleParticipantsL(): string | null {
    	return this.getPropertyValue("roleParticipantsL");    	
  	}
	
}