import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Amortization } from "../../../../entities/Amortization";
import { AmortizationSimulate } from "../../../../entities/AmortizationSimulate";
import { Loan } from "../../../../entities/Loan";
export class Model {
public Amortization!: any;
private _amortizationRowData!: Amortization;
private _amortizationSimulate!: any;
private _loan!: any;
constructor(private formGroupArray: any) {
this.Amortization = [];
this._amortizationRowData = new Amortization(formGroupArray["Amortization"]);
this._amortizationSimulate = new AmortizationSimulate();
this._loan = new Loan();
}
public set AmortizationRowData(entity: any) {
this._amortizationRowData = entity;
}
public get AmortizationRowData() {
return this._amortizationRowData;
}
public set AmortizationSimulate(valores: any) {
this._amortizationSimulate = valores;
}
public get AmortizationSimulate(): any {
return this._amortizationSimulate;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}