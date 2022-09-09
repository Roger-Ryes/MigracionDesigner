import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Payment } from "../../../../entities/Payment";
export class Model {
public Payment!: any;
private _paymentRowData!: Payment;
constructor(private formGroupArray: any) {
this.Payment = [];
this._paymentRowData = new Payment(formGroupArray["Payment"]);
}
public set PaymentRowData(entity: any) {
this._paymentRowData = entity;
}
public get PaymentRowData() {
return this._paymentRowData;
}
}