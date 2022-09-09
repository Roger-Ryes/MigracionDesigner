import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { GeneralParameters } from "../../../../entities/GeneralParameters";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { RestructuringSummary } from "../../../../entities/RestructuringSummary";
import { RestructuringList } from "../../../../entities/RestructuringList";
import { RestructuringFilter } from "../../../../entities/RestructuringFilter";
export class Model {
private _generalParameters!: any;
private _operationEntity!: any;
private _restructuringSummary!: RestructuringSummary;
public RestructuringList!: any;
private _restructuringListRowData!: RestructuringList;
private _restructuringFilter!: RestructuringFilter;
constructor(private formGroupArray: any) {
this._generalParameters = new GeneralParameters();
this._operationEntity = new OperationEntity();
this._restructuringSummary = new RestructuringSummary(formGroupArray["RestructuringSummary"]);
this.RestructuringList = [];
this._restructuringListRowData = new RestructuringList(formGroupArray["RestructuringList"]);
this._restructuringFilter = new RestructuringFilter(formGroupArray["RestructuringFilter"]);
}
public set GeneralParameters(valores: any) {
this._generalParameters = valores;
}
public get GeneralParameters(): any {
return this._generalParameters;
}
public set OperationEntity(valores: any) {
this._operationEntity = valores;
}
public get OperationEntity(): any {
return this._operationEntity;
}
public set RestructuringSummary(valores: any) {
this._restructuringSummary = CobisDesignerUtil.getEntityData(this._restructuringSummary, valores);
}
public get RestructuringSummary():RestructuringSummary{
return this._restructuringSummary;
}
public set RestructuringListRowData(entity: any) {
this._restructuringListRowData = entity;
}
public get RestructuringListRowData() {
return this._restructuringListRowData;
}
public set RestructuringFilter(valores: any) {
this._restructuringFilter = CobisDesignerUtil.getEntityData(this._restructuringFilter, valores);
}
public get RestructuringFilter():RestructuringFilter{
return this._restructuringFilter;
}
}