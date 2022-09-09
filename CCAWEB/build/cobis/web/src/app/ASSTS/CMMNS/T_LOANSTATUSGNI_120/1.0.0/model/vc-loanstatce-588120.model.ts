import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { Amortization } from "../../../../entities/Amortization";
import { ItemsLoan } from "../../../../entities/ItemsLoan";
export class Model {
private _loan!: Loan;
public Amortization!: any;
private _amortizationRowData!: Amortization;
private _itemsLoan!: ItemsLoan;
constructor(private formGroupArray: any) {
this._loan = new Loan(formGroupArray["Loan"]);
this.Amortization = [];
this._amortizationRowData = new Amortization(formGroupArray["Amortization"]);
this._itemsLoan = new ItemsLoan(formGroupArray["ItemsLoan"]);
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
public set AmortizationRowData(entity: any) {
this._amortizationRowData = entity;
}
public get AmortizationRowData() {
return this._amortizationRowData;
}
public set ItemsLoan(valores: any) {
this._itemsLoan = CobisDesignerUtil.getEntityData(this._itemsLoan, valores);
}
public get ItemsLoan():ItemsLoan{
return this._itemsLoan;
}
}