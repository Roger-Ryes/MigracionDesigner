import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Amortization } from "../../../../entities/Amortization";
import { ItemsLoan } from "../../../../entities/ItemsLoan";
import { Loan } from "../../../../entities/Loan";
export class Model {
public Amortization!: any;
private _amortizationRowData!: Amortization;
private _itemsLoan!: ItemsLoan;
private _loan!: Loan;
constructor(private formGroupArray: any) {
this.Amortization = [];
this._amortizationRowData = new Amortization(formGroupArray["Amortization"]);
this._itemsLoan = new ItemsLoan(formGroupArray["ItemsLoan"]);
this._loan = new Loan(formGroupArray["Loan"]);
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
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
}