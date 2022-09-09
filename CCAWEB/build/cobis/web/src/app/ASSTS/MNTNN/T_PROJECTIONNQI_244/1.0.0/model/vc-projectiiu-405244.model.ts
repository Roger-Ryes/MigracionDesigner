import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
import { ProjectionQuota } from "../../../../entities/ProjectionQuota";
export class Model {
private _loan!: Loan;
private _loanInstancia!: any;
private _projectionQuota!: ProjectionQuota;
constructor(private formGroupArray: any) {
this._loan = new Loan(formGroupArray["Loan"]);
this._loanInstancia = new LoanInstancia();
this._projectionQuota = new ProjectionQuota(formGroupArray["ProjectionQuota"]);
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
public set LoanInstancia(valores: any) {
this._loanInstancia = valores;
}
public get LoanInstancia(): any {
return this._loanInstancia;
}
public set ProjectionQuota(valores: any) {
this._projectionQuota = CobisDesignerUtil.getEntityData(this._projectionQuota, valores);
}
public get ProjectionQuota():ProjectionQuota{
return this._projectionQuota;
}
}