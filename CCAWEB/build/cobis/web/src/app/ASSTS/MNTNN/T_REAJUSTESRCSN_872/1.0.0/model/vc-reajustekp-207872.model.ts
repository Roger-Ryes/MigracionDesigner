import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Entity1 } from "../../../../entities/Entity1";
import { ReadjustmentLoanCab } from "../../../../entities/ReadjustmentLoanCab";
import { Loan } from "../../../../entities/Loan";
export class Model {
private _entity1!: any;
public ReadjustmentLoanCab!: any;
private _readjustmentLoanCabRowData!: ReadjustmentLoanCab;
private _loan!: Loan;
constructor(private formGroupArray: any) {
this._entity1 = new Entity1();
this.ReadjustmentLoanCab = [];
this._readjustmentLoanCabRowData = new ReadjustmentLoanCab(formGroupArray["ReadjustmentLoanCab"]);
this._loan = new Loan(formGroupArray["Loan"]);
}
public set Entity1(valores: any) {
this._entity1 = valores;
}
public get Entity1(): any {
return this._entity1;
}
public set ReadjustmentLoanCabRowData(entity: any) {
this._readjustmentLoanCabRowData = entity;
}
public get ReadjustmentLoanCabRowData() {
return this._readjustmentLoanCabRowData;
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
}