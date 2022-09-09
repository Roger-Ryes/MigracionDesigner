import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Seguros } from "../../../../entities/Seguros";
export class Model {
public Seguros!: any;
private _segurosRowData!: Seguros;
constructor(private formGroupArray: any) {
this.Seguros = [];
this._segurosRowData = new Seguros(formGroupArray["Seguros"]);
}
public set SegurosRowData(entity: any) {
this._segurosRowData = entity;
}
public get SegurosRowData() {
return this._segurosRowData;
}
}