import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { AmortizationManualRequest } from "../../../../entities/AmortizationManualRequest";
import { AmortizationEntity } from "../../../../entities/AmortizationEntity";
import { CreateOperationOne } from "../../../../entities/CreateOperationOne";
import { DebtorEntity } from "../../../../entities/DebtorEntity";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { ItemEntity } from "../../../../entities/ItemEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
export class Model {
private _amortizationTitleEntity!: any;
private _amortizationFormEntity!: AmortizationFormEntity;
private _amortizationManualRequest!: any;
public AmortizationEntity!: any;
private _amortizationEntityRowData!: AmortizationEntity;
private _createOperationOne!: any;
private _debtorEntity!: any;
private _generalParametersQuery!: any;
private _genericEntity!: any;
private _itemEntity!: any;
private _operationEntity!: any;
constructor(private formGroupArray: any) {
this._amortizationTitleEntity = new AmortizationTitleEntity();
this._amortizationFormEntity = new AmortizationFormEntity(formGroupArray["AmortizationFormEntity"]);
this._amortizationManualRequest = new AmortizationManualRequest();
this.AmortizationEntity = [];
this._amortizationEntityRowData = new AmortizationEntity(formGroupArray["AmortizationEntity"]);
this._createOperationOne = new CreateOperationOne();
this._debtorEntity = new DebtorEntity();
this._generalParametersQuery = new GeneralParametersQuery();
this._genericEntity = new GenericEntity();
this._itemEntity = new ItemEntity();
this._operationEntity = new OperationEntity();
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
public set AmortizationManualRequest(valores: any) {
this._amortizationManualRequest = valores;
}
public get AmortizationManualRequest(): any {
return this._amortizationManualRequest;
}
public set AmortizationEntityRowData(entity: any) {
this._amortizationEntityRowData = entity;
}
public get AmortizationEntityRowData() {
return this._amortizationEntityRowData;
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
public set ItemEntity(valores: any) {
this._itemEntity = valores;
}
public get ItemEntity(): any {
return this._itemEntity;
}
public set OperationEntity(valores: any) {
this._operationEntity = valores;
}
public get OperationEntity(): any {
return this._operationEntity;
}
}