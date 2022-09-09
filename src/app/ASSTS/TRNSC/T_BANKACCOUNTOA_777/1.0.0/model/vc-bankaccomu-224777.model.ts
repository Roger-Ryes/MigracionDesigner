import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Entity1 } from "../../../../entities/Entity1";
import { BankAccount } from "../../../../entities/BankAccount";
export class Model {
private _entity1!: Entity1;
public BankAccount!: any;
private _bankAccountRowData!: BankAccount;
constructor(private formGroupArray: any) {
this._entity1 = new Entity1(formGroupArray["Entity1"]);
this.BankAccount = [];
this._bankAccountRowData = new BankAccount(formGroupArray["BankAccount"]);
}
public set Entity1(valores: any) {
this._entity1 = CobisDesignerUtil.getEntityData(this._entity1, valores);
}
public get Entity1():Entity1{
return this._entity1;
}
public set BankAccountRowData(entity: any) {
this._bankAccountRowData = entity;
}
public get BankAccountRowData() {
return this._bankAccountRowData;
}
}