import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanWarranty } from "../../../../entities/LoanWarranty";
export class Model {
public LoanWarranty!: any;
private _loanWarrantyRowData!: LoanWarranty;
constructor(private formGroupArray: any) {
this.LoanWarranty = [];
this._loanWarrantyRowData = new LoanWarranty(formGroupArray["LoanWarranty"]);
}
public set LoanWarrantyRowData(entity: any) {
this._loanWarrantyRowData = entity;
}
public get LoanWarrantyRowData() {
return this._loanWarrantyRowData;
}
}