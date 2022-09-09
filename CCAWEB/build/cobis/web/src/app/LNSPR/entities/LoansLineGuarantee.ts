
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class LoansLineGuarantee  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"clientGar"	,
					"type"	,
					"procedure"	,
					"guaranteeType"	,
					"guaranteeValue"	,
					"clientCode"	,
					"codLine"	,
					"sequential"	,
					"guaranteeTypeCode"	,
					"classe"	,
					"client"	,
					"guaranteeStatus"	,
					"guarantee"	
			];			
			super(undefined,props);
		}   	    
	}
	public set clientGar (value: number | null) {
    	this.setPropertyValue(value, "clientGar");    	
  	}
  	
  	public get clientGar(): number | null {
    	return this.getPropertyValue("clientGar");    	
  	}
	public set type (value: string | null) {
    	this.setPropertyValue(value, "type");    	
  	}
  	
  	public get type(): string | null {
    	return this.getPropertyValue("type");    	
  	}
	public set procedure (value: string | null) {
    	this.setPropertyValue(value, "procedure");    	
  	}
  	
  	public get procedure(): string | null {
    	return this.getPropertyValue("procedure");    	
  	}
	public set guaranteeType (value: string | null) {
    	this.setPropertyValue(value, "guaranteeType");    	
  	}
  	
  	public get guaranteeType(): string | null {
    	return this.getPropertyValue("guaranteeType");    	
  	}
	public set guaranteeValue (value: number | null) {
    	this.setPropertyValue(value, "guaranteeValue");    	
  	}
  	
  	public get guaranteeValue(): number | null {
    	return this.getPropertyValue("guaranteeValue");    	
  	}
	public set clientCode (value: number | null) {
    	this.setPropertyValue(value, "clientCode");    	
  	}
  	
  	public get clientCode(): number | null {
    	return this.getPropertyValue("clientCode");    	
  	}
	public set codLine (value: string | null) {
    	this.setPropertyValue(value, "codLine");    	
  	}
  	
  	public get codLine(): string | null {
    	return this.getPropertyValue("codLine");    	
  	}
	public set sequential (value: number | null) {
    	this.setPropertyValue(value, "sequential");    	
  	}
  	
  	public get sequential(): number | null {
    	return this.getPropertyValue("sequential");    	
  	}
	public set guaranteeTypeCode (value: number | null) {
    	this.setPropertyValue(value, "guaranteeTypeCode");    	
  	}
  	
  	public get guaranteeTypeCode(): number | null {
    	return this.getPropertyValue("guaranteeTypeCode");    	
  	}
	public set classe (value: string | null) {
    	this.setPropertyValue(value, "classe");    	
  	}
  	
  	public get classe(): string | null {
    	return this.getPropertyValue("classe");    	
  	}
	public set client (value: string | null) {
    	this.setPropertyValue(value, "client");    	
  	}
  	
  	public get client(): string | null {
    	return this.getPropertyValue("client");    	
  	}
	public set guaranteeStatus (value: string | null) {
    	this.setPropertyValue(value, "guaranteeStatus");    	
  	}
  	
  	public get guaranteeStatus(): string | null {
    	return this.getPropertyValue("guaranteeStatus");    	
  	}
	public set guarantee (value: string | null) {
    	this.setPropertyValue(value, "guarantee");    	
  	}
  	
  	public get guarantee(): string | null {
    	return this.getPropertyValue("guarantee");    	
  	}
	
}