import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Entity1 } from "../../../../entities/Entity1";
import { TypeRates } from "../../../../entities/TypeRates";
export class Model {
private _entity1!: any;
private _typeRates!: TypeRates;
constructor(private formGroupArray: any) {
this._entity1 = new Entity1();
this._typeRates = new TypeRates(formGroupArray["TypeRates"]);
}
public set Entity1(valores: any) {
this._entity1 = valores;
}
public get Entity1(): any {
return this._entity1;
}
public set TypeRates(valores: any) {
this._typeRates = CobisDesignerUtil.getEntityData(this._typeRates, valores);
}
public get TypeRates():TypeRates{
return this._typeRates;
}
}