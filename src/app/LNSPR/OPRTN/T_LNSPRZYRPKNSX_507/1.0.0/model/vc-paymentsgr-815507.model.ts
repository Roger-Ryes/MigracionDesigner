import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ErrorMassivePayments } from "../../../../entities/ErrorMassivePayments";
import { LoanList } from "../../../../entities/LoanList";
import { MassivePayments } from "../../../../entities/MassivePayments";
import { PaymentMethod } from "../../../../entities/PaymentMethod";
import { Payment } from "../../../../entities/Payment";
export class Model {
private _errorMassivePayments!: any;
private _loanList!: any;
private _massivePayments!: any;
private _paymentMethod!: PaymentMethod;
private _payment!: Payment;
constructor(private formGroupArray: any) {
this._errorMassivePayments = new ErrorMassivePayments();
this._loanList = new LoanList();
this._massivePayments = new MassivePayments();
this._paymentMethod = new PaymentMethod(formGroupArray["PaymentMethod"]);
this._payment = new Payment(formGroupArray["Payment"]);
}
public set ErrorMassivePayments(valores: any) {
this._errorMassivePayments = valores;
}
public get ErrorMassivePayments(): any {
return this._errorMassivePayments;
}
public set LoanList(valores: any) {
this._loanList = valores;
}
public get LoanList(): any {
return this._loanList;
}
public set MassivePayments(valores: any) {
this._massivePayments = valores;
}
public get MassivePayments(): any {
return this._massivePayments;
}
public set PaymentMethod(valores: any) {
this._paymentMethod = CobisDesignerUtil.getEntityData(this._paymentMethod, valores);
}
public get PaymentMethod():PaymentMethod{
return this._paymentMethod;
}
public set Payment(valores: any) {
this._payment = CobisDesignerUtil.getEntityData(this._payment, valores);
}
public get Payment():Payment{
return this._payment;
}
}