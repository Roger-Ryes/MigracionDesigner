
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class SyndicatedList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"percentageParticipants"	,
					"codParticipants"	,
					"roleP"	,
					"amountParticipants"	,
					"nameParticipants"	,
					"mail"	
			];			
			super(undefined,props);
		}   	    
	}
	public set percentageParticipants (value: number | null) {
    	this.setPropertyValue(value, "percentageParticipants");    	
  	}
  	
  	public get percentageParticipants(): number | null {
    	return this.getPropertyValue("percentageParticipants");    	
  	}
	public set codParticipants (value: number | null) {
    	this.setPropertyValue(value, "codParticipants");    	
  	}
  	
  	public get codParticipants(): number | null {
    	return this.getPropertyValue("codParticipants");    	
  	}
	public set roleP (value: string | null) {
    	this.setPropertyValue(value, "roleP");    	
  	}
  	
  	public get roleP(): string | null {
    	return this.getPropertyValue("roleP");    	
  	}
	public set amountParticipants (value: number | null) {
    	this.setPropertyValue(value, "amountParticipants");    	
  	}
  	
  	public get amountParticipants(): number | null {
    	return this.getPropertyValue("amountParticipants");    	
  	}
	public set nameParticipants (value: string | null) {
    	this.setPropertyValue(value, "nameParticipants");    	
  	}
  	
  	public get nameParticipants(): string | null {
    	return this.getPropertyValue("nameParticipants");    	
  	}
	public set mail (value: string | null) {
    	this.setPropertyValue(value, "mail");    	
  	}
  	
  	public get mail(): string | null {
    	return this.getPropertyValue("mail");    	
  	}
	
}