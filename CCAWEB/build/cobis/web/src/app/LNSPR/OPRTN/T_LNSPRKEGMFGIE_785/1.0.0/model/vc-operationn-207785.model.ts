import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { GeneralParametersQuery } from "../../../../entities/GeneralParametersQuery";
import { GenericEntity } from "../../../../entities/GenericEntity";
import { OperationEntity } from "../../../../entities/OperationEntity";
export class Model {
private _amortizationFormEntity!: any;
private _generalParametersQuery!: GeneralParametersQuery;
private _genericEntity!: any;
private _operationEntity!: any;
constructor(private formGroupArray: any) {
this._amortizationFormEntity = new AmortizationFormEntity();
this._generalParametersQuery = new GeneralParametersQuery(formGroupArray["GeneralParametersQuery"]);
this._genericEntity = new GenericEntity();
this._operationEntity = new OperationEntity();
}
public set AmortizationFormEntity(valores: any) {
this._amortizationFormEntity = valores;
}
public get AmortizationFormEntity(): any {
return this._amortizationFormEntity;
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
this._operationEntity = valores;
}
public get OperationEntity(): any {
return this._operationEntity;
}
}