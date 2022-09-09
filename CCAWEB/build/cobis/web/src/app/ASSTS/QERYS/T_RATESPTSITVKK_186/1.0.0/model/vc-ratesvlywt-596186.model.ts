import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanRates } from "../../../../entities/LoanRates";
export class Model {
public LoanRates!: any;
private _loanRatesRowData!: LoanRates;
constructor(private formGroupArray: any) {
this.LoanRates = [];
this._loanRatesRowData = new LoanRates(formGroupArray["LoanRates"]);
}
public set LoanRatesRowData(entity: any) {
this._loanRatesRowData = entity;
}
public get LoanRatesRowData() {
return this._loanRatesRowData;
}
}