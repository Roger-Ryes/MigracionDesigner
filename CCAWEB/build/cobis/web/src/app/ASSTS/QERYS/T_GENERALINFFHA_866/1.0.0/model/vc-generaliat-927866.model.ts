import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ConsolidatedLoanStatus } from "../../../../entities/ConsolidatedLoanStatus";
import { SummaryLoanStatus } from "../../../../entities/SummaryLoanStatus";
export class Model {
private _consolidatedLoanStatus!: any;
public SummaryLoanStatus!: any;
private _summaryLoanStatusRowData!: SummaryLoanStatus;
constructor(private formGroupArray: any) {
this._consolidatedLoanStatus = new ConsolidatedLoanStatus();
this.SummaryLoanStatus = [];
this._summaryLoanStatusRowData = new SummaryLoanStatus(formGroupArray["SummaryLoanStatus"]);
}
public set ConsolidatedLoanStatus(valores: any) {
this._consolidatedLoanStatus = valores;
}
public get ConsolidatedLoanStatus(): any {
return this._consolidatedLoanStatus;
}
public set SummaryLoanStatusRowData(entity: any) {
this._summaryLoanStatusRowData = entity;
}
public get SummaryLoanStatusRowData() {
return this._summaryLoanStatusRowData;
}
}