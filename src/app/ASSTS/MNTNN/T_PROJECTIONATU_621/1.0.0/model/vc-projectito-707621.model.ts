import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
import { Loan } from "../../../../entities/Loan";
import { ProjectionQuota } from "../../../../entities/ProjectionQuota";
export class Model {
private _loanInstancia!: any;
private _loan!: any;
private _projectionQuota!: ProjectionQuota;
constructor(private formGroupArray: any) {
this._loanInstancia = new LoanInstancia();
this._loan = new Loan();
this._projectionQuota = new ProjectionQuota(formGroupArray["ProjectionQuota"]);
}
public set LoanInstancia(valores: any) {
this._loanInstancia = valores;
}
public get LoanInstancia(): any {
return this._loanInstancia;
}
public set Loan(valores: any) {
this._loan = valores;
}
public get Loan(): any {
return this._loan;
}
public set ProjectionQuota(valores: any) {
this._projectionQuota = CobisDesignerUtil.getEntityData(this._projectionQuota, valores);
}
public get ProjectionQuota():ProjectionQuota{
return this._projectionQuota;
}
}