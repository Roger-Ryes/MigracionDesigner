import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanSaleDetailList } from "../../../../entities/LoanSaleDetailList";
import { LoanSaleList } from "../../../../entities/LoanSaleList";
import { LoanSaleFilter } from "../../../../entities/LoanSaleFilter";
export class Model {
public LoanSaleDetailList!: any;
private _loanSaleDetailListRowData!: LoanSaleDetailList;
public LoanSaleList!: any;
private _loanSaleListRowData!: LoanSaleList;
private _loanSaleFilter!: LoanSaleFilter;
constructor(private formGroupArray: any) {
this.LoanSaleDetailList = [];
this._loanSaleDetailListRowData = new LoanSaleDetailList(formGroupArray["LoanSaleDetailList"]);
this.LoanSaleList = [];
this._loanSaleListRowData = new LoanSaleList(formGroupArray["LoanSaleList"]);
this._loanSaleFilter = new LoanSaleFilter(formGroupArray["LoanSaleFilter"]);
}
public set LoanSaleDetailListRowData(entity: any) {
this._loanSaleDetailListRowData = entity;
}
public get LoanSaleDetailListRowData() {
return this._loanSaleDetailListRowData;
}
public set LoanSaleListRowData(entity: any) {
this._loanSaleListRowData = entity;
}
public get LoanSaleListRowData() {
return this._loanSaleListRowData;
}
public set LoanSaleFilter(valores: any) {
this._loanSaleFilter = CobisDesignerUtil.getEntityData(this._loanSaleFilter, valores);
}
public get LoanSaleFilter():LoanSaleFilter{
return this._loanSaleFilter;
}
}