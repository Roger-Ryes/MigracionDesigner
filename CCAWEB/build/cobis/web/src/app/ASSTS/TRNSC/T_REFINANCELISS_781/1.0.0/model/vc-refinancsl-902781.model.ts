import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { GeneralParameters } from "../../../../entities/GeneralParameters";
import { RefinanceLoanFilter } from "../../../../entities/RefinanceLoanFilter";
import { RefinanceLoans } from "../../../../entities/RefinanceLoans";
import { RulerData } from "../../../../entities/RulerData";
import { RulerResult } from "../../../../entities/RulerResult";
export class Model {
private _generalParameters!: any;
private _refinanceLoanFilter!: RefinanceLoanFilter;
public RefinanceLoans!: any;
private _refinanceLoansRowData!: RefinanceLoans;
private _rulerData!: any;
private _rulerResult!: any;
constructor(private formGroupArray: any) {
this._generalParameters = new GeneralParameters();
this._refinanceLoanFilter = new RefinanceLoanFilter(formGroupArray["RefinanceLoanFilter"]);
this.RefinanceLoans = [];
this._refinanceLoansRowData = new RefinanceLoans(formGroupArray["RefinanceLoans"]);
this._rulerData = new RulerData();
this._rulerResult = new RulerResult();
}
public set GeneralParameters(valores: any) {
this._generalParameters = valores;
}
public get GeneralParameters(): any {
return this._generalParameters;
}
public set RefinanceLoanFilter(valores: any) {
this._refinanceLoanFilter = CobisDesignerUtil.getEntityData(this._refinanceLoanFilter, valores);
}
public get RefinanceLoanFilter():RefinanceLoanFilter{
return this._refinanceLoanFilter;
}
public set RefinanceLoansRowData(entity: any) {
this._refinanceLoansRowData = entity;
}
public get RefinanceLoansRowData() {
return this._refinanceLoansRowData;
}
public set RulerData(valores: any) {
this._rulerData = valores;
}
public get RulerData(): any {
return this._rulerData;
}
public set RulerResult(valores: any) {
this._rulerResult = valores;
}
public get RulerResult(): any {
return this._rulerResult;
}
}