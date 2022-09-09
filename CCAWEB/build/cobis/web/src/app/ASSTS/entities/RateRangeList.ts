
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class RateRangeList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"dataType1"	,
					"title1"	,
					"idRange"	,
					"dataTypeR2"	,
					"rank"	,
					"rangeName"	,
					"result2"	,
					"dataType2"	,
					"concept"	,
					"title2"	
			];			
			super(undefined,props);
		}   	    
	}
	public set dataType1 (value: string | null) {
    	this.setPropertyValue(value, "dataType1");    	
  	}
  	
  	public get dataType1(): string | null {
    	return this.getPropertyValue("dataType1");    	
  	}
	public set title1 (value: string | null) {
    	this.setPropertyValue(value, "title1");    	
  	}
  	
  	public get title1(): string | null {
    	return this.getPropertyValue("title1");    	
  	}
	public set idRange (value: number | null) {
    	this.setPropertyValue(value, "idRange");    	
  	}
  	
  	public get idRange(): number | null {
    	return this.getPropertyValue("idRange");    	
  	}
	public set dataTypeR2 (value: string | null) {
    	this.setPropertyValue(value, "dataTypeR2");    	
  	}
  	
  	public get dataTypeR2(): string | null {
    	return this.getPropertyValue("dataTypeR2");    	
  	}
	public set rank (value: number | null) {
    	this.setPropertyValue(value, "rank");    	
  	}
  	
  	public get rank(): number | null {
    	return this.getPropertyValue("rank");    	
  	}
	public set rangeName (value: string | null) {
    	this.setPropertyValue(value, "rangeName");    	
  	}
  	
  	public get rangeName(): string | null {
    	return this.getPropertyValue("rangeName");    	
  	}
	public set result2 (value: string | null) {
    	this.setPropertyValue(value, "result2");    	
  	}
  	
  	public get result2(): string | null {
    	return this.getPropertyValue("result2");    	
  	}
	public set dataType2 (value: string | null) {
    	this.setPropertyValue(value, "dataType2");    	
  	}
  	
  	public get dataType2(): string | null {
    	return this.getPropertyValue("dataType2");    	
  	}
	public set concept (value: string | null) {
    	this.setPropertyValue(value, "concept");    	
  	}
  	
  	public get concept(): string | null {
    	return this.getPropertyValue("concept");    	
  	}
	public set title2 (value: string | null) {
    	this.setPropertyValue(value, "title2");    	
  	}
  	
  	public get title2(): string | null {
    	return this.getPropertyValue("title2");    	
  	}
	
}