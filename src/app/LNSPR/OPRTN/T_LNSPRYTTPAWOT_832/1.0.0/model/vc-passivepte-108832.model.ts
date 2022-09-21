import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { CreateOperationTwo } from "../../../../entities/CreateOperationTwo";
import { CreateOperationOne } from "../../../../entities/CreateOperationOne";
import { DebtorEntity } from "../../../../entities/DebtorEntity";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { OperationCRUDFormEntity } from "../../../../entities/OperationCRUDFormEntity";
import { AmortizationEntity } from "../../../../entities/AmortizationEntity";
import { GeneralInformation } from "../../../../entities/GeneralInformation";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { OperationItemsList } from "../../../../entities/OperationItemsList";
import { AmortizationManualRequest } from "../../../../entities/AmortizationManualRequest";
import { ItemEntity } from "../../../../entities/ItemEntity";
export class Model {
private _amortizationTitleEntity!: any;
private _amortizationFormEntity!: AmortizationFormEntity;
private _createOperationTwo!: any;
private _createOperationOne!: any;
public DebtorEntity!: any;
private _debtorEntityRowData!: DebtorEntity;
private _genericEntity!: any;
private _operationEntity!: OperationEntity;
private _operationCRUDFormEntity!: OperationCRUDFormEntity;
public AmortizationEntity!: any;
private _amortizationEntityRowData!: AmortizationEntity;
private _generalInformation!: any;
private _generalParametersQuery!: GeneralParametersQuery;
public OperationItemsList!: any;
private _operationItemsListRowData!: OperationItemsList;
private _amortizationManualRequest!: any;
private _itemEntity!: any;
constructor(private formGroupArray: any) {
this._amortizationTitleEntity = new AmortizationTitleEntity();
this._amortizationFormEntity = new AmortizationFormEntity(formGroupArray["AmortizationFormEntity"]);
this._createOperationTwo = new CreateOperationTwo();
this._createOperationOne = new CreateOperationOne();
this.DebtorEntity = [];
this._debtorEntityRowData = new DebtorEntity(formGroupArray["DebtorEntity"]);
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
this._operationCRUDFormEntity = new OperationCRUDFormEntity(formGroupArray["OperationCRUDFormEntity"]);
this.AmortizationEntity = [];
this._amortizationEntityRowData = new AmortizationEntity(formGroupArray["AmortizationEntity"]);
this._generalInformation = new GeneralInformation();
this._generalParametersQuery = new GeneralParametersQuery(formGroupArray["GeneralParametersQuery"]);
this.OperationItemsList = [];
this._operationItemsListRowData = new OperationItemsList(formGroupArray["OperationItemsList"]);
this._amortizationManualRequest = new AmortizationManualRequest();
this._itemEntity = new ItemEntity();
}
public set AmortizationTitleEntity(valores: any) {
this._amortizationTitleEntity = valores;
}
public get AmortizationTitleEntity(): any {
return this._amortizationTitleEntity;
}
public set AmortizationFormEntity(valores: any) {
this._amortizationFormEntity = CobisDesignerUtil.getEntityData(this._amortizationFormEntity, valores);
}
public get AmortizationFormEntity():AmortizationFormEntity{
return this._amortizationFormEntity;
}
public set CreateOperationTwo(valores: any) {
this._createOperationTwo = valores;
}
public get CreateOperationTwo(): any {
return this._createOperationTwo;
}
public set CreateOperationOne(valores: any) {
this._createOperationOne = valores;
}
public get CreateOperationOne(): any {
return this._createOperationOne;
}
public set DebtorEntityRowData(entity: any) {
this._debtorEntityRowData = entity;
}
public get DebtorEntityRowData() {
return this._debtorEntityRowData;
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
public set OperationCRUDFormEntity(valores: any) {
this._operationCRUDFormEntity = CobisDesignerUtil.getEntityData(this._operationCRUDFormEntity, valores);
}
public get OperationCRUDFormEntity():OperationCRUDFormEntity{
return this._operationCRUDFormEntity;
}
public set AmortizationEntityRowData(entity: any) {
this._amortizationEntityRowData = entity;
}
public get AmortizationEntityRowData() {
return this._amortizationEntityRowData;
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
public set ItemEntity(valores: any) {
this._itemEntity = valores;
}
public get ItemEntity(): any {
return this._itemEntity;
}
}