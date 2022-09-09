import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationQuoteDetail } from "../../../../entities/AmortizationQuoteDetail";
export class Model {
public AmortizationQuoteDetail!: any;
private _amortizationQuoteDetailRowData!: AmortizationQuoteDetail;
constructor(private formGroupArray: any) {
this.AmortizationQuoteDetail = [];
this._amortizationQuoteDetailRowData = new AmortizationQuoteDetail(formGroupArray["AmortizationQuoteDetail"]);
}
public set AmortizationQuoteDetailRowData(entity: any) {
this._amortizationQuoteDetailRowData = entity;
}
public get AmortizationQuoteDetailRowData() {
return this._amortizationQuoteDetailRowData;
}
}