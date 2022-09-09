import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OtherCharges } from "../../../../entities/OtherCharges";
export class Model {
public OtherCharges!: any;
private _otherChargesRowData!: OtherCharges;
constructor(private formGroupArray: any) {
this.OtherCharges = [];
this._otherChargesRowData = new OtherCharges(formGroupArray["OtherCharges"]);
}
public set OtherChargesRowData(entity: any) {
this._otherChargesRowData = entity;
}
public get OtherChargesRowData() {
return this._otherChargesRowData;
}
}