import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { PaymentDetail } from "../../../../entities/PaymentDetail";
export class Model {
public PaymentDetail!: any;
private _paymentDetailRowData!: PaymentDetail;
constructor(private formGroupArray: any) {
this.PaymentDetail = [];
this._paymentDetailRowData = new PaymentDetail(formGroupArray["PaymentDetail"]);
}
public set PaymentDetailRowData(entity: any) {
this._paymentDetailRowData = entity;
}
public get PaymentDetailRowData() {
return this._paymentDetailRowData;
}
}