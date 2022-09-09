import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OtherCharges } from "../../../../entities/OtherCharges";
export class Model {
private _otherCharges!: OtherCharges;
constructor(private formGroupArray: any) {
this._otherCharges = new OtherCharges(formGroupArray["OtherCharges"]);
}
public set OtherCharges(valores: any) {
this._otherCharges = CobisDesignerUtil.getEntityData(this._otherCharges, valores);
}
public get OtherCharges():OtherCharges{
return this._otherCharges;
}
}