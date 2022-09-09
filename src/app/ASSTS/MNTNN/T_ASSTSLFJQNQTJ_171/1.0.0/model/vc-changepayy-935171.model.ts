import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ChangePayDayEntity } from "../../../../entities/ChangePayDayEntity";
import { Loan } from "../../../../entities/Loan";
export class Model {
private _changePayDayEntity!: ChangePayDayEntity;
private _loan!: any;
constructor(private formGroupArray: any) {
this._changePayDayEntity = new ChangePayDayEntity(formGroupArray["ChangePayDayEntity"]);
this._loan = new Loan();
}
public set ChangePayDayEntity(valores: any) {
this._changePayDayEntity = CobisDesignerUtil.getEntityData(this._changePayDayEntity, valores);
}
public get ChangePayDayEntity():ChangePayDayEntity{
return this._changePayDayEntity;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}