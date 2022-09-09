import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { Catalog3Items } from "../../../../entities/Catalog3Items";
export class Model {
public Catalog3Items!: any;
private _catalog3ItemsRowData!: Catalog3Items;
constructor(private formGroupArray: any) {
this.Catalog3Items = [];
this._catalog3ItemsRowData = new Catalog3Items(formGroupArray["Catalog3Items"]);
}
public set Catalog3ItemsRowData(entity: any) {
this._catalog3ItemsRowData = entity;
}
public get Catalog3ItemsRowData() {
return this._catalog3ItemsRowData;
}
}