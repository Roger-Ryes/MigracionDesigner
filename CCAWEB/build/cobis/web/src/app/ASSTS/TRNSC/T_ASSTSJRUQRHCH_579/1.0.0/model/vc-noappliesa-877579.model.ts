import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { NoAppliedPayment } from "../../../../entities/NoAppliedPayment";
export class Model {
public NoAppliedPayment!: any;
private _noAppliedPaymentRowData!: NoAppliedPayment;
constructor(private formGroupArray: any) {
this.NoAppliedPayment = [];
this._noAppliedPaymentRowData = new NoAppliedPayment(formGroupArray["NoAppliedPayment"]);
}
public set NoAppliedPaymentRowData(entity: any) {
this._noAppliedPaymentRowData = entity;
}
public get NoAppliedPaymentRowData() {
return this._noAppliedPaymentRowData;
}
}