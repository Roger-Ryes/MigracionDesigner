import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Beneficiaro } from "../../../../entities/Beneficiaro";
import { Seguros } from "../../../../entities/Seguros";
export class Model {
public Beneficiaro!: any;
private _beneficiaroRowData!: Beneficiaro;
private _seguros!: any;
constructor(private formGroupArray: any) {
this.Beneficiaro = [];
this._beneficiaroRowData = new Beneficiaro(formGroupArray["Beneficiaro"]);
this._seguros = new Seguros();
}
public set BeneficiaroRowData(entity: any) {
this._beneficiaroRowData = entity;
}
public get BeneficiaroRowData() {
return this._beneficiaroRowData;
}
public set Seguros(valores: any) {
this._seguros = valores;
}
public get Seguros(): any {
return this._seguros;
}
}