import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { SummaryStatus } from "../../../../entities/SummaryStatus";
export class Model {
public SummaryStatus!: any;
private _summaryStatusRowData!: SummaryStatus;
constructor(private formGroupArray: any) {
this.SummaryStatus = [];
this._summaryStatusRowData = new SummaryStatus(formGroupArray["SummaryStatus"]);
}
public set SummaryStatusRowData(entity: any) {
this._summaryStatusRowData = entity;
}
public get SummaryStatusRowData() {
return this._summaryStatusRowData;
}
}