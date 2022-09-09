import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Amortization } from "../../../../entities/Amortization";
import { AmortizationSimulate } from "../../../../entities/AmortizationSimulate";
import { Loan } from "../../../../entities/Loan";
import { Negotiation } from "../../../../entities/Negotiation";
import { Payment } from "../../../../entities/Payment";
import { QuoteDetails } from "../../../../entities/QuoteDetails";
export class Model {
private _amortization!: any;
private _amortizationSimulate!: any;
private _loan!: any;
private _negotiation!: any;
private _payment!: Payment;
public QuoteDetails!: any;
private _quoteDetailsRowData!: QuoteDetails;
constructor(private formGroupArray: any) {
this._amortization = new Amortization();
this._amortizationSimulate = new AmortizationSimulate();
this._loan = new Loan();
this._negotiation = new Negotiation();
this._payment = new Payment(formGroupArray["Payment"]);
this.QuoteDetails = [];
this._quoteDetailsRowData = new QuoteDetails(formGroupArray["QuoteDetails"]);
}
public set Amortization(valores: any) {
this._amortization = valores;
}
public get Amortization(): any {
return this._amortization;
}
public set AmortizationSimulate(valores: any) {
this._amortizationSimulate = valores;
}
public get AmortizationSimulate(): any {
return this._amortizationSimulate;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set Negotiation(valores: any) {
this._negotiation = valores;
}
public get Negotiation(): any {
return this._negotiation;
}
public set Payment(valores: any) {
this._payment = CobisDesignerUtil.getEntityData(this._payment, valores);
}
public get Payment():Payment{
return this._payment;
}
public set QuoteDetailsRowData(entity: any) {
this._quoteDetailsRowData = entity;
}
public get QuoteDetailsRowData() {
return this._quoteDetailsRowData;
}
}