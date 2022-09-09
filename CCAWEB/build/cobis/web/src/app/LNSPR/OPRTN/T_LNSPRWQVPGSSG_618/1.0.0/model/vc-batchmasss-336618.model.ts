import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ErrorMassivePayments } from "../../../../entities/ErrorMassivePayments";
import { LoanSearchFilter } from "../../../../entities/LoanSearchFilter";
import { MassivePayments } from "../../../../entities/MassivePayments";
import { Payment } from "../../../../entities/Payment";
export class Model {
private _errorMassivePayments!: any;
private _loanSearchFilter!: LoanSearchFilter;
public MassivePayments!: any;
private _massivePaymentsRowData!: MassivePayments;
private _payment!: any;
constructor(private formGroupArray: any) {
this._errorMassivePayments = new ErrorMassivePayments();
this._loanSearchFilter = new LoanSearchFilter(formGroupArray["LoanSearchFilter"]);
this.MassivePayments = [];
this._massivePaymentsRowData = new MassivePayments(formGroupArray["MassivePayments"]);
this._payment = new Payment();
}
public set ErrorMassivePayments(valores: any) {
this._errorMassivePayments = valores;
}
public get ErrorMassivePayments(): any {
return this._errorMassivePayments;
}
public set LoanSearchFilter(valores: any) {
this._loanSearchFilter = CobisDesignerUtil.getEntityData(this._loanSearchFilter, valores);
}
public get LoanSearchFilter():LoanSearchFilter{
return this._loanSearchFilter;
}
public set MassivePaymentsRowData(entity: any) {
this._massivePaymentsRowData = entity;
}
public get MassivePaymentsRowData() {
return this._massivePaymentsRowData;
}
public set Payment(valores: any) {
this._payment = valores;
}
public get Payment(): any {
return this._payment;
}
}