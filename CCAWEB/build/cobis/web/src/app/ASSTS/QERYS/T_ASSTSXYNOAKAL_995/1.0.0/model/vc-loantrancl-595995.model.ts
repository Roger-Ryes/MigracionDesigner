import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DetailTransaction } from "../../../../entities/DetailTransaction";
export class Model {
public DetailTransaction!: any;
private _detailTransactionRowData!: DetailTransaction;
constructor(private formGroupArray: any) {
this.DetailTransaction = [];
this._detailTransactionRowData = new DetailTransaction(formGroupArray["DetailTransaction"]);
}
public set DetailTransactionRowData(entity: any) {
this._detailTransactionRowData = entity;
}
public get DetailTransactionRowData() {
return this._detailTransactionRowData;
}
}