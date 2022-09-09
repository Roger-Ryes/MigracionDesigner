import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { LoanSearchFilter } from "../../../../entities/LoanSearchFilter";
export class Model {
public Loan!: any;
private _loanRowData!: Loan;
private _loanSearchFilter!: LoanSearchFilter;
constructor(private formGroupArray: any) {
this.Loan = [];
this._loanRowData = new Loan(formGroupArray["Loan"]);
this._loanSearchFilter = new LoanSearchFilter(formGroupArray["LoanSearchFilter"]);
}
public set LoanRowData(entity: any) {
this._loanRowData = entity;
}
public get LoanRowData() {
return this._loanRowData;
}
public set LoanSearchFilter(valores: any) {
this._loanSearchFilter = CobisDesignerUtil.getEntityData(this._loanSearchFilter, valores);
}
public get LoanSearchFilter():LoanSearchFilter{
return this._loanSearchFilter;
}
}