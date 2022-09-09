import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { NoAppliedPayment } from "../../../../entities/NoAppliedPayment";
export class Model {
private _loan!: any;
public NoAppliedPayment!: any;
private _noAppliedPaymentRowData!: NoAppliedPayment;
constructor(private formGroupArray: any) {
this._loan = new Loan();
this.NoAppliedPayment = [];
this._noAppliedPaymentRowData = new NoAppliedPayment(formGroupArray["NoAppliedPayment"]);
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set NoAppliedPaymentRowData(entity: any) {
this._noAppliedPaymentRowData = entity;
}
public get NoAppliedPaymentRowData() {
return this._noAppliedPaymentRowData;
}
}