import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanSaleDetailList } from "../../../../entities/LoanSaleDetailList";
import { LoanSaleList } from "../../../../entities/LoanSaleList";
export class Model {
public LoanSaleDetailList!: any;
private _loanSaleDetailListRowData!: LoanSaleDetailList;
private _loanSaleList!: any;
constructor(private formGroupArray: any) {
this.LoanSaleDetailList = [];
this._loanSaleDetailListRowData = new LoanSaleDetailList(formGroupArray["LoanSaleDetailList"]);
this._loanSaleList = new LoanSaleList();
}
public set LoanSaleDetailListRowData(entity: any) {
this._loanSaleDetailListRowData = entity;
}
public get LoanSaleDetailListRowData() {
return this._loanSaleDetailListRowData;
}
public set LoanSaleList(valores: any) {
this._loanSaleList = valores;
}
public get LoanSaleList(): any {
return this._loanSaleList;
}
}