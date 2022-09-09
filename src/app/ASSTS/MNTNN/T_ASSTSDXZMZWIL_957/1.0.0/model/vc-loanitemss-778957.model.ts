import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanItemsList } from "../../../../entities/LoanItemsList";
import { Loan } from "../../../../entities/Loan";
export class Model {
public LoanItemsList!: any;
private _loanItemsListRowData!: LoanItemsList;
private _loan!: any;
constructor(private formGroupArray: any) {
this.LoanItemsList = [];
this._loanItemsListRowData = new LoanItemsList(formGroupArray["LoanItemsList"]);
this._loan = new Loan();
}
public set LoanItemsListRowData(entity: any) {
this._loanItemsListRowData = entity;
}
public get LoanItemsListRowData() {
return this._loanItemsListRowData;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}