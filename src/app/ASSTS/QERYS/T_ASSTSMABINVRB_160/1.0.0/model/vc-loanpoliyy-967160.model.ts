import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanPolicy } from "../../../../entities/LoanPolicy";
export class Model {
public LoanPolicy!: any;
private _loanPolicyRowData!: LoanPolicy;
constructor(private formGroupArray: any) {
this.LoanPolicy = [];
this._loanPolicyRowData = new LoanPolicy(formGroupArray["LoanPolicy"]);
}
public set LoanPolicyRowData(entity: any) {
this._loanPolicyRowData = entity;
}
public get LoanPolicyRowData() {
return this._loanPolicyRowData;
}
}