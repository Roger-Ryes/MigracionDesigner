import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OperationEntity } from "../../../../entities/OperationEntity";
export class Model {
private _operationEntity!: OperationEntity;
constructor(private formGroupArray: any) {
this._operationEntity = new OperationEntity(formGroupArray["OperationEntity"]);
}
public set OperationEntity(valores: any) {
this._operationEntity = CobisDesignerUtil.getEntityData(this._operationEntity, valores);
}
public get OperationEntity():OperationEntity{
return this._operationEntity;
}
}