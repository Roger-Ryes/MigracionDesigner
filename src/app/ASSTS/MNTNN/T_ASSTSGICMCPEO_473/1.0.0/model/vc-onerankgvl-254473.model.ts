import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Entity1 } from "../../../../entities/Entity1";
import { OneRankFilter } from "../../../../entities/OneRankFilter";
import { OneRankList } from "../../../../entities/OneRankList";
export class Model {
private _entity1!: any;
private _oneRankFilter!: OneRankFilter;
public OneRankList!: any;
private _oneRankListRowData!: OneRankList;
constructor(private formGroupArray: any) {
this._entity1 = new Entity1();
this._oneRankFilter = new OneRankFilter(formGroupArray["OneRankFilter"]);
this.OneRankList = [];
this._oneRankListRowData = new OneRankList(formGroupArray["OneRankList"]);
}
public set Entity1(valores: any) {
this._entity1 = valores;
}
public get Entity1(): any {
return this._entity1;
}
public set OneRankFilter(valores: any) {
this._oneRankFilter = CobisDesignerUtil.getEntityData(this._oneRankFilter, valores);
}
public get OneRankFilter():OneRankFilter{
return this._oneRankFilter;
}
public set OneRankListRowData(entity: any) {
this._oneRankListRowData = entity;
}
public get OneRankListRowData() {
return this._oneRankListRowData;
}
}