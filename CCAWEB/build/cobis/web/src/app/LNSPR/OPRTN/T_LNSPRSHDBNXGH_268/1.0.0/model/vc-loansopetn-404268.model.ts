import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { GeneralOperationParameters } from "../../../../entities/GeneralOperationParameters";
import { GeneralInformation } from "../../../../entities/GeneralInformation";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { SyndicatedList } from "../../../../entities/SyndicatedList";
export class Model {
private _amortizationFormEntity!: any;
private _generalOperationParameters!: any;
private _generalInformation!: any;
private _generalParametersQuery!: any;
private _genericEntity!: any;
private _operationEntity!: OperationEntity;
public SyndicatedList!: any;
private _syndicatedListRowData!: SyndicatedList;
constructor(private formGroupArray: any) {
this._amortizationFormEntity = new AmortizationFormEntity();
this._generalOperationParameters = new GeneralOperationParameters();
this._generalInformation = new GeneralInformation();
this._generalParametersQuery = new GeneralParametersQuery();
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
this.SyndicatedList = [];
this._syndicatedListRowData = new SyndicatedList(formGroupArray["SyndicatedList"]);
}
public set AmortizationFormEntity(valores: any) {
this._amortizationFormEntity = valores;
}
public get AmortizationFormEntity(): any {
return this._amortizationFormEntity;
}
public set GeneralOperationParameters(valores: any) {
this._generalOperationParameters = valores;
}
public get GeneralOperationParameters(): any {
return this._generalOperationParameters;
}
public set GeneralInformation(valores: any) {
this._generalInformation = valores;
}
public get GeneralInformation(): any {
return this._generalInformation;
}
public set GeneralParametersQuery(valores: any) {
this._generalParametersQuery = valores;
}
public get GeneralParametersQuery(): any {
return this._generalParametersQuery;
}
public set GenericEntity(valores: any) {
this._genericEntity = valores;
}
public get GenericEntity(): any {
return this._genericEntity;
}
public set OperationEntity(valores: any) {
this._operationEntity = CobisDesignerUtil.getEntityData(this._operationEntity, valores);
}
public get OperationEntity():OperationEntity{
return this._operationEntity;
}
public set SyndicatedListRowData(entity: any) {
this._syndicatedListRowData = entity;
}
public get SyndicatedListRowData() {
return this._syndicatedListRowData;
}
}