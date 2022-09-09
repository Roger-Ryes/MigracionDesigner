import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { Payment } from "../../../../entities/Payment";
import { PrepaymentRate } from "../../../../entities/PrepaymentRate";
import { QuoteDetailPayment } from "../../../../entities/QuoteDetailPayment";
export class Model {
private _loan!: any;
private _payment!: any;
private _prepaymentRate!: any;
public QuoteDetailPayment!: any;
private _quoteDetailPaymentRowData!: QuoteDetailPayment;
constructor(private formGroupArray: any) {
this._loan = new Loan();
this._payment = new Payment();
this._prepaymentRate = new PrepaymentRate();
this.QuoteDetailPayment = [];
this._quoteDetailPaymentRowData = new QuoteDetailPayment(formGroupArray["QuoteDetailPayment"]);
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set Payment(valores: any) {
this._payment = valores;
}
public get Payment(): any {
return this._payment;
}
public set PrepaymentRate(valores: any) {
this._prepaymentRate = valores;
}
public get PrepaymentRate(): any {
return this._prepaymentRate;
}
public set QuoteDetailPaymentRowData(entity: any) {
this._quoteDetailPaymentRowData = entity;
}
public get QuoteDetailPaymentRowData() {
return this._quoteDetailPaymentRowData;
}
}