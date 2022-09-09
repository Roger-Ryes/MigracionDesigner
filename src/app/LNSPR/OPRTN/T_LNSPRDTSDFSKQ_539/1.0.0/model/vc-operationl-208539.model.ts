import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { AmortizationEntity } from "../../../../entities/AmortizationEntity";
import { CreateOperationTwo } from "../../../../entities/CreateOperationTwo";
import { CreateOperationOne } from "../../../../entities/CreateOperationOne";
import { CustomerEntity } from "../../../../entities/CustomerEntity";
import { DebtorEntity } from "../../../../entities/DebtorEntity";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { OperationCRUDFormEntity } from "../../../../entities/OperationCRUDFormEntity";
import { SyndicatedList } from "../../../../entities/SyndicatedList";
export class Model {
private _amortizationTitleEntity!: any;
private _amortizationFormEntity!: any;
private _amortizationEntity!: any;
private _createOperationTwo!: any;
private _createOperationOne!: any;
private _customerEntity!: any;
public DebtorEntity!: any;
private _debtorEntityRowData!: DebtorEntity;
private _generalParametersQuery!: any;
private _genericEntity!: any;
private _operationEntity!: OperationEntity;
private _operationCRUDFormEntity!: OperationCRUDFormEntity;
public SyndicatedList!: any;
private _syndicatedListRowData!: SyndicatedList;
constructor(private formGroupArray: any) {
this._amortizationTitleEntity = new AmortizationTitleEntity();
this._amortizationFormEntity = new AmortizationFormEntity();
this._amortizationEntity = new AmortizationEntity();
this._createOperationTwo = new CreateOperationTwo();
this._createOperationOne = new CreateOperationOne();
this._customerEntity = new CustomerEntity();
this.DebtorEntity = [];
this._debtorEntityRowData = new DebtorEntity(formGroupArray["DebtorEntity"]);
this._generalParametersQuery = new GeneralParametersQuery();
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
this._operationCRUDFormEntity = new OperationCRUDFormEntity(formGroupArray["OperationCRUDFormEntity"]);
this.SyndicatedList = [];
this._syndicatedListRowData = new SyndicatedList(formGroupArray["SyndicatedList"]);
}
public set AmortizationTitleEntity(valores: any) {
this._amortizationTitleEntity = valores;
}
public get AmortizationTitleEntity(): any {
return this._amortizationTitleEntity;
}
public set AmortizationFormEntity(valores: any) {
this._amortizationFormEntity = valores;
}
public get AmortizationFormEntity(): any {
return this._amortizationFormEntity;
}
public set AmortizationEntity(valores: any) {
this._amortizationEntity = valores;
}
public get AmortizationEntity(): any {
return this._amortizationEntity;
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
public set DebtorEntityRowData(entity: any) {
this._debtorEntityRowData = entity;
}
public get DebtorEntityRowData() {
return this._debtorEntityRowData;
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
}