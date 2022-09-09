import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { SummaryLoanStatus } from "../../../../entities/SummaryLoanStatus";
export class Model {
public SummaryLoanStatus!: any;
private _summaryLoanStatusRowData!: SummaryLoanStatus;
constructor(private formGroupArray: any) {
this.SummaryLoanStatus = [];
this._summaryLoanStatusRowData = new SummaryLoanStatus(formGroupArray["SummaryLoanStatus"]);
}
public set SummaryLoanStatusRowData(entity: any) {
this._summaryLoanStatusRowData = entity;
}
public get SummaryLoanStatusRowData() {
return this._summaryLoanStatusRowData;
}
}