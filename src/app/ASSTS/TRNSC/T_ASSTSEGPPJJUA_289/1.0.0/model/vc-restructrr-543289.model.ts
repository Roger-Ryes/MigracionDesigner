import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OperationEntity } from "../../../../entities/OperationEntity";
export class Model {
private _operationEntity!: any;
constructor(private formGroupArray: any) {
this._operationEntity = new OperationEntity();
}
public set OperationEntity(valores: any) {
this._operationEntity = valores;
}
public get OperationEntity(): any {
return this._operationEntity;
}
}