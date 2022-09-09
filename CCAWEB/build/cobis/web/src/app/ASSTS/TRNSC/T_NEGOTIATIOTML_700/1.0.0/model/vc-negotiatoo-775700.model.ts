import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Negotiation } from "../../../../entities/Negotiation";
export class Model {
private _negotiation!: Negotiation;
constructor(private formGroupArray: any) {
this._negotiation = new Negotiation(formGroupArray["Negotiation"]);
}
public set Negotiation(valores: any) {
this._negotiation = CobisDesignerUtil.getEntityData(this._negotiation, valores);
}
public get Negotiation():Negotiation{
return this._negotiation;
}
}