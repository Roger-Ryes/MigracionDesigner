import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { TwoRangesFilter } from "../../../../entities/TwoRangesFilter";
import { TwoRangesList } from "../../../../entities/TwoRangesList";
export class Model {
private _twoRangesFilter!: TwoRangesFilter;
public TwoRangesList!: any;
private _twoRangesListRowData!: TwoRangesList;
constructor(private formGroupArray: any) {
this._twoRangesFilter = new TwoRangesFilter(formGroupArray["TwoRangesFilter"]);
this.TwoRangesList = [];
this._twoRangesListRowData = new TwoRangesList(formGroupArray["TwoRangesList"]);
}
public set TwoRangesFilter(valores: any) {
this._twoRangesFilter = CobisDesignerUtil.getEntityData(this._twoRangesFilter, valores);
}
public get TwoRangesFilter():TwoRangesFilter{
return this._twoRangesFilter;
}
public set TwoRangesListRowData(entity: any) {
this._twoRangesListRowData = entity;
}
public get TwoRangesListRowData() {
return this._twoRangesListRowData;
}
}