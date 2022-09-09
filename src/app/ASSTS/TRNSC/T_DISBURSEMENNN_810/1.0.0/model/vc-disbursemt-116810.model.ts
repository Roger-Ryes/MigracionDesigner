import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DetailAmountsToCancel } from "../../../../entities/DetailAmountsToCancel";
import { DetailPaymentForm } from "../../../../entities/DetailPaymentForm";
import { DisbursementResult } from "../../../../entities/DisbursementResult";
import { GeneralParameters } from "../../../../entities/GeneralParameters";
import { LiquidateResult } from "../../../../entities/LiquidateResult";
import { LoanAdditionalInformation } from "../../../../entities/LoanAdditionalInformation";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
import { Loan } from "../../../../entities/Loan";
export class Model {
public DetailAmountsToCancel!: any;
private _detailAmountsToCancelRowData!: DetailAmountsToCancel;
public DetailPaymentForm!: any;
private _detailPaymentFormRowData!: DetailPaymentForm;
private _disbursementResult!: DisbursementResult;
private _generalParameters!: any;
private _liquidateResult!: LiquidateResult;
private _loanAdditionalInformation!: LoanAdditionalInformation;
private _loanInstancia!: any;
private _loan!: any;
constructor(private formGroupArray: any) {
this.DetailAmountsToCancel = [];
this._detailAmountsToCancelRowData = new DetailAmountsToCancel(formGroupArray["DetailAmountsToCancel"]);
this.DetailPaymentForm = [];
this._detailPaymentFormRowData = new DetailPaymentForm(formGroupArray["DetailPaymentForm"]);
this._disbursementResult = new DisbursementResult(formGroupArray["DisbursementResult"]);
this._generalParameters = new GeneralParameters();
this._liquidateResult = new LiquidateResult(formGroupArray["LiquidateResult"]);
this._loanAdditionalInformation = new LoanAdditionalInformation(formGroupArray["LoanAdditionalInformation"]);
this._loanInstancia = new LoanInstancia();
this._loan = new Loan();
}
public set DetailAmountsToCancelRowData(entity: any) {
this._detailAmountsToCancelRowData = entity;
}
public get DetailAmountsToCancelRowData() {
return this._detailAmountsToCancelRowData;
}
public set DetailPaymentFormRowData(entity: any) {
this._detailPaymentFormRowData = entity;
}
public get DetailPaymentFormRowData() {
return this._detailPaymentFormRowData;
}
public set DisbursementResult(valores: any) {
this._disbursementResult = CobisDesignerUtil.getEntityData(this._disbursementResult, valores);
}
public get DisbursementResult():DisbursementResult{
return this._disbursementResult;
}
public set GeneralParameters(valores: any) {
this._generalParameters = valores;
}
public get GeneralParameters(): any {
return this._generalParameters;
}
public set LiquidateResult(valores: any) {
this._liquidateResult = CobisDesignerUtil.getEntityData(this._liquidateResult, valores);
}
public get LiquidateResult():LiquidateResult{
return this._liquidateResult;
}
public set LoanAdditionalInformation(valores: any) {
this._loanAdditionalInformation = CobisDesignerUtil.getEntityData(this._loanAdditionalInformation, valores);
}
public get LoanAdditionalInformation():LoanAdditionalInformation{
return this._loanAdditionalInformation;
}
public set LoanInstancia(valores: any) {
this._loanInstancia = valores;
}
public get LoanInstancia(): any {
return this._loanInstancia;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}