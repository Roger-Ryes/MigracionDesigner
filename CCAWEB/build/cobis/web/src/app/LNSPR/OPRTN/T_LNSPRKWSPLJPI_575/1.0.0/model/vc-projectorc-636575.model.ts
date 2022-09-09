import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OtherCharges } from "../../../../entities/OtherCharges";
import { MassiveCommissionsMistakes } from "../../../../entities/MassiveCommissionsMistakes";
export class Model {
private _otherCharges!: OtherCharges;
private _massiveCommissionsMistakes!: any;
constructor(private formGroupArray: any) {
this._otherCharges = new OtherCharges(formGroupArray["OtherCharges"]);
this._massiveCommissionsMistakes = new MassiveCommissionsMistakes();
}
public set OtherCharges(valores: any) {
this._otherCharges = CobisDesignerUtil.getEntityData(this._otherCharges, valores);
}
public get OtherCharges():OtherCharges{
return this._otherCharges;
}
public set MassiveCommissionsMistakes(valores: any) {
this._massiveCommissionsMistakes = valores;
}
public get MassiveCommissionsMistakes(): any {
return this._massiveCommissionsMistakes;
}
}