import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LeftOverPayment } from "../../../../entities/LeftOverPayment";
import { Loan } from "../../../../entities/Loan";
import { LoanPaymentGroup } from "../../../../entities/LoanPaymentGroup";
import { Negotiation } from "../../../../entities/Negotiation";
import { PaymentGroup } from "../../../../entities/PaymentGroup";
import { PaymentListGroupClient } from "../../../../entities/PaymentListGroupClient";
import { PaymentMethod } from "../../../../entities/PaymentMethod";
export class Model {
private _leftOverPayment!: any;
private _loan!: any;
private _loanPaymentGroup!: LoanPaymentGroup;
private _negotiation!: any;
private _paymentGroup!: PaymentGroup;
public PaymentListGroupClient!: any;
private _paymentListGroupClientRowData!: PaymentListGroupClient;
private _paymentMethod!: any;
constructor(private formGroupArray: any) {
this._leftOverPayment = new LeftOverPayment();
this._loan = new Loan();
this._loanPaymentGroup = new LoanPaymentGroup(formGroupArray["LoanPaymentGroup"]);
this._negotiation = new Negotiation();
this._paymentGroup = new PaymentGroup(formGroupArray["PaymentGroup"]);
this.PaymentListGroupClient = [];
this._paymentListGroupClientRowData = new PaymentListGroupClient(formGroupArray["PaymentListGroupClient"]);
this._paymentMethod = new PaymentMethod();
}
public set LeftOverPayment(valores: any) {
this._leftOverPayment = valores;
}
public get LeftOverPayment(): any {
return this._leftOverPayment;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set LoanPaymentGroup(valores: any) {
this._loanPaymentGroup = CobisDesignerUtil.getEntityData(this._loanPaymentGroup, valores);
}
public get LoanPaymentGroup():LoanPaymentGroup{
return this._loanPaymentGroup;
}
public set Negotiation(valores: any) {
this._negotiation = valores;
}
public get Negotiation(): any {
return this._negotiation;
}
public set PaymentGroup(valores: any) {
this._paymentGroup = CobisDesignerUtil.getEntityData(this._paymentGroup, valores);
}
public get PaymentGroup():PaymentGroup{
return this._paymentGroup;
}
public set PaymentListGroupClientRowData(entity: any) {
this._paymentListGroupClientRowData = entity;
}
public get PaymentListGroupClientRowData() {
return this._paymentListGroupClientRowData;
}
public set PaymentMethod(valores: any) {
this._paymentMethod = valores;
}
public get PaymentMethod(): any {
return this._paymentMethod;
}
}