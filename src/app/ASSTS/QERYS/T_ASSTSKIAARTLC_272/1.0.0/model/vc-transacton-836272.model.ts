import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { FilterTransactionQuery } from "../../../../entities/FilterTransactionQuery";
import { ListTransactionQuery } from "../../../../entities/ListTransactionQuery";
export class Model {
private _filterTransactionQuery!: FilterTransactionQuery;
public ListTransactionQuery!: any;
private _listTransactionQueryRowData!: ListTransactionQuery;
constructor(private formGroupArray: any) {
this._filterTransactionQuery = new FilterTransactionQuery(formGroupArray["FilterTransactionQuery"]);
this.ListTransactionQuery = [];
this._listTransactionQueryRowData = new ListTransactionQuery(formGroupArray["ListTransactionQuery"]);
}
public set FilterTransactionQuery(valores: any) {
this._filterTransactionQuery = CobisDesignerUtil.getEntityData(this._filterTransactionQuery, valores);
}
public get FilterTransactionQuery():FilterTransactionQuery{
return this._filterTransactionQuery;
}
public set ListTransactionQueryRowData(entity: any) {
this._listTransactionQueryRowData = entity;
}
public get ListTransactionQueryRowData() {
return this._listTransactionQueryRowData;
}
}