import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanSyndicatedList } from "../../../../entities/LoanSyndicatedList";
export class Model {
public LoanSyndicatedList!: any;
private _loanSyndicatedListRowData!: LoanSyndicatedList;
constructor(private formGroupArray: any) {
this.LoanSyndicatedList = [];
this._loanSyndicatedListRowData = new LoanSyndicatedList(formGroupArray["LoanSyndicatedList"]);
}
public set LoanSyndicatedListRowData(entity: any) {
this._loanSyndicatedListRowData = entity;
}
public get LoanSyndicatedListRowData() {
return this._loanSyndicatedListRowData;
}
}