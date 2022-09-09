import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { ReadjustmentLoanCab } from "../../../../entities/ReadjustmentLoanCab";
import { ReadjustmentDetalilsLoan } from "../../../../entities/ReadjustmentDetalilsLoan";
export class Model {
private _loan!: Loan;
private _readjustmentLoanCab!: ReadjustmentLoanCab;
public ReadjustmentDetalilsLoan!: any;
private _readjustmentDetalilsLoanRowData!: ReadjustmentDetalilsLoan;
constructor(private formGroupArray: any) {
this._loan = new Loan(formGroupArray["Loan"]);
this._readjustmentLoanCab = new ReadjustmentLoanCab(formGroupArray["ReadjustmentLoanCab"]);
this.ReadjustmentDetalilsLoan = [];
this._readjustmentDetalilsLoanRowData = new ReadjustmentDetalilsLoan(formGroupArray["ReadjustmentDetalilsLoan"]);
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
public set ReadjustmentLoanCab(valores: any) {
this._readjustmentLoanCab = CobisDesignerUtil.getEntityData(this._readjustmentLoanCab, valores);
}
public get ReadjustmentLoanCab():ReadjustmentLoanCab{
return this._readjustmentLoanCab;
}
public set ReadjustmentDetalilsLoanRowData(entity: any) {
this._readjustmentDetalilsLoanRowData = entity;
}
public get ReadjustmentDetalilsLoanRowData() {
return this._readjustmentDetalilsLoanRowData;
}
}