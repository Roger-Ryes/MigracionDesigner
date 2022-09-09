import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanIntercycle } from "../../../../entities/LoanIntercycle";
export class Model {
public LoanIntercycle!: any;
private _loanIntercycleRowData!: LoanIntercycle;
constructor(private formGroupArray: any) {
this.LoanIntercycle = [];
this._loanIntercycleRowData = new LoanIntercycle(formGroupArray["LoanIntercycle"]);
}
public set LoanIntercycleRowData(entity: any) {
this._loanIntercycleRowData = entity;
}
public get LoanIntercycleRowData() {
return this._loanIntercycleRowData;
}
}