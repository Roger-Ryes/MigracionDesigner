
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class OfficialOfficeTransferFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"originOfficial"	,
					"originOffice"	,
					"destinationOffice"	,
					"transferType"	,
					"reason"	,
					"destinationOfficial"	
			];			
			super(undefined,props);
		}   	    
	}
	public set originOfficial (value: number | null) {
    	this.setPropertyValue(value, "originOfficial");    	
  	}
  	
  	public get originOfficial(): number | null {
    	return this.getPropertyValue("originOfficial");    	
  	}
	public set originOffice (value: number | null) {
    	this.setPropertyValue(value, "originOffice");    	
  	}
  	
  	public get originOffice(): number | null {
    	return this.getPropertyValue("originOffice");    	
  	}
	public set destinationOffice (value: number | null) {
    	this.setPropertyValue(value, "destinationOffice");    	
  	}
  	
  	public get destinationOffice(): number | null {
    	return this.getPropertyValue("destinationOffice");    	
  	}
	public set transferType (value: string | null) {
    	this.setPropertyValue(value, "transferType");    	
  	}
  	
  	public get transferType(): string | null {
    	return this.getPropertyValue("transferType");    	
  	}
	public set reason (value: string | null) {
    	this.setPropertyValue(value, "reason");    	
  	}
  	
  	public get reason(): string | null {
    	return this.getPropertyValue("reason");    	
  	}
	public set destinationOfficial (value: number | null) {
    	this.setPropertyValue(value, "destinationOfficial");    	
  	}
  	
  	public get destinationOfficial(): number | null {
    	return this.getPropertyValue("destinationOfficial");    	
  	}
	
}