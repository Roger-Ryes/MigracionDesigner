import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationTitleEntity } from "../../../../entities/AmortizationTitleEntity";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { AmortizationEntity } from "../../../../entities/AmortizationEntity";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { ItemValues } from "../../../../entities/ItemValues";
import { OperationEntity } from "../../../../entities/OperationEntity";
import { OperationItemsList } from "../../../../entities/OperationItemsList";
export class Model {
private _amortizationTitleEntity!: any;
private _amortizationFormEntity!: any;
private _amortizationEntity!: any;
private _generalParametersQuery!: any;
private _genericEntity!: any;
private _itemValues!: any;
private _operationEntity!: any;
private _operationItemsList!: OperationItemsList;
constructor(private formGroupArray: any) {
this._amortizationTitleEntity = new AmortizationTitleEntity();
this._amortizationFormEntity = new AmortizationFormEntity();
this._amortizationEntity = new AmortizationEntity();
this._generalParametersQuery = new GeneralParametersQuery();
this._genericEntity = new GenericEntity();
this._itemValues = new ItemValues();
this._operationEntity = new OperationEntity();
this._operationItemsList = new OperationItemsList(formGroupArray["OperationItemsList"]);
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
public set ItemValues(valores: any) {
this._itemValues = valores;
}
public get ItemValues(): any {
return this._itemValues;
}
public set OperationEntity(valores: any) {
this._operationEntity = valores;
}
public get OperationEntity(): any {
return this._operationEntity;
}
public set OperationItemsList(valores: any) {
this._operationItemsList = CobisDesignerUtil.getEntityData(this._operationItemsList, valores);
}
public get OperationItemsList():OperationItemsList{
return this._operationItemsList;
}
}