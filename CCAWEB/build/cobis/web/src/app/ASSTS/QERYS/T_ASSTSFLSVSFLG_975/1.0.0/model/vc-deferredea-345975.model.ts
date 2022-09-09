import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DeferredItemsDetailList } from "../../../../entities/DeferredItemsDetailList";
export class Model {
public DeferredItemsDetailList!: any;
private _deferredItemsDetailListRowData!: DeferredItemsDetailList;
constructor(private formGroupArray: any) {
this.DeferredItemsDetailList = [];
this._deferredItemsDetailListRowData = new DeferredItemsDetailList(formGroupArray["DeferredItemsDetailList"]);
}
public set DeferredItemsDetailListRowData(entity: any) {
this._deferredItemsDetailListRowData = entity;
}
public get DeferredItemsDetailListRowData() {
return this._deferredItemsDetailListRowData;
}
}