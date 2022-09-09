import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanSaleDetailList } from "../../../../entities/LoanSaleDetailList";
export class Model {
public LoanSaleDetailList!: any;
private _loanSaleDetailListRowData!: LoanSaleDetailList;
constructor(private formGroupArray: any) {
this.LoanSaleDetailList = [];
this._loanSaleDetailListRowData = new LoanSaleDetailList(formGroupArray["LoanSaleDetailList"]);
}
public set LoanSaleDetailListRowData(entity: any) {
this._loanSaleDetailListRowData = entity;
}
public get LoanSaleDetailListRowData() {
return this._loanSaleDetailListRowData;
}
}