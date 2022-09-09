import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { RefinanceLoans } from "../../../../entities/RefinanceLoans";
export class Model {
public RefinanceLoans!: any;
private _refinanceLoansRowData!: RefinanceLoans;
constructor(private formGroupArray: any) {
this.RefinanceLoans = [];
this._refinanceLoansRowData = new RefinanceLoans(formGroupArray["RefinanceLoans"]);
}
public set RefinanceLoansRowData(entity: any) {
this._refinanceLoansRowData = entity;
}
public get RefinanceLoansRowData() {
return this._refinanceLoansRowData;
}
}