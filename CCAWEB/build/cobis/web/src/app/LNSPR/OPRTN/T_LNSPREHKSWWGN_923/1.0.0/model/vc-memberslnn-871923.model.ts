import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { SummaryMembers } from "../../../../entities/SummaryMembers";
export class Model {
public SummaryMembers!: any;
private _summaryMembersRowData!: SummaryMembers;
constructor(private formGroupArray: any) {
this.SummaryMembers = [];
this._summaryMembersRowData = new SummaryMembers(formGroupArray["SummaryMembers"]);
}
public set SummaryMembersRowData(entity: any) {
this._summaryMembersRowData = entity;
}
public get SummaryMembersRowData() {
return this._summaryMembersRowData;
}
}