import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { AmortizationEntity } from "../../../../entities/AmortizationEntity";
import { CreateOperationTwo } from "../../../../entities/CreateOperationTwo";
import { CreateOperationOne } from "../../../../entities/CreateOperationOne";
import { CustomerEntity } from "../../../../entities/CustomerEntity";
import { DebtorReportedEntity } from "../../../../entities/DebtorReportedEntity";
import { DebtorEntity } from "../../../../entities/DebtorEntity";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { OperationCRUDFormEntity } from "../../../../entities/OperationCRUDFormEntity";
import { SyndicatedList } from "../../../../entities/SyndicatedList";
import { GeneralInformation } from "../../../../entities/GeneralInformation";
import { OperationItemsList } from "../../../../entities/OperationItemsList";
import { AmortizationManualRequest } from "../../../../entities/AmortizationManualRequest";
import { ItemEntity } from "../../../../entities/ItemEntity";
export class Model {
private _amortizationTitleEntity!: any;
private _amortizationFormEntity!: AmortizationFormEntity;
public AmortizationEntity!: any;
private _amortizationEntityRowData!: AmortizationEntity;
private _createOperationTwo!: any;
private _createOperationOne!: any;
private _customerEntity!: any;
private _debtorReportedEntity!: any;
public DebtorEntity!: any;
private _debtorEntityRowData!: DebtorEntity;
private _generalParametersQuery!: GeneralParametersQuery;
private _genericEntity!: any;
private _operationEntity!: OperationEntity;
private _operationCRUDFormEntity!: OperationCRUDFormEntity;
public SyndicatedList!: any;
private _syndicatedListRowData!: SyndicatedList;
private _generalInformation!: any;
public OperationItemsList!: any;
private _operationItemsListRowData!: OperationItemsList;
private _amortizationManualRequest!: any;
private _itemEntity!: any;
constructor(private formGroupArray: any) {
this._amortizationTitleEntity = new AmortizationTitleEntity();
this._amortizationFormEntity = new AmortizationFormEntity(formGroupArray["AmortizationFormEntity"]);
this.AmortizationEntity = [];
this._amortizationEntityRowData = new AmortizationEntity(formGroupArray["AmortizationEntity"]);
this._createOperationTwo = new CreateOperationTwo();
this._createOperationOne = new CreateOperationOne();
this._customerEntity = new CustomerEntity();
this._debtorReportedEntity = new DebtorReportedEntity();
this.DebtorEntity = [];
this._debtorEntityRowData = new DebtorEntity(formGroupArray["DebtorEntity"]);
this._generalParametersQuery = new GeneralParametersQuery(formGroupArray["GeneralParametersQuery"]);
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
this._operationCRUDFormEntity = new OperationCRUDFormEntity(formGroupArray["OperationCRUDFormEntity"]);
this.SyndicatedList = [];
this._syndicatedListRowData = new SyndicatedList(formGroupArray["SyndicatedList"]);
this._generalInformation = new GeneralInformation();
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
public set AmortizationEntityRowData(entity: any) {
this._amortizationEntityRowData = entity;
}
public get AmortizationEntityRowData() {
return this._amortizationEntityRowData;
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
public set CustomerEntity(valores: any) {
this._customerEntity = valores;
}
public get CustomerEntity(): any {
return this._customerEntity;
}
public set DebtorReportedEntity(valores: any) {
this._debtorReportedEntity = valores;
}
public get DebtorReportedEntity(): any {
return this._debtorReportedEntity;
}
public set DebtorEntityRowData(entity: any) {
this._debtorEntityRowData = entity;
}
public get DebtorEntityRowData() {
return this._debtorEntityRowData;
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
public set OperationCRUDFormEntity(valores: any) {
this._operationCRUDFormEntity = CobisDesignerUtil.getEntityData(this._operationCRUDFormEntity, valores);
}
public get OperationCRUDFormEntity():OperationCRUDFormEntity{
return this._operationCRUDFormEntity;
}
public set SyndicatedListRowData(entity: any) {
this._syndicatedListRowData = entity;
}
public get SyndicatedListRowData() {
return this._syndicatedListRowData;
}
public set GeneralInformation(valores: any) {
this._generalInformation = valores;
}
public get GeneralInformation(): any {
return this._generalInformation;
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