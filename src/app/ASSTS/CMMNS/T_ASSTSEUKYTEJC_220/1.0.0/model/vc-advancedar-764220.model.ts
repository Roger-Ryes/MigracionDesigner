import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ListaEstados } from "../../../../entities/ListaEstados";
import { LoanSearchFilter } from "../../../../entities/LoanSearchFilter";
export class Model {
private _listaEstados!: any;
private _loanSearchFilter!: LoanSearchFilter;
constructor(private formGroupArray: any) {
this._listaEstados = new ListaEstados();
this._loanSearchFilter = new LoanSearchFilter(formGroupArray["LoanSearchFilter"]);
}
public set ListaEstados(valores: any) {
this._listaEstados = valores;
}
public get ListaEstados(): any {
return this._listaEstados;
}
public set LoanSearchFilter(valores: any) {
this._loanSearchFilter = CobisDesignerUtil.getEntityData(this._loanSearchFilter, valores);
}
public get LoanSearchFilter():LoanSearchFilter{
return this._loanSearchFilter;
}
}