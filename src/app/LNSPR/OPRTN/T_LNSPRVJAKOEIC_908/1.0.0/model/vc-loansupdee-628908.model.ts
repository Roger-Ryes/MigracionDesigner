import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { GeneralOperationParameters } from "../../../../entities/GeneralOperationParameters";
import { GeneralInformation } from "../../../../entities/GeneralInformation";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { SyndicatedList } from "../../../../entities/SyndicatedList";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationEntity } from "../../../../entities/AmortizationEntity";
import { OperationItemsList } from "../../../../entities/OperationItemsList";
import { AmortizationManualRequest } from "../../../../entities/AmortizationManualRequest";
import { CreateOperationOne } from "../../../../entities/CreateOperationOne";
import { DebtorEntity } from "../../../../entities/DebtorEntity";
import { ItemEntity } from "../../../../entities/ItemEntity";
export class Model {
private _amortizationFormEntity!: AmortizationFormEntity;
private _generalOperationParameters!: any;
private _generalInformation!: any;
private _generalParametersQuery!: GeneralParametersQuery;
private _genericEntity!: any;
private _operationEntity!: OperationEntity;
public SyndicatedList!: any;
private _syndicatedListRowData!: SyndicatedList;
private _amortizationTitleEntity!: any;
public AmortizationEntity!: any;
private _amortizationEntityRowData!: AmortizationEntity;
public OperationItemsList!: any;
private _operationItemsListRowData!: OperationItemsList;
private _amortizationManualRequest!: any;
private _createOperationOne!: any;
private _debtorEntity!: any;
private _itemEntity!: any;
constructor(private formGroupArray: any) {
this._amortizationFormEntity = new AmortizationFormEntity(formGroupArray["AmortizationFormEntity"]);
this._generalOperationParameters = new GeneralOperationParameters();
this._generalInformation = new GeneralInformation();
this._generalParametersQuery = new GeneralParametersQuery(formGroupArray["GeneralParametersQuery"]);
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
this.SyndicatedList = [];
this._syndicatedListRowData = new SyndicatedList(formGroupArray["SyndicatedList"]);
this._amortizationTitleEntity = new AmortizationTitleEntity();
this.AmortizationEntity = [];
this._amortizationEntityRowData = new AmortizationEntity(formGroupArray["AmortizationEntity"]);
this.OperationItemsList = [];
this._operationItemsListRowData = new OperationItemsList(formGroupArray["OperationItemsList"]);
this._amortizationManualRequest = new AmortizationManualRequest();
this._createOperationOne = new CreateOperationOne();
this._debtorEntity = new DebtorEntity();
this._itemEntity = new ItemEntity();
}
public set AmortizationFormEntity(valores: any) {
this._amortizationFormEntity = CobisDesignerUtil.getEntityData(this._amortizationFormEntity, valores);
}
public get AmortizationFormEntity():AmortizationFormEntity{
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
this._generalParametersQuery = CobisDesignerUtil.getEntityData(this._generalParametersQuery, valores);
}
public get GeneralParametersQuery():GeneralParametersQuery{
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
public set AmortizationTitleEntity(valores: any) {
this._amortizationTitleEntity = valores;
}
public get AmortizationTitleEntity(): any {
return this._amortizationTitleEntity;
}
public set AmortizationEntityRowData(entity: any) {
this._amortizationEntityRowData = entity;
}
public get AmortizationEntityRowData() {
return this._amortizationEntityRowData;
}
public set OperationItemsListRowData(entity: any) {
this._operationItemsListRowData = entity;
}
public get OperationItemsListRowData() {
return this._operationItemsListRowData;
}
public set AmortizationManualRequest(valores: any) {
this._amortizationManualRequest = valores;
}
public get AmortizationManualRequest(): any {
return this._amortizationManualRequest;
}
public set CreateOperationOne(valores: any) {
this._createOperationOne = valores;
}
public get CreateOperationOne(): any {
return this._createOperationOne;
}
public set DebtorEntity(valores: any) {
this._debtorEntity = valores;
}
public get DebtorEntity(): any {
return this._debtorEntity;
}
public set ItemEntity(valores: any) {
this._itemEntity = valores;
}
public get ItemEntity(): any {
return this._itemEntity;
}
}