import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Entity1 } from "../../../../entities/Entity1";
import { Rates } from "../../../../entities/Rates";
export class Model {
private _entity1!: any;
private _rates!: Rates;
constructor(private formGroupArray: any) {
this._entity1 = new Entity1();
this._rates = new Rates(formGroupArray["Rates"]);
}
public set Entity1(valores: any) {
this._entity1 = valores;
}
public get Entity1(): any {
return this._entity1;
}
public set Rates(valores: any) {
this._rates = CobisDesignerUtil.getEntityData(this._rates, valores);
}
public get Rates():Rates{
return this._rates;
}
}