import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { CompaniesBatchList } from "../../../../entities/CompaniesBatchList";
export class Model {
public CompaniesBatchList!: any;
private _companiesBatchListRowData!: CompaniesBatchList;
constructor(private formGroupArray: any) {
this.CompaniesBatchList = [];
this._companiesBatchListRowData = new CompaniesBatchList(formGroupArray["CompaniesBatchList"]);
}
public set CompaniesBatchListRowData(entity: any) {
this._companiesBatchListRowData = entity;
}
public get CompaniesBatchListRowData() {
return this._companiesBatchListRowData;
}
}