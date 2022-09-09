import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OtherCharges } from "../../../../entities/OtherCharges";
import { Loan } from "../../../../entities/Loan";
export class Model {
public OtherCharges!: any;
private _otherChargesRowData!: OtherCharges;
private _loan!: Loan;
constructor(private formGroupArray: any) {
this.OtherCharges = [];
this._otherChargesRowData = new OtherCharges(formGroupArray["OtherCharges"]);
this._loan = new Loan(formGroupArray["Loan"]);
}
public set OtherChargesRowData(entity: any) {
this._otherChargesRowData = entity;
}
public get OtherChargesRowData() {
return this._otherChargesRowData;
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
}