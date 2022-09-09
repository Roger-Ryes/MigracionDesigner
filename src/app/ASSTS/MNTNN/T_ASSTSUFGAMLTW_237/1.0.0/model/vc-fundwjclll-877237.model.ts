import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Fund } from "../../../../entities/Fund";
export class Model {
public Fund!: any;
private _fundRowData!: Fund;
constructor(private formGroupArray: any) {
this.Fund = [];
this._fundRowData = new Fund(formGroupArray["Fund"]);
}
public set FundRowData(entity: any) {
this._fundRowData = entity;
}
public get FundRowData() {
return this._fundRowData;
}
}