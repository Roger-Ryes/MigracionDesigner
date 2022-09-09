import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanLinesCreation } from "../../../../entities/LoanLinesCreation";
import { Members } from "../../../../entities/Members";
import { ValidationGroup } from "../../../../entities/ValidationGroup";
export class Model {
private _loanLinesCreation!: LoanLinesCreation;
private _members!: any;
private _validationGroup!: any;
constructor(private formGroupArray: any) {
this._loanLinesCreation = new LoanLinesCreation(formGroupArray["LoanLinesCreation"]);
this._members = new Members();
this._validationGroup = new ValidationGroup();
}
public set LoanLinesCreation(valores: any) {
this._loanLinesCreation = CobisDesignerUtil.getEntityData(this._loanLinesCreation, valores);
}
public get LoanLinesCreation():LoanLinesCreation{
return this._loanLinesCreation;
}
public set Members(valores: any) {
this._members = valores;
}
public get Members(): any {
return this._members;
}
public set ValidationGroup(valores: any) {
this._validationGroup = valores;
}
public get ValidationGroup(): any {
return this._validationGroup;
}
}