import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanEntry } from "../../../../entities/LoanEntry";
export class Model {
public LoanEntry!: any;
private _loanEntryRowData!: LoanEntry;
constructor(private formGroupArray: any) {
this.LoanEntry = [];
this._loanEntryRowData = new LoanEntry(formGroupArray["LoanEntry"]);
}
public set LoanEntryRowData(entity: any) {
this._loanEntryRowData = entity;
}
public get LoanEntryRowData() {
return this._loanEntryRowData;
}
}