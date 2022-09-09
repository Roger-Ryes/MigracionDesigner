
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class MethodsRetention  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"descriptionCanal"	,
					"paymentAut"	,
					"valueCode"	,
					"transacction"	,
					"retentiondays"	,
					"canal"	,
					"descCurrency"	,
					"product"	,
					"reversePro"	,
					"bankInstrument"	,
					"category"	,
					"codeCategory"	,
					"bankServices"	,
					"payment"	,
					"over"	,
					"currencyRetention"	,
					"descripBank"	,
					"paymentATX"	,
					"descCOBIS"	,
					"descriptionCategory"	,
					"description"	,
					"paymentMethods"	,
					"activePassive"	,
					"disbursement"	,
					"pcobis"	,
					"state"	,
					"affectation"	
			];			
			super(undefined,props);
		}   	    
	}
	public set descriptionCanal (value: string | null) {
    	this.setPropertyValue(value, "descriptionCanal");    	
  	}
  	
  	public get descriptionCanal(): string | null {
    	return this.getPropertyValue("descriptionCanal");    	
  	}
	public set paymentAut (value: string | null) {
    	this.setPropertyValue(value, "paymentAut");    	
  	}
  	
  	public get paymentAut(): string | null {
    	return this.getPropertyValue("paymentAut");    	
  	}
	public set valueCode (value: number | null) {
    	this.setPropertyValue(value, "valueCode");    	
  	}
  	
  	public get valueCode(): number | null {
    	return this.getPropertyValue("valueCode");    	
  	}
	public set transacction (value: string | null) {
    	this.setPropertyValue(value, "transacction");    	
  	}
  	
  	public get transacction(): string | null {
    	return this.getPropertyValue("transacction");    	
  	}
	public set retentiondays (value: number | null) {
    	this.setPropertyValue(value, "retentiondays");    	
  	}
  	
  	public get retentiondays(): number | null {
    	return this.getPropertyValue("retentiondays");    	
  	}
	public set canal (value: string | null) {
    	this.setPropertyValue(value, "canal");    	
  	}
  	
  	public get canal(): string | null {
    	return this.getPropertyValue("canal");    	
  	}
	public set descCurrency (value: string | null) {
    	this.setPropertyValue(value, "descCurrency");    	
  	}
  	
  	public get descCurrency(): string | null {
    	return this.getPropertyValue("descCurrency");    	
  	}
	public set product (value: string | null) {
    	this.setPropertyValue(value, "product");    	
  	}
  	
  	public get product(): string | null {
    	return this.getPropertyValue("product");    	
  	}
	public set reversePro (value: string | null) {
    	this.setPropertyValue(value, "reversePro");    	
  	}
  	
  	public get reversePro(): string | null {
    	return this.getPropertyValue("reversePro");    	
  	}
	public set bankInstrument (value: number | null) {
    	this.setPropertyValue(value, "bankInstrument");    	
  	}
  	
  	public get bankInstrument(): number | null {
    	return this.getPropertyValue("bankInstrument");    	
  	}
	public set category (value: string | null) {
    	this.setPropertyValue(value, "category");    	
  	}
  	
  	public get category(): string | null {
    	return this.getPropertyValue("category");    	
  	}
	public set codeCategory (value: string | null) {
    	this.setPropertyValue(value, "codeCategory");    	
  	}
  	
  	public get codeCategory(): string | null {
    	return this.getPropertyValue("codeCategory");    	
  	}
	public set bankServices (value: string | null) {
    	this.setPropertyValue(value, "bankServices");    	
  	}
  	
  	public get bankServices(): string | null {
    	return this.getPropertyValue("bankServices");    	
  	}
	public set payment (value: string | null) {
    	this.setPropertyValue(value, "payment");    	
  	}
  	
  	public get payment(): string | null {
    	return this.getPropertyValue("payment");    	
  	}
	public set over (value: string | null) {
    	this.setPropertyValue(value, "over");    	
  	}
  	
  	public get over(): string | null {
    	return this.getPropertyValue("over");    	
  	}
	public set currencyRetention (value: number | null) {
    	this.setPropertyValue(value, "currencyRetention");    	
  	}
  	
  	public get currencyRetention(): number | null {
    	return this.getPropertyValue("currencyRetention");    	
  	}
	public set descripBank (value: string | null) {
    	this.setPropertyValue(value, "descripBank");    	
  	}
  	
  	public get descripBank(): string | null {
    	return this.getPropertyValue("descripBank");    	
  	}
	public set paymentATX (value: string | null) {
    	this.setPropertyValue(value, "paymentATX");    	
  	}
  	
  	public get paymentATX(): string | null {
    	return this.getPropertyValue("paymentATX");    	
  	}
	public set descCOBIS (value: string | null) {
    	this.setPropertyValue(value, "descCOBIS");    	
  	}
  	
  	public get descCOBIS(): string | null {
    	return this.getPropertyValue("descCOBIS");    	
  	}
	public set descriptionCategory (value: string | null) {
    	this.setPropertyValue(value, "descriptionCategory");    	
  	}
  	
  	public get descriptionCategory(): string | null {
    	return this.getPropertyValue("descriptionCategory");    	
  	}
	public set description (value: string | null) {
    	this.setPropertyValue(value, "description");    	
  	}
  	
  	public get description(): string | null {
    	return this.getPropertyValue("description");    	
  	}
	public set paymentMethods (value: string | null) {
    	this.setPropertyValue(value, "paymentMethods");    	
  	}
  	
  	public get paymentMethods(): string | null {
    	return this.getPropertyValue("paymentMethods");    	
  	}
	public set activePassive (value: string | null) {
    	this.setPropertyValue(value, "activePassive");    	
  	}
  	
  	public get activePassive(): string | null {
    	return this.getPropertyValue("activePassive");    	
  	}
	public set disbursement (value: string | null) {
    	this.setPropertyValue(value, "disbursement");    	
  	}
  	
  	public get disbursement(): string | null {
    	return this.getPropertyValue("disbursement");    	
  	}
	public set pcobis (value: string | null) {
    	this.setPropertyValue(value, "pcobis");    	
  	}
  	
  	public get pcobis(): string | null {
    	return this.getPropertyValue("pcobis");    	
  	}
	public set state (value: string | null) {
    	this.setPropertyValue(value, "state");    	
  	}
  	
  	public get state(): string | null {
    	return this.getPropertyValue("state");    	
  	}
	public set affectation (value: string | null) {
    	this.setPropertyValue(value, "affectation");    	
  	}
  	
  	public get affectation(): string | null {
    	return this.getPropertyValue("affectation");    	
  	}
	
}