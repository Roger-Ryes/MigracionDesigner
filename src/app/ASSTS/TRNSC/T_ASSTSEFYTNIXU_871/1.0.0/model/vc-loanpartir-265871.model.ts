import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { AmortizationFormEntity } from "../../../../entities/AmortizationFormEntity";
import { Loan } from "../../../../entities/Loan";
export class Model {
private _amortizationFormEntity!: any;
private _loan!: any;
constructor(private formGroupArray: any) {
this._amortizationFormEntity = new AmortizationFormEntity();
this._loan = new Loan();
}
public set AmortizationFormEntity(valores: any) {
this._amortizationFormEntity = valores;
}
public get AmortizationFormEntity(): any {
return this._amortizationFormEntity;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
}