import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanSearchFilter } from "../../../../entities/LoanSearchFilter";
import { StatesAssetsLoan } from "../../../../entities/StatesAssetsLoan";
export class Model {
private _loanSearchFilter!: LoanSearchFilter;
private _statesAssetsLoan!: any;
constructor(private formGroupArray: any) {
this._loanSearchFilter = new LoanSearchFilter(formGroupArray["LoanSearchFilter"]);
this._statesAssetsLoan = new StatesAssetsLoan();
}
public set LoanSearchFilter(valores: any) {
this._loanSearchFilter = CobisDesignerUtil.getEntityData(this._loanSearchFilter, valores);
}
public get LoanSearchFilter():LoanSearchFilter{
return this._loanSearchFilter;
}
public set StatesAssetsLoan(valores: any) {
this._statesAssetsLoan = valores;
}
public get StatesAssetsLoan(): any {
return this._statesAssetsLoan;
}
}