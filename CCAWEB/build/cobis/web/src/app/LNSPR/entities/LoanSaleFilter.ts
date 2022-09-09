
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoanSaleFilter  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"archive"	,
					"company"	,
					"sequential"	,
					"fileUploaded"	
			];			
			super(undefined,props);
		}   	    
	}
	public set archive (value: string | null) {
    	this.setPropertyValue(value, "archive");    	
  	}
  	
  	public get archive(): string | null {
    	return this.getPropertyValue("archive");    	
  	}
	public set company (value: string | null) {
    	this.setPropertyValue(value, "company");    	
  	}
  	
  	public get company(): string | null {
    	return this.getPropertyValue("company");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set fileUploaded (value: boolean | null) {
    	this.setPropertyValue(value, "fileUploaded");    	
  	}
  	
  	public get fileUploaded(): boolean | null {
    	return this.getPropertyValue("fileUploaded");    	
  	}
	
}