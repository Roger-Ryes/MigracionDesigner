import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { MethodsRetention } from "../../../../entities/MethodsRetention";
export class Model {
private _methodsRetention!: MethodsRetention;
constructor(private formGroupArray: any) {
this._methodsRetention = new MethodsRetention(formGroupArray["MethodsRetention"]);
}
public set MethodsRetention(valores: any) {
this._methodsRetention = CobisDesignerUtil.getEntityData(this._methodsRetention, valores);
}
public get MethodsRetention():MethodsRetention{
return this._methodsRetention;
}
}