import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { CreateOperationTwo } from "../../../../entities/CreateOperationTwo";
import { CreateOperationOne } from "../../../../entities/CreateOperationOne";
import { DebtorEntity } from "../../../../entities/DebtorEntity";
import { GeneralOperationParameters } from "../../../../entities/GeneralOperationParameters";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { OperationCRUDFormEntity } from "../../../../entities/OperationCRUDFormEntity";
export class Model {
private _amortizationTitleEntity!: any;
private _amortizationFormEntity!: any;
private _createOperationTwo!: any;
private _createOperationOne!: any;
public DebtorEntity!: any;
private _debtorEntityRowData!: DebtorEntity;
private _generalOperationParameters!: any;
private _genericEntity!: any;
private _operationEntity!: OperationEntity;
private _operationCRUDFormEntity!: OperationCRUDFormEntity;
constructor(private formGroupArray: any) {
this._amortizationTitleEntity = new AmortizationTitleEntity();
this._amortizationFormEntity = new AmortizationFormEntity();
this._createOperationTwo = new CreateOperationTwo();
this._createOperationOne = new CreateOperationOne();
this.DebtorEntity = [];
this._debtorEntityRowData = new DebtorEntity(formGroupArray["DebtorEntity"]);
this._generalOperationParameters = new GeneralOperationParameters();
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
this._operationCRUDFormEntity = new OperationCRUDFormEntity(formGroupArray["OperationCRUDFormEntity"]);
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
public set GeneralOperationParameters(valores: any) {
this._generalOperationParameters = valores;
}
public get GeneralOperationParameters(): any {
return this._generalOperationParameters;
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
}