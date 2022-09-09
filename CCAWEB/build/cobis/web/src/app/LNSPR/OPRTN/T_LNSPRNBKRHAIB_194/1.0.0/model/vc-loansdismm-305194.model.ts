import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanLinesCreation } from "../../../../entities/LoanLinesCreation";
import { MemberDetail } from "../../../../entities/MemberDetail";
import { Members } from "../../../../entities/Members";
export class Model {
private _loanLinesCreation!: any;
public MemberDetail!: any;
private _memberDetailRowData!: MemberDetail;
private _members!: Members;
constructor(private formGroupArray: any) {
this._loanLinesCreation = new LoanLinesCreation();
this.MemberDetail = [];
this._memberDetailRowData = new MemberDetail(formGroupArray["MemberDetail"]);
this._members = new Members(formGroupArray["Members"]);
}
public set LoanLinesCreation(valores: any) {
this._loanLinesCreation = valores;
}
public get LoanLinesCreation(): any {
return this._loanLinesCreation;
}
public set MemberDetailRowData(entity: any) {
this._memberDetailRowData = entity;
}
public get MemberDetailRowData() {
return this._memberDetailRowData;
}
public set Members(valores: any) {
this._members = CobisDesignerUtil.getEntityData(this._members, valores);
}
public get Members():Members{
return this._members;
}
}