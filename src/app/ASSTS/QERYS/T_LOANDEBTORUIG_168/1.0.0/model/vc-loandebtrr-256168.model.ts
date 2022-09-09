import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanDebtor } from "../../../../entities/LoanDebtor";
export class Model {
public LoanDebtor!: any;
private _loanDebtorRowData!: LoanDebtor;
constructor(private formGroupArray: any) {
this.LoanDebtor = [];
this._loanDebtorRowData = new LoanDebtor(formGroupArray["LoanDebtor"]);
}
public set LoanDebtorRowData(entity: any) {
this._loanDebtorRowData = entity;
}
public get LoanDebtorRowData() {
return this._loanDebtorRowData;
}
}