import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Entity1 } from "../../../../entities/Entity1";
import { ReadjustmentLoanCab } from "../../../../entities/ReadjustmentLoanCab";
export class Model {
private _entity1!: any;
public ReadjustmentLoanCab!: any;
private _readjustmentLoanCabRowData!: ReadjustmentLoanCab;
constructor(private formGroupArray: any) {
this._entity1 = new Entity1();
this.ReadjustmentLoanCab = [];
this._readjustmentLoanCabRowData = new ReadjustmentLoanCab(formGroupArray["ReadjustmentLoanCab"]);
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
}