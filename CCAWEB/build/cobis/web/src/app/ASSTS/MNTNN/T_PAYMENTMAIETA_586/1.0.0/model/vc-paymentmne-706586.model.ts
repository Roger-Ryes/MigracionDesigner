import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { MethodsRetention } from "../../../../entities/MethodsRetention";
export class Model {
public MethodsRetention!: any;
private _methodsRetentionRowData!: MethodsRetention;
constructor(private formGroupArray: any) {
this.MethodsRetention = [];
this._methodsRetentionRowData = new MethodsRetention(formGroupArray["MethodsRetention"]);
}
public set MethodsRetentionRowData(entity: any) {
this._methodsRetentionRowData = entity;
}
public get MethodsRetentionRowData() {
return this._methodsRetentionRowData;
}
}