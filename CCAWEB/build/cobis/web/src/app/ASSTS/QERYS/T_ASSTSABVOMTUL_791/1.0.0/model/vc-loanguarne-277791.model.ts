import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanGuaranteesSurety } from "../../../../entities/LoanGuaranteesSurety";
export class Model {
public LoanGuaranteesSurety!: any;
private _loanGuaranteesSuretyRowData!: LoanGuaranteesSurety;
constructor(private formGroupArray: any) {
this.LoanGuaranteesSurety = [];
this._loanGuaranteesSuretyRowData = new LoanGuaranteesSurety(formGroupArray["LoanGuaranteesSurety"]);
}
public set LoanGuaranteesSuretyRowData(entity: any) {
this._loanGuaranteesSuretyRowData = entity;
}
public get LoanGuaranteesSuretyRowData() {
return this._loanGuaranteesSuretyRowData;
}
}