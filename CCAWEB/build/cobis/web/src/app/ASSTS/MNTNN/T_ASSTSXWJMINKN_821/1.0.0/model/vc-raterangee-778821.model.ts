import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { RateRangeList } from "../../../../entities/RateRangeList";
export class Model {
public RateRangeList!: any;
private _rateRangeListRowData!: RateRangeList;
constructor(private formGroupArray: any) {
this.RateRangeList = [];
this._rateRangeListRowData = new RateRangeList(formGroupArray["RateRangeList"]);
}
public set RateRangeListRowData(entity: any) {
this._rateRangeListRowData = entity;
}
public get RateRangeListRowData() {
return this._rateRangeListRowData;
}
}