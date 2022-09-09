import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanList } from "../../../../entities/LoanList";
import { LoanSearchFilter } from "../../../../entities/LoanSearchFilter";
import { MassiveCommissionsMistakes } from "../../../../entities/MassiveCommissionsMistakes";
import { StatesAssetsLoan } from "../../../../entities/StatesAssetsLoan";
export class Model {
public LoanList!: any;
private _loanListRowData!: LoanList;
private _loanSearchFilter!: LoanSearchFilter;
private _massiveCommissionsMistakes!: any;
private _statesAssetsLoan!: StatesAssetsLoan;
constructor(private formGroupArray: any) {
this.LoanList = [];
this._loanListRowData = new LoanList(formGroupArray["LoanList"]);
this._loanSearchFilter = new LoanSearchFilter(formGroupArray["LoanSearchFilter"]);
this._massiveCommissionsMistakes = new MassiveCommissionsMistakes();
this._statesAssetsLoan = new StatesAssetsLoan(formGroupArray["StatesAssetsLoan"]);
}
public set LoanListRowData(entity: any) {
this._loanListRowData = entity;
}
public get LoanListRowData() {
return this._loanListRowData;
}
public set LoanSearchFilter(valores: any) {
this._loanSearchFilter = CobisDesignerUtil.getEntityData(this._loanSearchFilter, valores);
}
public get LoanSearchFilter():LoanSearchFilter{
return this._loanSearchFilter;
}
public set MassiveCommissionsMistakes(valores: any) {
this._massiveCommissionsMistakes = valores;
}
public get MassiveCommissionsMistakes(): any {
return this._massiveCommissionsMistakes;
}
public set StatesAssetsLoan(valores: any) {
this._statesAssetsLoan = CobisDesignerUtil.getEntityData(this._statesAssetsLoan, valores);
}
public get StatesAssetsLoan():StatesAssetsLoan{
return this._statesAssetsLoan;
}
}