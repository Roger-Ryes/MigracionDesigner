import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { GeneralParameters } from "../../../../entities/GeneralParameters";
import { LeftOverPayment } from "../../../../entities/LeftOverPayment";
import { DeferredRefundList } from "../../../../entities/DeferredRefundList";
import { Loan } from "../../../../entities/Loan";
import { Negotiation } from "../../../../entities/Negotiation";
import { PaymentMethod } from "../../../../entities/PaymentMethod";
import { Payment } from "../../../../entities/Payment";
import { Priorities } from "../../../../entities/Priorities";
import { QuotationCurrency } from "../../../../entities/QuotationCurrency";
import { QuoteDetails } from "../../../../entities/QuoteDetails";
export class Model {
private _generalParameters!: any;
private _leftOverPayment!: any;
public DeferredRefundList!: any;
private _deferredRefundListRowData!: DeferredRefundList;
private _loan!: any;
private _negotiation!: any;
private _paymentMethod!: any;
private _payment!: Payment;
public Priorities!: any;
private _prioritiesRowData!: Priorities;
public QuotationCurrency!: any;
private _quotationCurrencyRowData!: QuotationCurrency;
public QuoteDetails!: any;
private _quoteDetailsRowData!: QuoteDetails;
constructor(private formGroupArray: any) {
this._generalParameters = new GeneralParameters();
this._leftOverPayment = new LeftOverPayment();
this.DeferredRefundList = [];
this._deferredRefundListRowData = new DeferredRefundList(formGroupArray["DeferredRefundList"]);
this._loan = new Loan();
this._negotiation = new Negotiation();
this._paymentMethod = new PaymentMethod();
this._payment = new Payment(formGroupArray["Payment"]);
this.Priorities = [];
this._prioritiesRowData = new Priorities(formGroupArray["Priorities"]);
this.QuotationCurrency = [];
this._quotationCurrencyRowData = new QuotationCurrency(formGroupArray["QuotationCurrency"]);
this.QuoteDetails = [];
this._quoteDetailsRowData = new QuoteDetails(formGroupArray["QuoteDetails"]);
}
public set GeneralParameters(valores: any) {
this._generalParameters = valores;
}
public get GeneralParameters(): any {
return this._generalParameters;
}
public set LeftOverPayment(valores: any) {
this._leftOverPayment = valores;
}
public get LeftOverPayment(): any {
return this._leftOverPayment;
}
public set DeferredRefundListRowData(entity: any) {
this._deferredRefundListRowData = entity;
}
public get DeferredRefundListRowData() {
return this._deferredRefundListRowData;
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
public set PaymentMethod(valores: any) {
this._paymentMethod = valores;
}
public get PaymentMethod(): any {
return this._paymentMethod;
}
public set Payment(valores: any) {
this._payment = CobisDesignerUtil.getEntityData(this._payment, valores);
}
public get Payment():Payment{
return this._payment;
}
public set PrioritiesRowData(entity: any) {
this._prioritiesRowData = entity;
}
public get PrioritiesRowData() {
return this._prioritiesRowData;
}
public set QuotationCurrencyRowData(entity: any) {
this._quotationCurrencyRowData = entity;
}
public get QuotationCurrencyRowData() {
return this._quotationCurrencyRowData;
}
public set QuoteDetailsRowData(entity: any) {
this._quoteDetailsRowData = entity;
}
public get QuoteDetailsRowData() {
return this._quoteDetailsRowData;
}
}