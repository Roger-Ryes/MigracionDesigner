import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ActiveTransaction } from "../../../../entities/ActiveTransaction";
import { Causation } from "../../../../entities/Causation";
import { ReversedTransaction } from "../../../../entities/ReversedTransaction";
export class Model {
public ActiveTransaction!: any;
private _activeTransactionRowData!: ActiveTransaction;
public Causation!: any;
private _causationRowData!: Causation;
public ReversedTransaction!: any;
private _reversedTransactionRowData!: ReversedTransaction;
constructor(private formGroupArray: any) {
this.ActiveTransaction = [];
this._activeTransactionRowData = new ActiveTransaction(formGroupArray["ActiveTransaction"]);
this.Causation = [];
this._causationRowData = new Causation(formGroupArray["Causation"]);
this.ReversedTransaction = [];
this._reversedTransactionRowData = new ReversedTransaction(formGroupArray["ReversedTransaction"]);
}
public set ActiveTransactionRowData(entity: any) {
this._activeTransactionRowData = entity;
}
public get ActiveTransactionRowData() {
return this._activeTransactionRowData;
}
public set CausationRowData(entity: any) {
this._causationRowData = entity;
}
public get CausationRowData() {
return this._causationRowData;
}
public set ReversedTransactionRowData(entity: any) {
this._reversedTransactionRowData = entity;
}
public get ReversedTransactionRowData() {
return this._reversedTransactionRowData;
}
}