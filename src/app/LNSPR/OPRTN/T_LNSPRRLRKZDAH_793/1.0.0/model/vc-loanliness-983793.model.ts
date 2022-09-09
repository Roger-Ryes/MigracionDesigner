import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanLinesCreation } from "../../../../entities/LoanLinesCreation";
import { ValidationGroup } from "../../../../entities/ValidationGroup";
export class Model {
private _loanLinesCreation!: any;
private _validationGroup!: any;
constructor(private formGroupArray: any) {
this._loanLinesCreation = new LoanLinesCreation();
this._validationGroup = new ValidationGroup();
}
public set LoanLinesCreation(valores: any) {
this._loanLinesCreation = valores;
}
public get LoanLinesCreation(): any {
return this._loanLinesCreation;
}
public set ValidationGroup(valores: any) {
this._validationGroup = valores;
}
public get ValidationGroup(): any {
return this._validationGroup;
}
}