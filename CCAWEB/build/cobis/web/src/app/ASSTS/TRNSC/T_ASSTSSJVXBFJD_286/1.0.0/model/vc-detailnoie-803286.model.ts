import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DetailNoAppliedPayment } from "../../../../entities/DetailNoAppliedPayment";
export class Model {
public DetailNoAppliedPayment!: any;
private _detailNoAppliedPaymentRowData!: DetailNoAppliedPayment;
constructor(private formGroupArray: any) {
this.DetailNoAppliedPayment = [];
this._detailNoAppliedPaymentRowData = new DetailNoAppliedPayment(formGroupArray["DetailNoAppliedPayment"]);
}
public set DetailNoAppliedPaymentRowData(entity: any) {
this._detailNoAppliedPaymentRowData = entity;
}
public get DetailNoAppliedPaymentRowData() {
return this._detailNoAppliedPaymentRowData;
}
}