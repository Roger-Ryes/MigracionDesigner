import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { CondonationDetail } from "../../../../entities/CondonationDetail";
import { ServerParameter } from "../../../../entities/ServerParameter";
export class Model {
public CondonationDetail!: any;
private _condonationDetailRowData!: CondonationDetail;
private _serverParameter!: any;
constructor(private formGroupArray: any) {
this.CondonationDetail = [];
this._condonationDetailRowData = new CondonationDetail(formGroupArray["CondonationDetail"]);
this._serverParameter = new ServerParameter();
}
public set CondonationDetailRowData(entity: any) {
this._condonationDetailRowData = entity;
}
public get CondonationDetailRowData() {
return this._condonationDetailRowData;
}
public set ServerParameter(valores: any) {
this._serverParameter = valores;
}
public get ServerParameter(): any {
return this._serverParameter;
}
}