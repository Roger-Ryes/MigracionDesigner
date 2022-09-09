import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Rates } from "../../../../entities/Rates";
import { TypeRates } from "../../../../entities/TypeRates";
export class Model {
public Rates!: any;
private _ratesRowData!: Rates;
public TypeRates!: any;
private _typeRatesRowData!: TypeRates;
constructor(private formGroupArray: any) {
this.Rates = [];
this._ratesRowData = new Rates(formGroupArray["Rates"]);
this.TypeRates = [];
this._typeRatesRowData = new TypeRates(formGroupArray["TypeRates"]);
}
public set RatesRowData(entity: any) {
this._ratesRowData = entity;
}
public get RatesRowData() {
return this._ratesRowData;
}
public set TypeRatesRowData(entity: any) {
this._typeRatesRowData = entity;
}
public get TypeRatesRowData() {
return this._typeRatesRowData;
}
}