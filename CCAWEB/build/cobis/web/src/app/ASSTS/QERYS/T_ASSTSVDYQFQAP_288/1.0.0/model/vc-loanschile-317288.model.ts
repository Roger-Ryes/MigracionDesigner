import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanChildren } from "../../../../entities/LoanChildren";
export class Model {
public LoanChildren!: any;
private _loanChildrenRowData!: LoanChildren;
constructor(private formGroupArray: any) {
this.LoanChildren = [];
this._loanChildrenRowData = new LoanChildren(formGroupArray["LoanChildren"]);
}
public set LoanChildrenRowData(entity: any) {
this._loanChildrenRowData = entity;
}
public get LoanChildrenRowData() {
return this._loanChildrenRowData;
}
}