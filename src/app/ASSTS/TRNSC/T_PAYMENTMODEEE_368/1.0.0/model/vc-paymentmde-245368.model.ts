import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DisbursementResult } from "../../../../entities/DisbursementResult";
import { GeneralParameters } from "../../../../entities/GeneralParameters";
import { LoanAdditionalInformation } from "../../../../entities/LoanAdditionalInformation";
import { Loan } from "../../../../entities/Loan";
import { PaymentForm } from "../../../../entities/PaymentForm";
export class Model {
private _disbursementResult!: DisbursementResult;
private _generalParameters!: any;
private _loanAdditionalInformation!: any;
private _loan!: any;
private _paymentForm!: PaymentForm;
constructor(private formGroupArray: any) {
this._disbursementResult = new DisbursementResult(formGroupArray["DisbursementResult"]);
this._generalParameters = new GeneralParameters();
this._loanAdditionalInformation = new LoanAdditionalInformation();
this._loan = new Loan();
this._paymentForm = new PaymentForm(formGroupArray["PaymentForm"]);
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
public set LoanAdditionalInformation(valores: any) {
this._loanAdditionalInformation = valores;
}
public get LoanAdditionalInformation(): any {
return this._loanAdditionalInformation;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set PaymentForm(valores: any) {
this._paymentForm = CobisDesignerUtil.getEntityData(this._paymentForm, valores);
}
public get PaymentForm():PaymentForm{
return this._paymentForm;
}
}