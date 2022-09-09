import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Amortization } from "../../../../entities/Amortization";
export class Model {
public Amortization!: any;
private _amortizationRowData!: Amortization;
constructor(private formGroupArray: any) {
this.Amortization = [];
this._amortizationRowData = new Amortization(formGroupArray["Amortization"]);
}
public set AmortizationRowData(entity: any) {
this._amortizationRowData = entity;
}
public get AmortizationRowData() {
return this._amortizationRowData;
}
}