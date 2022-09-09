import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { BankAccount } from "../../../../entities/BankAccount";
import { Payment } from "../../../../entities/Payment";
export class Model {
public BankAccount!: any;
private _bankAccountRowData!: BankAccount;
private _payment!: any;
constructor(private formGroupArray: any) {
this.BankAccount = [];
this._bankAccountRowData = new BankAccount(formGroupArray["BankAccount"]);
this._payment = new Payment();
}
public set BankAccountRowData(entity: any) {
this._bankAccountRowData = entity;
}
public get BankAccountRowData() {
return this._bankAccountRowData;
}
public set Payment(valores: any) {
this._payment = valores;
}
public get Payment(): any {
return this._payment;
}
}