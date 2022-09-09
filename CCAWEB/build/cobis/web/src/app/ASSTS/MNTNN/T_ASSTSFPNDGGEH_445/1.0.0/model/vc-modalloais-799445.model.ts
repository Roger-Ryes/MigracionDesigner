import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanItemsValues } from "../../../../entities/LoanItemsValues";
import { LoanItemsList } from "../../../../entities/LoanItemsList";
import { Loan } from "../../../../entities/Loan";
export class Model {
private _loanItemsValues!: any;
private _loanItemsList!: LoanItemsList;
private _loan!: any;
constructor(private formGroupArray: any) {
this._loanItemsValues = new LoanItemsValues();
this._loanItemsList = new LoanItemsList(formGroupArray["LoanItemsList"]);
this._loan = new Loan();
}
public set LoanItemsValues(valores: any) {
this._loanItemsValues = valores;
}
public get LoanItemsValues(): any {
return this._loanItemsValues;
}
public set LoanItemsList(valores: any) {
this._loanItemsList = CobisDesignerUtil.getEntityData(this._loanItemsList, valores);
}
public get LoanItemsList():LoanItemsList{
return this._loanItemsList;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}