import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LeftOverPayment } from "../../../../entities/LeftOverPayment";
export class Model {
private _leftOverPayment!: LeftOverPayment;
constructor(private formGroupArray: any) {
this._leftOverPayment = new LeftOverPayment(formGroupArray["LeftOverPayment"]);
}
public set LeftOverPayment(valores: any) {
this._leftOverPayment = CobisDesignerUtil.getEntityData(this._leftOverPayment, valores);
}
public get LeftOverPayment():LeftOverPayment{
return this._leftOverPayment;
}
}