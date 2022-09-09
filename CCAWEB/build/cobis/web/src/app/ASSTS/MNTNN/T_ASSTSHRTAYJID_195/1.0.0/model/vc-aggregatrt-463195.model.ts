import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AggregateDeferredItemsEntity } from "../../../../entities/AggregateDeferredItemsEntity";
import { Loan } from "../../../../entities/Loan";
export class Model {
private _aggregateDeferredItemsEntity!: AggregateDeferredItemsEntity;
private _loan!: any;
constructor(private formGroupArray: any) {
this._aggregateDeferredItemsEntity = new AggregateDeferredItemsEntity(formGroupArray["AggregateDeferredItemsEntity"]);
this._loan = new Loan();
}
public set AggregateDeferredItemsEntity(valores: any) {
this._aggregateDeferredItemsEntity = CobisDesignerUtil.getEntityData(this._aggregateDeferredItemsEntity, valores);
}
public get AggregateDeferredItemsEntity():AggregateDeferredItemsEntity{
return this._aggregateDeferredItemsEntity;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}