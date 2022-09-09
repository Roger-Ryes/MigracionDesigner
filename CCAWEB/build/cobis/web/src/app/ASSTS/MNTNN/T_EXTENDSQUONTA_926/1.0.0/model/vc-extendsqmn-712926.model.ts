import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Loan } from "../../../../entities/Loan";
import { CurrentQuotas } from "../../../../entities/CurrentQuotas";
import { ExtendsQuotaExt } from "../../../../entities/ExtendsQuotaExt";
import { ExtendsQuota } from "../../../../entities/ExtendsQuota";
import { LoanInstancia } from "../../../../entities/LoanInstancia";
export class Model {
private _loan!: Loan;
public CurrentQuotas!: any;
private _currentQuotasRowData!: CurrentQuotas;
public ExtendsQuotaExt!: any;
private _extendsQuotaExtRowData!: ExtendsQuotaExt;
private _extendsQuota!: ExtendsQuota;
private _loanInstancia!: any;
constructor(private formGroupArray: any) {
this._loan = new Loan(formGroupArray["Loan"]);
this.CurrentQuotas = [];
this._currentQuotasRowData = new CurrentQuotas(formGroupArray["CurrentQuotas"]);
this.ExtendsQuotaExt = [];
this._extendsQuotaExtRowData = new ExtendsQuotaExt(formGroupArray["ExtendsQuotaExt"]);
this._extendsQuota = new ExtendsQuota(formGroupArray["ExtendsQuota"]);
this._loanInstancia = new LoanInstancia();
}
public set Loan(valores: any) {
this._loan = CobisDesignerUtil.getEntityData(this._loan, valores);
}
public get Loan():Loan{
return this._loan;
}
public set CurrentQuotasRowData(entity: any) {
this._currentQuotasRowData = entity;
}
public get CurrentQuotasRowData() {
return this._currentQuotasRowData;
}
public set ExtendsQuotaExtRowData(entity: any) {
this._extendsQuotaExtRowData = entity;
}
public get ExtendsQuotaExtRowData() {
return this._extendsQuotaExtRowData;
}
public set ExtendsQuota(valores: any) {
this._extendsQuota = CobisDesignerUtil.getEntityData(this._extendsQuota, valores);
}
public get ExtendsQuota():ExtendsQuota{
return this._extendsQuota;
}
public set LoanInstancia(valores: any) {
this._loanInstancia = valores;
}
public get LoanInstancia(): any {
return this._loanInstancia;
}
}