import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OfficialOfficeTransferList } from "../../../../entities/OfficialOfficeTransferList";
import { OfficialOfficeTransferFilter } from "../../../../entities/OfficialOfficeTransferFilter";
export class Model {
public OfficialOfficeTransferList!: any;
private _officialOfficeTransferListRowData!: OfficialOfficeTransferList;
private _officialOfficeTransferFilter!: OfficialOfficeTransferFilter;
constructor(private formGroupArray: any) {
this.OfficialOfficeTransferList = [];
this._officialOfficeTransferListRowData = new OfficialOfficeTransferList(formGroupArray["OfficialOfficeTransferList"]);
this._officialOfficeTransferFilter = new OfficialOfficeTransferFilter(formGroupArray["OfficialOfficeTransferFilter"]);
}
public set OfficialOfficeTransferListRowData(entity: any) {
this._officialOfficeTransferListRowData = entity;
}
public get OfficialOfficeTransferListRowData() {
return this._officialOfficeTransferListRowData;
}
public set OfficialOfficeTransferFilter(valores: any) {
this._officialOfficeTransferFilter = CobisDesignerUtil.getEntityData(this._officialOfficeTransferFilter, valores);
}
public get OfficialOfficeTransferFilter():OfficialOfficeTransferFilter{
return this._officialOfficeTransferFilter;
}
}