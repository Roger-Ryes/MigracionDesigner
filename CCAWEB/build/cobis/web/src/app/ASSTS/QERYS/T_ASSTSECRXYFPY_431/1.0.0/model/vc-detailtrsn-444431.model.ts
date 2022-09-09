import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DetailTransactionQuery } from "../../../../entities/DetailTransactionQuery";
export class Model {
public DetailTransactionQuery!: any;
private _detailTransactionQueryRowData!: DetailTransactionQuery;
constructor(private formGroupArray: any) {
this.DetailTransactionQuery = [];
this._detailTransactionQueryRowData = new DetailTransactionQuery(formGroupArray["DetailTransactionQuery"]);
}
public set DetailTransactionQueryRowData(entity: any) {
this._detailTransactionQueryRowData = entity;
}
public get DetailTransactionQueryRowData() {
return this._detailTransactionQueryRowData;
}
}